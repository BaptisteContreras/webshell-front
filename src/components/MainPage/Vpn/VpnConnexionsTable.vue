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
      }
    },
    data () {
      return {
        headers : [
          {
            text: 'Common Name',
            value: 'cn'
          },
          {
            text: 'Real Address',
            value: 'ra'
          },
          {
            text: 'Virtual Address',
            value: 'va',
            sortable: false
          },
          {
            text: 'Connected Since',
            value: 'cs'
          },
          {
            text: 'Bytes Sent',
            value: 'bst'
          },
          {
            text: 'Bytes Received',
            value: 'bsr'
          },

        ]
      }
    },

  };
</script>

<style scoped>

</style>
