export const enableBodyScroll = () => {
    if (document.readyState === "complete") {
      document.body.style.position = "";
      document.body.style.overflowY = "";
      document.body.style.left = "";
      document.body.style.right = "";
      if (document.body.style.marginTop) {
        const scrollTop = -parseInt(document.body.style.marginTop, 10);
        document.body.style.marginTop = "";
        window.scrollTo(window.pageXOffset, scrollTop);
      }
    } else {
      window.addEventListener("load", enableBodyScroll);
    }
  };
  
  export const disableBodyScroll = (savePosition = false) => {
    if (document.readyState === "complete") {
      if (document.body.scrollHeight > window.innerHeight) {
        if (savePosition)
          document.body.style.marginTop = `-${window.pageYOffset}px`;
        document.body.style.position = "fixed";
        document.body.style.overflowY = "scroll";
        document.body.style.left = "0";
        document.body.style.right = "0";
      }
    } else {
      window.addEventListener("load", () => disableBodyScroll({ savePosition }));
    }
  };