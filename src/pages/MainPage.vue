<template>
 <v-container>
    <States></States>
     <v-divider
             inset
     ></v-divider>
     <ActivesConnectionsCard></ActivesConnectionsCard>
 </v-container>
</template>

<script>
    import States from "../components/MainPage/States";
    import ActivesConnectionsCard from "../components/MainPage/ActivesConnectionsCard";
  export default {
    name: "MainPage",
    components: {ActivesConnectionsCard, States},
    computed : {
      States
    }
  };
</script>

<style scoped>

</style>
