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
      }
    },
    data () {
      return {
        vpn : [],
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
            text: 'Target Network',
            value: 'tn',
            sortable: false
          },
          {
            text: 'Last Used',
            value: 'lu'
          }
        ],
      }
    },

  };
</script>

<style scoped>

</style>
