/** @jsx jsx */
import { jsx, IconButton as BaseIconButton } from "theme-ui";

const IconButton = ({ icon, link }) => {
  return (
    <a href={link.toString()}>
      <BaseIconButton
        aria-label="Social Link"
        sx={{
          ml: 2,
          border: 1,
          alignSelf: "center",
          color: "text",
          "&:hover": {
            color: "primary.500",
          },
          "&:focus": {
            bg: "whiteAlpha",
            outline: "none",
            boxShadow: (theme) => `${theme.shadows.outline}`,
            transition: "all 0.2s",
          },
        }}
      >
        {icon}
      </BaseIconButton>
    </a>
  );
};

export default IconButton;
