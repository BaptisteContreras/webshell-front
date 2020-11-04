import eventConnect from "./events/eventConnect";
import eventSession from "./events/eventSession";
import eventCommand from "./events/eventCommand";

export default function (io, _this) {
  eventConnect(io, _this)
  eventSession(io,_this)
  eventCommand(io, _this)
}
