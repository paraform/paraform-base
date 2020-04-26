/** @jsx jsx */
import { jsx, Flex, Box, Heading } from "theme-ui";
import RichText from "./rich-text";

function Feature(props) {
  const { featureItem, layout, reversed } = props;
  return (
    <>
      {featureItem?.map((feature, index) => {
        return (
          <Flex
            sx={
              layout == "tripleFeature"
                ? { flexDirection: ["column", "row", "column"] }
                : reversed == true
                ? { flexDirection: ["column", "row-reverse"] }
                : { flexDirection: ["column", "row"] }
            }
            key={index}
          >
            <Flex
              height={layout == "tripleFeature" ? 240 : "none"}
              sx={{ width: ["100%", "50%", "100%"] }}
            >
              {feature.image ? (
                <img
                  src={`${feature.image.url}?auto=format&fit=clip&h=240`}
                  srcSet={`${feature.image.url}?auto=format&fit=clip&h=240 1x, ${feature.image.url}?auto=format&fit=clip&h=480 2x`}
                  alt={feature.alt || ""}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: ["contain"],
                    objectPosition: ["top", null, "center"],
                  }}
                />
              ) : null}
            </Flex>
            <Flex
              textAlign={
                layout == "tripleFeature"
                  ? ["center", "left", "center"]
                  : ["center", "left", "center"]
              }
              sx={{
                width: ["100%", "50%", "100%"],
                flexDirection: ["column"],
                alignSelf: "center",
              }}
            >
              <Box sx={{ maxWidth: 380, margin: "0 auto" }}>
                <Heading as="h3" variant={"heading3"}>
                  {feature.title}
                </Heading>
                {feature.text ? (
                  <Box
                    sx={
                      layout == "tripleFeature"
                        ? {
                            fontSize: 1,
                          }
                        : {
                            fontSize: 2,
                          }
                    }
                  >
                    <RichText content={feature.text} />
                  </Box>
                ) : null}
              </Box>
            </Flex>
          </Flex>
        );
      })}
    </>
  );
}

export default Feature;
