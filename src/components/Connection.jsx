import React, { useEffect, useRef, useState } from "react";
import streamHandler, {
  requestForMicStream,
  requestForScreenStream,
} from "../utils/streamHandler";
import "regenerator-runtime/runtime";
import "./_One.scss";
import { async } from "fast-glob";
import { ScriptElementKind } from "typescript";
const { myapi } = document;

export default function Connection({ remote, stream }) {
  const ref = useRef();
  const { id, type } = remote;

  const [mouse, setMouse] = useState("X:X");

  useEffect(() => {
    // document.myapi
    myapi.setMouse[id] = setMouse;
  }, []);
  useEffect(() => {
    let screen = document.querySelector(`#screen${id}`);
    if (stream) {
      if (screen) {
        screen.focus();
        screen.srcObject = document.myapi.getStream(id);
        screen.play();
        console.log("Rrr");
      }
    } else {
      // if (screen) screen.srcObject = document.myapi.stream.screen;
    }
    // console.log("rinn");
  }, [stream]);

  return (
    <div className="Connection">
      {/* {type===""} */}
      <Header remote={remote} />
      {type === "client" && <div>{mouse}</div>}
      {/* {type === "client" && <button onClick={handleStream}>Share</button>} */}
      {type === "remote" && (
        <video
          className="Screen"
          // muted={true}
          autoPlay
          src={null}
          id={`screen${id}`}
          // style={}
          ref={ref}
          tabIndex={1}
        ></video>
      )}
    </div>
  );
}

const Header = ({ remote }) => {
  const { id, type } = remote;

  const handleStream = async () => {
    // requestForScreenStream();
    document.myapi.remotes[id].addStream(await requestForScreenStream());
  };
  const handleMic = async () => {
    document.myapi.remotes[id].addStream(await requestForMicStream());
  };
  // const handle
  return (
    <div className="Header">
      {/* <div></div> */}
      {remote.type === "client" && (
        <button onClick={handleStream}>Screen</button>
      )}
      <button>Video</button>
      <button onClick={handleMic}>Mic</button>
    </div>
  );
};
