/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui";
import RichText from "./rich-text";

export default function Banner({ text }) {
  return (
    <Flex
      sx={{
        bg: "text",
        width: "100%",
        justifyContent: "center",
        px: 5,
      }}
    >
      <Box sx={{ textAlign: "center", fontSize: 0, color: "background" }}>
        <RichText content={text} />
      </Box>
    </Flex>
  );
}
