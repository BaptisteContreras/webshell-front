<template>
    <v-container>
        <Shell :session="getSession"></Shell>
    </v-container>
</template>

<script>
  import Shell from "../components/Shell/Shell";
  export default {
    name: "ShellPage",
    components: {Shell},
    data () {
      return {
        session : null
      }
    },
    beforeMount() {
      let sessionId = this.$route.params.sessionId;
      let session = this.$store.getters['socket/getSocketSessions'].filter(el => el.id === sessionId)[0];
      if (!session){
        this.$router.push('/')
      }

      this.session = session;
    },

    computed : {
      getSession(){
        return this.session
      }
    }
  };
</script>

<style scoped>

</style>
