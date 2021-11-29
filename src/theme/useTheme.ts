import { STORYBOOK_IFRAME_ID } from "../constants";
import { Theme } from "./types";

const getIframe = (selector: any): HTMLElement => {
  const iframe = document.getElementById(
    STORYBOOK_IFRAME_ID
  ) as HTMLIFrameElement;
  return iframe.contentDocument.querySelector(selector);
};

export const useTheme = (theme: Theme, selectedTheme: string) => {
  
  const toggleMode = () => {
    const iframe = getIframe(theme.selector);
    iframe.setAttribute(theme.dataAttr, selectedTheme);
  };

  return toggleMode;
};