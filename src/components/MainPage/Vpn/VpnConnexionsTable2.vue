<template>
     <v-data-table
         :headers="headers"
         :items="arrayData"
     >
     </v-data-table>

</template>

<script>
  export default {
    name: "VpnConnexionsTable2",
    props : {
      arrayData : {
        required : true
      },
      headers : {
        required : true
      }
    }

  };
</script>

<style scoped>

</style>
