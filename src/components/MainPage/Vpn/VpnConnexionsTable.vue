<template>
     <v-data-table
         :headers="headers"
         :items="arrayData"
         :search="search"
     >
     </v-data-table>
</template>

<script>
  export default {
    name: "VpnConnexionsTable",
    props : {
      search : {
        required : true
      },
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
