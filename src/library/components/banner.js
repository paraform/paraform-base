/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { keyframes } from "@emotion/core";
import RichText from "./rich-text";

export default function Banner({
  text,
  textColor,
  backgroundColor,
  backgroundGrad,
}) {
  return (
    <Flex
      color={textColor ? textColor : "color"}
      bg={backgroundColor ? backgroundColor : "black"}
      sx={{
        width: "100%",
        justifyContent: "center",
        textAlign: "center",
        fontSize: 0,
        px: 5,
        py: 2,
        background: backgroundGrad
          ? "linear-gradient(270deg, #7cffdd, #ffb578, #cbacff, #acddff, #ffacbe)"
          : null,
        backgroundSize: backgroundGrad ? "1000% 1000%" : null,
        animation: backgroundGrad
          ? `${gradientAnimation} 30s ease infinite`
          : null,
      }}
    >
      <RichText variant="caption" content={text} />
    </Flex>
  );
}

const gradientAnimation = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
`;
