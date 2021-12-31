export default () => {};
const statusFormate = {
  screenConncted: false,
  micConnected: false,
  videoConnected: false,
  micPaused: false,
  videoPaused: false,
  connected: false,
};
const myapi = {
  socket: null,
  id: null,
  remotes: {},
  clients: {},
  setMouse: {},
  status: {},

  stream: {
    screen: null,
    video: null,
    mic: null,
    audio: null,
  },
  remoteStream: {},
  addRemotes: function (id, peer) {
    this.remotes[id] = peer;
    this.status[id] = statusFormate;
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
  setStatus: function (id, status) {
    this.status[id] = { ...this.status[id], ...status };
  },
  getStatus: function (id) {
    return this.status[id];
  },
};

document.myapi = myapi;

export const KEY_CONFIG = { string: "13", length: 2 };
// export const SOCKET_URL = "https://chitraBackend.gultion.repl.co";
export const SOCKET_URL = "http://127.0.0.1:5000/";
// export const SOCKET_URL = "https://kind-owl-67.loca.lt/";
// export const SOCKET_URL = "https://miniServer.gultion.repl.co";
// export const
