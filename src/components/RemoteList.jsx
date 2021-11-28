import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import "./_One.scss";
export default connect((state) => ({
  remotes: state.remotes,
  NormalSignal: state.signals.normal,
  myid: state.myid,
}))(function RemoteList({ remotes, NormalSignal, myid }) {
  const vidRef = useRef();

  const handleCall = (id) => {
    return async () => {
      // let stream = await navigator.mediaDevices.getDisplayMedia({
      //   video: true,
      //   audio: true,
      // });

      document.socket.emit(myid, {
        type: "OFFER",
        from: myid,
        to: id,
        offerType: "normal",
        offer: NormalSignal.offer,
      });
    };
  };

  return (
    <div className="RemoteList">
      {NormalSignal.have &&
        Object.keys(remotes)?.map((e) => {
          let { id, connected } = remotes[e];
          return (
            <div key={e}>
              {" "}
              {id}{" "}
              <button onClick={handleCall(e)}>
                {connected ? "STREAM" : "CONNECT"}
              </button>
            </div>
          );
        })}
      {/* <video className="RemoteList_video" ref={vidRef} autoPlay controls /> */}
    </div>
  );
});
