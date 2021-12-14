import store from "../store/store";
const { myapi } = document;
const videoEventManager = (id) => {
  // const { myid } = store.getState();
  let myid = myapi.id;
  let vid = document.querySelector(`#screen${id}`);
  let peer = myapi.getRemote(id);
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
      to: id,
      info,
      type: "MOUSE",
      data: "MOVE",
    });
    // console.log(data);
    // console.log(e);
    // document.p.send(data);
    peer.send(data);
  });
  vid.addEventListener("keydown", (e) => {
    let data = JSON.stringify({
      from: myid,
      to: id,
      key: e.key,
      type: "KEYBOARD",
      data: "DOWN",
    });
    console.log(data);
  });

  vid.addEventListener("keyup", (e) => {
    let data = JSON.stringify({
      from: myid,
      to: id,
      key: e.key,
      type: "KEYBOARD",
      data: "UP",
    });
    console.log(data);
  });

  vid.addEventListener("onclick", (e) => {
    let data = JSON.stringify({
      from: myid,
      to: id,
      key: "LEFT",
      type: "MOUSE",
      data: "CLICK",
    });
    console.log(data);
  });
  vid.addEventListener("ondbclick", (e) => {
    let data = JSON.stringify({
      from: myid,
      to: id,
      key: "RIGHT",
      type: "MOUSE",
      data: "CLICK",
    });
    console.log(data);
  });
};

export default videoEventManager;
