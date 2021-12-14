import React, { useEffect, useState } from "react";
import { customAlphabet } from "nanoid";
import { KEY_CONFIG } from "../utils/configs";
import { sendRequestJoin, socektInit } from "../utils/initators";
import { requestForScreenStream } from "../utils/streamHandler";
import RemoteList from "./RemoteList";
const nanoid = customAlphabet(KEY_CONFIG.string, KEY_CONFIG.length);

export default function NewSP() {
  // Generate ID
  // SaveID at document.id
  // connect to socket
  // register a route of myID
  // request for stream

  // make changes in the Server for the MainTain Map of the ID for the Subscrbing or Making new Port

  const [state, setState] = useState("");

  useEffect(() => {
    const initiator = async () => {
      const id = await new Promise((res, rej) => {
        let id = nanoid();
        document.myapi.id = id;

        setState(id);
        res(id);
      });
      const socket = await new Promise(socektInit(id));
      const screenStream = requestForScreenStream();
    };

    initiator();
  }, []);

  return (
    <div>
      <h1>{state}</h1>
      <label htmlFor="">Me ID : </label>
      <input type="text" defaultValue={state} />
      <RemoteList />
      <hr />
      <label htmlFor="">Remote ID : </label>
      <input type="text" id="yourID" />
      <button onClick={sendRequestJoin}>Connect</button>
      <hr></hr>
    </div>
  );
}
