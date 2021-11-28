import { useParameter } from "@storybook/api";
import { NormalizedOptionsConfig, OptionsObject } from "@storybook/components";
import { CSSObject, styled } from "@storybook/theming";
import React, { useState } from "react";
import { DEFAULT_PARAMS, PARAM_THEME } from "../constants";
import { useTheme } from "./useTheme";

type SelectConfig = NormalizedOptionsConfig & { isMulti: boolean };
const styleResets: CSSObject = {
  // resets
  appearance: 'none',
  border: '0 none',
  boxSizing: 'inherit',
  display: ' block',
  margin: ' 0',
  background: 'transparent',
  padding: 0,
  fontSize: 'inherit',
  position: 'relative',
};

const OptionsSelect = styled.select(({ theme }) => ({
  ...styleResets,

  boxSizing: 'border-box',
  position: 'relative',
  padding: '6px 10px',
  width: '100%',

  color: theme.input.color || 'inherit',
  background: theme.input.background,
  borderRadius: theme.input.borderRadius,
  boxShadow: `${theme.input.border} 0 0 0 1px inset`,

  fontSize: theme.typography.size.s2 - 1,
  lineHeight: '20px',

  '&:focus': {
    boxShadow: `${theme.color.secondary} 0 0 0 1px inset`,
    outline: 'none',
  },

  '&[disabled]': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },

  '::placeholder': {
    color: theme.color.mediumdark,
  },

  '&[multiple]': {
    overflow: 'auto',
    padding: 0,

    option: {
      display: 'block',
      padding: '6px 10px',
      marginLeft: 1,
      marginRight: 1,
    },
  },
}));

const SelectWrapper = styled.span`
  display: inline-block;
  line-height: normal;
  overflow: hidden;
  position: relative;
  vertical-align: top;
  width: 100%;
  svg {
    position: absolute;
    z-index: 1;
    pointer-events: none;
    height: 12px;
    margin-top: -6px;
    right: 12px;
    top: 50%;
    path {
      fill: currentColor;
    }
  }
`;

export const selectedKey = (value: any, options: OptionsObject) => {
  const entry = options && Object.entries(options).find(([_key, val]) => val === value);
  return entry ? entry[0] : undefined;
};

export const selectedKeys = (value: any[], options: OptionsObject) =>
  value && options
    ? Object.entries(options)
        .filter((entry) => value.includes(entry[1]))
        .map((entry) => entry[0])
    : [];



const labels = {} as { [key: string]: string };
const themeOptions = ['base', 'waitr-theme', 'dd', 'bs'];

export const getControlId = (value: string) => `control-${value.replace(/\s+/g, '-')}`;


export const selectedValues = (keys: string[], options: OptionsObject) =>
  keys && options && keys.map((key) => options[key]);
  
// export const ThemeSwitcher = () => {
//   const theme = useParameter(PARAM_THEME, DEFAULT_PARAMS);
//   const { isDark, toggleMode } = useTheme(theme);

//   return (
//     <OptionsControl key={TOOL_ID} name="theme-changer" onChange={toggleMode} type="multi-select" labels={labels} options={options}>
//       {/* {isDark ? "S" : "M"} */}
//     </OptionsControl>
//   );
// };
export const ADDON_ID = "storybook/theme-css-vars";
export const TOOL_ID = `${ADDON_ID}/tool`;

export const ThemeSwitcher = () => {
  const [selectedOption, setSelectedOption] = useState() as any;
  const theme = useParameter(PARAM_THEME, DEFAULT_PARAMS);

  const { isWaitr, toggleMode } = useTheme(theme);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    toggleMode();
    console.log(isWaitr)
  }

  const selection = selectedKeys(themeOptions, themeOptions);
  const controlId = getControlId("controlId");
  console.log(selection)

  console.log(themeOptions)

  return (
    <OptionsSelect id={controlId} multiple value={selectedOption} onChange={handleChange}>
        {Object.values(themeOptions).map((option) => (
          <option key={option}>{option}</option>
        ))}
      </OptionsSelect>
  );
};