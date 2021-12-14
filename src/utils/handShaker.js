import store from "../store/store";
import { emit, makePeerInstance } from "./initators";
import videoEventManager from "./videoEventManager";
const handShaker = (data) => {
  const { signalApi, id: myid } = document.myapi;

  if (data.from !== myid && data.to === myid) {
    // console.log(`inner`, data);
    switch (data.type) {
      case "REQUEST":
        store.dispatch({
          type: "ADD_PEER",
          data: { id: data.from, type: "remotes" },
        });
        break;

      case "REQUEST_SIGNAL":
        // make peer instance
        // send  generated signal to the initailzer
        let peer = document.myapi.getRemote(data.from);
        if (peer) {
          // offer is comming for accepting the signla
          peer.signal(data.offer);
        } else {
          makePeerInstance({
            id: data.from,
            init: false,
            offer: data.offer,
            onConnect: () => {
              store.dispatch({
                type: "CONNECTION",
                data: { id: data.from, type: "remote" },
              });
            },
            onSignal: (signal) => {
              console.log(signal);

              emit(data.from, {
                type: "REQUEST_ANWSER",
                offer: signal,
                stage: 1,
                what: signal.type,
              });
            },
            onStream: (stream) => {
              // console.log(stream);
              document.myapi.setStream(data.from, stream);
              let vid = document.querySelector(`#screen${data.from}`);
              vid.srcObject = stream;
              videoEventManager(data.from);
            },
            onData: (data) => {
              console.log({ data });
            },
          });
        }

        break;

      case "REQUEST_ANWSER":
        // accept normal anwser
        document.myapi.getRemote(data.from).signal(data.offer);

        break;

      case "GREEN_SIGNAL":
        store.dispatch({ type: "CONNECTION" });
        break;

      case "OFFER":
        signalApi.haveToAnwser = data.from;
        signalApi.offerType = data.offerType;
        document.p.signal(data.offer);

        break;

      case "ANSWER":
        document.p.signal(data.offer);
        store.dispatch({
          type: "EDIT_PEER",
          data: { id: data.from, connected: true, type: "remotes" },
        });

      default:
        break;
    }
  } else {
  }
};

export default handShaker;
