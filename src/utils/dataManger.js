const { myapi } = document;
const dataManager = (data, myid) => {
  const mess = JSON.parse(new TextDecoder().decode(data));
  const { info } = mess;
  // console.log(mess.info);

  if (myid !== mess.from) {
    switch (mess.type) {
      case "MOUSE":
        window.pywebview.api.handleMouse(mess);
        // console.log(mess);

        break;

      case "KEYBOARD":
        window.pywebview.api.handleKeyboard(mess);
        // console.log(mess);
        break;

      default:
        break;
    }
  }
};

export default dataManager;
