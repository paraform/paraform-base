/** @jsx jsx */
import { jsx, Link } from "theme-ui";

const IconButton = ({ icon, link, newTab, mLeft = 0, mRight = 0 }) => {
  return (
    <Link
      href={link.toString()}
      target={newTab ? "_blank" : null}
      rel={newTab ? "noopener" : null}
      sx={{
        boxSizing: "border-box",
        appearance: "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        p: "4px",
        width: "32px",
        height: "32px",
        color: "text",
        bg: "transparent",
        alignSelf: "center",
        borderRadius: "9999px",
        border: 1,
        borderColor: "transparent",
        ml: mLeft,
        mr: mRight,
        "&:hover": {
          bg: "whiteAlpha",
        },
        "&:focus": {
          outline: "none",
          boxShadow: (theme) => `${theme.shadows.outline}`,
          transition: "all 0.2s",
        },
      }}
    >
      {icon}
    </Link>
  );
};

export default IconButton;
