/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { DefaultLayout, Drop, Logo } from "library";
import * as sections from ".";
import { initialColorMode, modes as extraModes } from "custom";

export default function Page({ data, settings }) {
  const modes = [initialColorMode, ...Object.keys(extraModes)];
  return (
    <DefaultLayout
      data={data}
      settings={settings}
      logo={
        <Box sx={{ height: [40, null, 60], pl: 2 }}>
          <Logo />
        </Box>
      }
      modes={modes}
      colorModeSwitch={true}
      colorModeSwitchIcon={<Drop />}
      customSections={sections}
    ></DefaultLayout>
  );
}
