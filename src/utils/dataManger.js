const { myapi } = document;
const dataManager = (data, myid) => {
  const mess = JSON.parse(new TextDecoder().decode(data));

  console.log(mess.info);

  if (myid !== mess.from) {
    switch (mess.type) {
      case "MOUSE":
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
