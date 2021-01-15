<template>
    <v-card>
        <v-card-title>
            <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
            ></v-text-field>
        </v-card-title>
        <VpnConnexionsTable :headers="headers" :array-data="arrayData" :search="search"/>

    </v-card>
</template>

<script>
    import VpnConnexionsTable from "./VpnConnexionsTable";
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
    data() {
      return {
        search : ''
      }
    },
    components : {
      VpnConnexionsTable,
    }
  };
</script>

<style scoped>

</style>
