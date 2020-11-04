<template>
    <p :style="getColorStyle">{{ displayChevrons }} {{ message.message }}
        <v-progress-circular
                v-if="isPending"
                indeterminate
                color="primary"
        ></v-progress-circular>
        <v-icon
                v-if="isError"
        >mdi-reload-alert</v-icon>
    </p>
</template>

<script>
  export default {
    name: "ShellMessage",
    props : {
      message : {
        required : true
      }
    },
    computed : {
      isPending() {
        return this.message.statut === "PENDING"
      },
      isError() {
        return this.message.statut === "ERROR"
      },
      displayChevrons(){
        return this.message.type === 'COMMAND' ? '>>>' : '>'
      },
      getColorStyle(){
        return "color:"+this.getMessageColor
      },
      getMessageColor() {
        if (this.message.statut === "ERROR" || this.message.statut === "STDERR"){
          return "#FF7A7A";
        }

        if (this.message.statut === "PENDING"){
          return "#00CAE3";
        }

        if (this.message.statut === "OK" && this.message.type === "COMMAND"){
          return "#4CAF50";
        }
        if (this.message.statut === "CLOSE"){
          return "#FB8C00";
        }

        if (this.message.statut === "OK" && this.message.type === "COMMAND"){
          return "#4CAF50";
        }
        if (this.message.statut === "STDOUT" && this.message.type === "RESPONSE"){
          return "#9C27B0";
        }

        return 'black'
      }
    }
  };
</script>

<style scoped>

</style>
