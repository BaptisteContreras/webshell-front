export default {
  methods: {
    getSocketConnexion(){
      return this.$store.getters['socket/getIO'];
    }
  }
}
