export default function (io, _this) {
  io.on('startSessionSuccess', (data) => {
    _this.$store.dispatch("socket/addSession", {
        id : data.sessionId,
        port : data.port,
        messages : [],
        lastCommandId : 1
    })
  });

}
