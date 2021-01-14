<template>
    <v-card>
        <VpnConnexionsTable2  :array-data="arrayData" />
    </v-card>
</template>

<script>
    import VpnConnexionsTable2 from "./VpnConnexionsTable2";
  export default {
    name: "VpnCard",
    props: {
      arrayData: {
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
