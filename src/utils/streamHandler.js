// import React, { useEffect, useState } from "react";
import "regenerator-runtime/runtime";

export default () => {};

export const requestForScreenStream = async () => {
  let ss = document.myapi.stream.screen;
  if (ss) {
    return ss;
  } else {
    let stream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: true,
    });
    document.myapi.stream.screen = stream;
    return stream;
    // return
  }

  // console.log(stream);
};
