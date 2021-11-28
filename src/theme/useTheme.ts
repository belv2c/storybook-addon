import { useState } from "react";
import { STORYBOOK_IFRAME_ID } from "../constants";
import { Theme } from "./types";

const getIframe = (selector: any): HTMLElement => {
  const iframe = document.getElementById(
    STORYBOOK_IFRAME_ID
  ) as HTMLIFrameElement;
  return iframe.contentDocument.querySelector(selector);
};

export const useTheme = (theme: Theme) => {
  const [isWaitr, setIsWaitr] = useState(false);

  const toggleMode = () => {
    console.log(theme)
    const iframe = getIframe(theme.selector);
    iframe.setAttribute(theme.dataAttr, isWaitr ? "waitr-theme" : "fetch-theme");
    setIsWaitr((prev) => !prev);
  };

  return { isWaitr, toggleMode };
};