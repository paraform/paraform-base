/** @jsx jsx */
import { jsx, Box, Flex, Heading } from "theme-ui";
import { RichText } from "../../components";

function HeroSection(props) {
  const { heading, subheading, image, alt } = props;
  return (
    <Flex bg="background">
      <Flex
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          px: [2, 0],
          position: "relative",
          height: ["auto", null, "100vh"],
          //   maxHeight: ["none", null, "700px"],
          width: "100%",
          flexDirection: ["column", null, "row"],
        }}
      >
        <Flex
          sx={{
            height: "100%",
            width: ["100%", null, "60%", "50%"],
            m: "0 auto",
            px: [4, 5],
            alignItems: ["flex-start", null, "flex-start"],
            justifyContent: ["flex-start", null, "center"],
            flexDirection: "column",
            position: "relative",
            zIndex: "docked",
          }}
        >
          <Flex
            sx={{
              flexDirection: "column",
              maxWidth: ["100%", null, "550px"],
              pt: [7, null, 0],
              pr: [0, null, null, 4],
            }}
          >
            <Heading variant="heading1">{heading}</Heading>
            {subheading ? (
              <Box sx={{ fontSize: [2, null, 3] }}>
                <RichText content={subheading} />
              </Box>
            ) : null}
          </Flex>
        </Flex>
        <Flex
          sx={{
            width: ["100%", null, "40%", "50%"],
            height: "100%",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
            justifyContent: "flex-end",
          }}
        >
          {image ? (
            <img
              src={`${image.url}?auto=format&fit=clip&h=750`}
              srcSet={`${image.url}?auto=format&fit=clip&h=750 1x, ${image.url}?auto=format&fit=clip&h=1500 2x`}
              alt={alt || ""}
              sx={{
                width: "100%",
                objectFit: ["contain"],
                objectPosition: ["top", null, "right center"],
              }}
            />
          ) : null}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default HeroSection;
