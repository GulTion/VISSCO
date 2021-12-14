import React, { useEffect, useRef, useState } from "react";
import streamHandler, { requestForScreenStream } from "../utils/streamHandler";
import "regenerator-runtime/runtime";
const { myapi } = document;
export default function Connection({ remote, stream }) {
  const ref = useRef();
  const { id, type } = remote;

  const [mouse, setMouse] = useState("X:X");
  const handleStream = async () => {
    document.myapi.remotes[id].addStream(document.myapi.stream.screen);
  };
  useEffect(() => {
    // document.myapi
    myapi.setMouse[id] = setMouse;
  }, []);
  useEffect(() => {
    let screen = document.querySelector(`#screen${id}`);
    if (stream) {
      if (screen) {
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
      <h1>
        {id}
        {type}
      </h1>

      {type === "client" && <div>{mouse}</div>}
      {type === "client" && <button onClick={handleStream}>Share</button>}
      {type === "remote" && (
        <video
          muted={true}
          autoPlay
          src={null}
          id={`screen${id}`}
          ref={ref}
        ></video>
      )}
    </div>
  );
}
