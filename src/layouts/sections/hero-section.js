/** @jsx jsx */
import { jsx, Box, Flex, Heading } from "theme-ui";
import { RichText, Lottie } from "../../components";

function Section(props) {
  const { heading, subheading, media } = props;
  return (
    <Flex bg="background">
      <Flex
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          px: [2, 0],
          m: "0 auto",
          position: "relative",
          height: ["auto", null, "100vh"],
          minHeight: 600,
          maxHeight: ["none", null, "700px"],
          width: "100%",
          flexDirection: ["column", null, "row"],
        }}
      >
        <Flex
          sx={{
            height: "100%",
            width: ["100%", null, "60%", "55%"],
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
        {media?.map((item, index) => {
          return (
            <Flex
              key={index}
              sx={{
                width: ["100%", null, "40%", "45%"],
                height: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                margin: "auto",
                pt: [5, null, 0],
                justifyContent: "flex-end",
              }}
            >
              {item.image ? (
                <img
                  src={`${item.image}?auto=format&fit=clip&h=750`}
                  srcSet={`${item.image}?auto=format&fit=clip&h=750 1x, ${item.image}?auto=format&fit=clip&h=1500 2x`}
                  alt={item.alt || ""}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: ["contain"],
                    objectPosition: ["top", null, "right center"],
                  }}
                />
              ) : null}
              {item.data ? (
                <Flex
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Lottie
                    key={index}
                    loop
                    animationData={JSON.parse(item.data)}
                    sx={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </Flex>
              ) : null}
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
}

export default Section;
