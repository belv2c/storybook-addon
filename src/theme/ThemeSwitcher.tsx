import { useParameter } from "@storybook/api";
import { styled } from "@storybook/theming";
import React from "react";
import { DEFAULT_PARAMS, PARAM_THEME } from "../constants";
import { useTheme } from "./useTheme";

const StyledSelect = styled.select`
  align-self: center;
  border-color: white;
  border-radius: .25em;
  padding: .125em .5em;
`;

const themeOptions = ['dd-theme', 'waitr-theme', 'bsq-theme', 'fetch-theme'];

const getControlId = (value: string) => `control-${value.replace(/\s+/g, '-')}`;

export const ThemeSwitcher = () => {
  const theme = useParameter(PARAM_THEME, DEFAULT_PARAMS);
  const controlId = getControlId("controlId");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const toggleMode = useTheme(theme, event.target.value);
    toggleMode();
  }

  return (
    <StyledSelect id={controlId} onChange={handleChange}>
      {Object.values(themeOptions).map((option) => (
        <option key={option}>{option}</option>
      ))}
    </StyledSelect>
  );
};