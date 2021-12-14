export default () => {};

const myapi = {
  socket: null,
  id: null,
  remotes: {},
  clients: {},
  setMouse: {},

  stream: {
    screen: null,
    video: null,
  },
  remoteStream: {},
  addRemotes: function (id, peer) {
    this.remotes[id] = peer;
  },
  getRemote: function (id) {
    return this.remotes[id];
  },
  setStream: function (id, stream) {
    this.remoteStream[id] = stream;
  },
  getStream: function (id) {
    return this.remoteStream[id];
  },
};

document.myapi = myapi;

export const KEY_CONFIG = { string: "12", length: 2 };
export const SOCKET_URL = "https://chitraBackend.gultion.repl.co";
// export const SOCKET_URL = "http://127.0.0.1:5000/";
