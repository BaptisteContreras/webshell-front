import eventConnect from "./events/eventConnect";
import eventSession from "./events/eventSession";

export default function (io, _this) {
  eventConnect(io, _this)
  eventSession(io,_this)
}
