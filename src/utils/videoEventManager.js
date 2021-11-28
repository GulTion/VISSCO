import store from "../store/store";

const videoEventManager = (vid, toid) => {
  const { myid } = store.getState();
  vid.addEventListener("mousemove", (e) => {
    const { videoWidth, videoHeight } = vid;
    let { top, left, width, height } = vid.getBoundingClientRect();
    const { x, y } = e;

    let info = {
      x: Math.round(((x - left) * videoWidth) / width),
      y: Math.round(((y - top) * videoHeight) / height),
    };

    let data = JSON.stringify({
      from: myid,
      to: toid,
      info,
      type: "MOUSE",
      data: "MOVE",
    });
    // console.log(data);
    // console.log(e);
    // document.p.send(data);
  });
  vid.addEventListener("keydown", (e) => {
    let data = JSON.stringify({
      from: myid,
      to: toid,
      key: e.key,
      type: "KEYBOARD",
      data: "DOWN",
    });
    console.log(data);
  });

  vid.addEventListener("keyup", (e) => {
    let data = JSON.stringify({
      from: myid,
      to: toid,
      key: e.key,
      type: "KEYBOARD",
      data: "UP",
    });
    console.log(data);
  });

  vid.addEventListener("onclick", (e) => {
    let data = JSON.stringify({
      from: myid,
      to: toid,
      key: "LEFT",
      type: "MOUSE",
      data: "CLICK",
    });
    console.log(data);
  });
  vid.addEventListener("ondbclick", (e) => {
    let data = JSON.stringify({
      from: myid,
      to: toid,
      key: "RIGHT",
      type: "MOUSE",
      data: "CLICK",
    });
    console.log(data);
  });
};

export default videoEventManager;
