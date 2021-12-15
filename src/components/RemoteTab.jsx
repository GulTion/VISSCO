import React, { useState } from "react";
import { connect } from "react-redux";
import Connection from "./Connection";
import NewSP from "./NewSP";

// import { home } from "../assets/I";
import "./_One.scss";
const TabPanel = ({ children, now, i }) => {
  return <div style={{ display: now === i ? "flex" : "none" }}>{children}</div>;
};
export default connect((state) => ({ remotes: state.conn }))(
  function RemoteTab({ remotes, arr }) {
    const [now, setNow] = useState(0);

    const handleSet = (i) => {
      return () => {
        setNow(i);
      };
    };

    return (
      <>
        <div className="RemoteTab">
          <div
            className={`RemoteTab_tab ${
              now === 0 ? "RemoteTab_tab_active" : ""
            }`}
            onClick={handleSet(0)}
          >
            Home
          </div>
          {Object.keys(remotes)?.map((e, i) => {
            let { id, connected, type } = remotes[e];
            return (
              <div
                className={`RemoteTab_tab ${
                  now === i + 1 ? "RemoteTab_tab_active" : ""
                } RemoteTab_tab_${type}`}
                onClick={handleSet(i + 1)}
                key={e}
              >
                {id}
              </div>
            );
          })}
        </div>
        <TabPanel now={now} i={0}>
          <NewSP />
        </TabPanel>
        {Object.keys(remotes)?.map((e, i) => {
          return (
            <TabPanel now={now} i={i + 1} key={e}>
              <Connection remote={remotes[e]} stream={remotes[e].stream} />;
            </TabPanel>
          );
        })}
      </>
    );
  }
);