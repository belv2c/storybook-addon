import { useGlobals } from "@storybook/api";
import { IconButton, Icons } from "@storybook/components";
import React, { useCallback } from "react";
import { TOOL_ID } from "./constants";

export const Tool = () => {
 const [{ outlineActive }, updateGlobals] = useGlobals();

  const toggleOutline = useCallback(
    () =>
      updateGlobals({
        outlineActive: !outlineActive
      }),
    [outlineActive]
  );

  return (
    <IconButton
      key={TOOL_ID}
      active={outlineActive}
      title="Enable my addon"
      onClick={toggleOutline}
    >
      {/*
        Checkout https://next--storybookjs.netlify.app/official-storybook/?path=/story/basics-icon--labels
        for the full list of icons
      */}
      <Icons icon="lightning" />
    </IconButton>
  );
};
