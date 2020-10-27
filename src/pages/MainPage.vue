<template>
 <v-container>
    <States></States>
     <v-divider
             inset
     ></v-divider>
 </v-container>
</template>

<script>
    import States from "../components/States";
  export default {
    name: "MainPage",
    components: {States},
    computed : {
      States
    }
  };
</script>

<style scoped>

</style>
