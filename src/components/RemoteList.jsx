import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import store from "../store/store";
import { emit, makePeerInstance } from "../utils/initators";

import "./_One.scss";
export default connect((state) => ({
  remotes: state.remotes,
  NormalSignal: state.signals.normal,
  myid: state.myid,
}))(function RemoteList({ remotes, NormalSignal, myid }) {
  const vidRef = useRef();

  const handleCall = (id) => {
    return () => {
      // let stream = await navigator.mediaDevices.getDisplayMedia({
      //   video: true,
      //   audio: true,
      // });

      // document.socket.emit(myid, {
      //   type: "OFFER",
      //   from: myid,
      //   to: id,
      //   offerType: "normal",
      //   offer: NormalSignal.offer,
      // });
      // const { id: myid } = document;
      // console.log(id);

      makePeerInstance({
        id,
        init: true,
        onConnect: (p) => {
          // console.log(p);
          // alert("true");

          store.dispatch({
            type: "CONNECTION",
            data: { id: id, type: "client" },
          });
        },
        onSignal: (signal) => {
          console.log({ signal });

          emit(id, {
            type: "REQUEST_SIGNAL",
            offer: signal,
            stage: 0,
            what: signal.type,
          });
        },
        onData: (data) => {
          console.log({ data });
        },
      });
      // emit(id, {
      //   type: "REQUEST_SIGNAL",
      // });
    };
  };

  return (
    <div className="RemoteList">
      {Object.keys(remotes)?.map((e) => {
        let { id, connected } = remotes[e];
        return (
          <div key={e}>
            <span>{id}</span>{" "}
            <button onClick={handleCall(e)}>
              {!connected ? "Accept" : "Rejected"}
            </button>
          </div>
        );
      })}
      {/* <video className="RemoteList_video" ref={vidRef} autoPlay controls /> */}
    </div>
  );
});
