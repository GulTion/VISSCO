const initState = {
  remotes: {},
  conn: {
    123: {
      stream: true,
      id: "123",
      type: "client",
    },
  },
  // [id]:{id, type, haveScreenStream, haveVideoStream}
  myid: null,
  signals: {
    normal: {
      have: false,
      offer: {},
    },
  },
};
export default initState;
