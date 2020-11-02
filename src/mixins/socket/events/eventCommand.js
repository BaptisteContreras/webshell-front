export default function (io, _this) {

  io.on('sendCommandOk', (data) => {
    console.log(data)
  });

}
