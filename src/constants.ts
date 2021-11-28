export const ADDON_ID = "storybook/theme-switcher-addon";
export const TOOL_ID = `${ADDON_ID}/tool`;
export const PANEL_ID = `${ADDON_ID}/panel`;
export const TAB_ID = `${ADDON_ID}/tab`;
export const PARAM_KEY = `myAddonParameter`;
export const STORYBOOK_IFRAME_ID = "storybook-preview-iframe";
export const PARAM_THEME = "theme";

export const EVENTS = {
  RESULT: `${ADDON_ID}/result`,
  REQUEST: `${ADDON_ID}/request`,
  CLEAR: `${ADDON_ID}/clear`,
};

export const DEFAULT_PARAMS = {
  selector: "body",
  dataAttr: "data-theme",
};