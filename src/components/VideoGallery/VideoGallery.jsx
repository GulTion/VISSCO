import React, { useEffect } from "react";
import { connect } from "react-redux";

export default connect((state) => ({ remotes: state.conn }))(
  function VideoGallery({ remotes }) {
    return (
      <div className="VideoGallery">
        {Object.keys(remotes)?.map((e, i) => {
          return <VideoView id={e.id} />;
        })}
      </div>
    );
  }
);

const VideoView = ({ id }) => {
  useEffect(() => {
    let vid = document.getElementById(`video${id}`);
    vid.srcObject = document.myapi.getStream(id);
    vid.play();
  }, []);

  return (
    <div className="VideoView">
      <video
        className="video"
        id={`video${id}`}
        src={null}
        autoPlay
        muted={true}
      />
    </div>
  );
};
