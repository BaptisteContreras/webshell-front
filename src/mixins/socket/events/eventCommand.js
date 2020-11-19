export default function (io, _this) {
  _this;
  io.on('sendCommandOk', (data) => {
    _this.$store.dispatch('socket/ackCommand', data)
  });
  io.on('sendCommandValidationError', (data) => {
    _this.$store.dispatch('socket/errorCommand', data)
  });
  io.on('sendCommandTechnicalError', (data) => {
    _this.$store.dispatch('socket/errorCommand', data)
  });
  io.on('sessionNotFound', (data) => {
    console.log(data)
  });
  io.on('deleteSessionSuccess', (data) => {
    _this.$store.dispatch('socket/removeSession', {id : data.sessionId})
  });
  // Result
  io.on('NcSessionTechnicalError', (data) => {
    console.log(data)
  });
  io.on('NcSessionStdout', (data) => {
    _this.$store.dispatch('socket/addSessionMessage', {
      id : data.sessionId,
      message : {
        message : data.message,
        type : 'RESPONSE',
        statut: 'STDOUT',
        date : new Date()
      }
    })
  });
  io.on('NcSessionStderr', (data) => {
    _this.$store.dispatch('socket/addSessionMessage', {
      id : data.sessionId,
      message : {
        message : data.message,
        type : 'RESPONSE',
        statut: 'STDERR',
        date : new Date()
      }
    })
  });
  io.on('NcSessionClose', (data) => {
    _this.$store.dispatch('socket/addSessionMessage', {
      id : data.sessionId,
      message : {
        message : 'Process ended with code : ' + data.code,
        type : 'RESPONSE',
        statut: 'CLOSE',
        date : new Date()
      }
    })
  });

}
