// import React, { useEffect, useState } from "react";
import "regenerator-runtime/runtime";

export default () => {};

export const requestForScreenStream = async () => {
  let stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });
  document.myapi.stream.screen = stream;
  return stream;
  // console.log(stream);
};
