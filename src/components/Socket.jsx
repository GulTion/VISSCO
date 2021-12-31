import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import handShaker from "../utils/handShaker";
export default function Socket({ id }) {
  const [conn, setConn] = useState(false);
  useEffect(() => {
    // const socket = io("https://chitraBackend.gultion.repl.co");
    const socket = io("http://127.0.0.1:5000/");
    document.socket = socket;
    socket.on("connect", () => {
      document.socket.on(id, (data) => {
        handShaker(id, data, cuId);
      });
      document.socket.emit("makeio", { id: cuId });
      setConn(true);
    });
    socket.on("done", (data) => {
      // console.log(data);
      //   socket.emit("mousemove", { x: data.x + 2, y: data.y + 2 });
    });
    // socket.on(id, (data) => {
    //   console.log(id, data);
    //   //   socket.emit("mousemove", { x: data.x + 2, y: data.y + 2 });
    // });
  }, []);
  return <div className="Socket">{conn && "Connected to Socket"}</div>;
}
