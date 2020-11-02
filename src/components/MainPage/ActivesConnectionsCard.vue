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
        <ActivesConnexionsTable  :search="search"/>
    </v-card>
</template>

<script>
    import ActivesConnexionsTable from "./ActivesConnexionsTable";
  export default {
    name: "ActivesConnectionsCard",
    data () {
      return {
        search : ''
      }
    },
    components : {
      ActivesConnexionsTable
    }
  };
</script>

<style scoped>

</style>
