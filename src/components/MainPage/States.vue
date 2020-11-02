<template>
   <v-row>
       <StateCard
        v-for="(card, index) in cards"
        :key="index"
        :color="card.color"
        :title="card.title"
        :state="getState(card.state)"
       >

       </StateCard>
   </v-row>
</template>

<script>
  import StateCard from "./StateCard";
  export default {
    name: "States",
    components: {StateCard},
    data : () => {
        return {
          cards : [
            {
              color : "#00CAE3",
              title : "API State",
              state : "ApiState",
            },
            {
              color : "#FF9800",
              title : "Logger State",
              state : "LoggerState",
            },
            {
              color : "#4CAF50",
              title : "Last Date",
              state : "LastDateState",
            },
            {
              color : "#E91E63",
              title : "Number of hosts",
              state : 'NbHosts',
            },
          ]
        }
    },

    methods : {
      getState(state) {
        return  this.$store.getters['apiState/get'+state];
      },


    }
  };
</script>

<style scoped>

</style>
