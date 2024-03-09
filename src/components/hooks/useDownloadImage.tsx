import { RefObject } from "react";
import html2canvas, { Options as MyHtml2CanvasOptions } from "html2canvas";

export const useDownloadImage = (myComponentRef: RefObject<HTMLElement>) => {
  const saveImage = () => {
    const captureComponent = async () => {
      const myComponent = myComponentRef.current;
      if (!myComponent) {
        return;
      }

      try {
        const canvas = await html2canvas(myComponent, {
          logging: false,
        } as MyHtml2CanvasOptions);
        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "My_screenshot.png";
        link.click();
      } catch (error) {
        console.error("canvas error:", error);
      }
    };

    captureComponent();
  };

  return saveImage;
};
