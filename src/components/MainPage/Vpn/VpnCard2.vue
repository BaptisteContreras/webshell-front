<template>
    <v-card>
        <VpnConnexionsTable2 :headers="headers"  :array-data="arrayData" />
    </v-card>
</template>

<script>
    import VpnConnexionsTable2 from "./VpnConnexionsTable2";
  export default {
    name: "VpnCard",
    props: {
      arrayData: {
        required : true
      },
      headers : {
        required : true
      }
    },

    components : {
      VpnConnexionsTable2
    },
  };
</script>

<style scoped>

</style>
