/** @jsx jsx */
import { jsx, Box, Flex, Heading } from "theme-ui";
import { RichText, Media } from "../../components";

function Section(props) {
  const { heading, subheading, media } = props;
  const x1 = 750;
  const x2 = 1500;
  return (
    <Flex bg="background">
      <Flex
        sx={{
          maxWidth: "1200px",
          px: [2, 0],
          m: "0 auto",
          flexDirection: ["column", null, "row"],
          position: "relative",
          height: ["auto", null, "100vh"],
          minHeight: 550,
          maxHeight: ["none", "550px", null, "700px"],
          width: "100%",
          flexDirection: ["column", null, "row"],
        }}
      >
        <Flex
          sx={{
            height: "100%",
            width: ["100%", null, "60%", "55%"],
            px: [4, 5],
            justifyContent: ["flex-start", null, "center"],
            alignItems: ["flex-start", null, "flex-start"],
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
            <Heading as="h1" variant="heading1">
              {heading}
            </Heading>
            {subheading ? (
              <Box sx={{ fontSize: [2, null, 3] }}>
                <RichText content={subheading} />
              </Box>
            ) : null}
          </Flex>
        </Flex>
        <Flex
          sx={{
            width: ["100%", null, "50%", "45%"],
          }}
        >
          {media?.map((item, index) => {
            return (
              <Media
                key={index}
                image={item.image}
                alt={item.alt}
                data={item.data}
                x1={x1}
                x2={x2}
              />
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Section;
