import "./index.scss";
// import debounce from "lodash/debounce";
import { debounce } from "lodash";
export function recalculateLayout() {
  const gallery = document.querySelector(".VideoGallery");
  const aspectRatio = 16 / 9;
  const screenWidth = document.body.getBoundingClientRect().width;
  const screenHeight = document.body.getBoundingClientRect().height;
  const videoCount = document.querySelectorAll(".video").length;

  // or use this nice lib: https://github.com/fzembow/rect-scaler
  function calculateLayout(
    containerWidth,
    containerHeight,
    videoCount,
    aspectRatio
  ) {
    let bestLayout = {
      area: 0,
      cols: 0,
      rows: 0,
      width: 0,
      height: 0,
    };

    // brute-force search layout where video occupy the largest area of the container
    for (let cols = 1; cols <= videoCount; cols++) {
      const rows = Math.ceil(videoCount / cols);
      const hScale = containerWidth / (cols * aspectRatio);
      const vScale = containerHeight / rows;
      let width;
      let height;
      if (hScale <= vScale) {
        width = Math.floor(containerWidth / cols);
        height = Math.floor(width / aspectRatio);
      } else {
        height = Math.floor(containerHeight / rows);
        width = Math.floor(height * aspectRatio);
      }
      const area = width * height;
      if (area > bestLayout.area) {
        bestLayout = {
          area,
          width,
          height,
          rows,
          cols,
        };
      }
    }
    return bestLayout;
  }

  const { width, height, cols } = calculateLayout(
    screenWidth,
    screenHeight,
    videoCount,
    aspectRatio
  );

  gallery.style.setProperty("--width", width + "px");
  gallery.style.setProperty("--height", height + "px");
  gallery.style.setProperty("--cols", cols + "");
}

// const debouncedRecalculateLayout = debounce(recalculateLayout, 50);
window.addEventListener("resize", recalculateLayout);
// debouncedRecalculateLayout();
// setTimeout(() => {
//   recalculateLayout();
// }, 1000);
