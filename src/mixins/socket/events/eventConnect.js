export default function (io, _this) {
  io.on('connect', () => {
    _this.$store.dispatch("socket/setConnected", true);
    console.log("connect")
  });

  io.on('disconnect', () => {
    _this.$store.dispatch("socket/setConnected", false);
    console.log("disconnect")

  });
}
