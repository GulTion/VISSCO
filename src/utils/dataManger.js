const { myapi } = document;
const dataManager = (data, myid) => {
  const mess = JSON.parse(new TextDecoder().decode(data));

  console.log(mess.info);

  if (myid !== mess.from) {
    switch (mess.type) {
      case "MOUSE":
        // console.log("move_my_mouse", info.x, info.y);
        // pywebview.api.handleMouse({
        //   type: "move",
        //   data: { x: info.x, y: info.y },
        // });
        // console.log(mess);
        switch (mess.data) {
          case "MOVE":
            // myapi.setMouse[data.from](`x:${mess.info.x}, y:${mess.info.y}`);
            break;

          default:
            break;
        }
        break;

      default:
        break;
    }
  }
};

export default dataManager;
