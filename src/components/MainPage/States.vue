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
  data: () => {
    return {
      apiState: '',
      apiStateHandler: null,
      loggerState: '?',
      loggerStateHandler: null,
      lastDateState: '',
      lastDateStateHandler: null,
      nbHosts: 0,
      nbHostsHandler: null,
      cards: [
        {
          color: "#00CAE3",
          title: "API State",
          state: "apiState",
        },
        {
          color: "#FF9800",
          title: "Logger State",
          state: "loggerState",
        },
        {
          color: "#4CAF50",
          title: "Last Date",
          state: "lastDateState",
        },
        {
          color: "#E91E63",
          title: "Number of hosts",
          state: 'nbHosts',
        },
      ]
    };
  },

  methods: {
    getState(state) {
      return this[state];
    },

    handleApiState() {
      fetch(this.api).then(async (d) => {
        this.apiState = JSON.parse(await d.text()).data;
      }).catch((e) => {
        console.log(e);
      });
    },

    handleLoggerState() {
      fetch(this.api + "/logger").then(async (d) => {
        this.loggerState = JSON.parse(await d.text()).data ? 'Up and working' : 'Down';
      }).catch((e) => {
        console.log(e);
      });
    },
    handleLastDate() {
      fetch(this.api + "/last-date").then(async (d) => {
        this.lastDateState = JSON.parse(await d.text()).data;
      }).catch((e) => {
        console.log(e);
      });
    },
    handleNbHosts() {
      fetch(this.api + "/nbHosts").then(async (d) => {
        this.nbHosts = JSON.parse(await d.text()).data;
      }).catch((e) => {
        console.log(e);
      });
    }
  },
  mounted() {
    this.handleApiState();
    this.handleLoggerState();
    this.handleLastDate();
    this.handleNbHosts();
    this.apiStateHandler = setInterval(this.handleApiState, 10000);
    this.loggerStateHandler = setInterval(this.handleLoggerState, 8000);
    this.lastDateStateHandler = setInterval(this.handleLastDate, 1500);
    this.nbHostsHandler = setInterval(this.handleNbHosts, 1500);
  },

  beforeDestroy() {
    clearInterval(this.apiStateHandler);
    clearInterval(this.loggerStateHandler);
    clearInterval(this.lastDateStateHandler);
    clearInterval(this.nbHostsHandler);
    this.apiStateHandler = null;
    this.loggerStateHandler = null;
    this.lastDateStateHandler = null;
    this.nbHostsHandler = null;
  }
};
</script>

<style scoped>

</style>
