const dataManager = (data, myid) => {
  const { type, info, from } = JSON.parse(new TextDecoder().decode(data));
  // const { myid } = store.getState();
  // console.log(data);
  // document.k = data;
  if (myid !== data.from) {
    switch (type) {
      case "MOUSE":
        // console.log("move_my_mouse", info.x, info.y);
        pywebview.api.handleMouse({
          type: "move",
          data: { x: info.x, y: info.y },
        });
        break;

      default:
        break;
    }
  }
};

export default dataManager;
