const initState = {
  remotes: {},
  conn: {},
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
