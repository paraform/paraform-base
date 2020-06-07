/** @jsx jsx */
import { Fragment } from "react";
import { jsx, Flex, Box, Heading, Text } from "theme-ui";
import RichText from "./rich-text";
import Media from "./media";

function Feature(props) {
  const { featureItem, layout, reversed, shadow } = props;
  const x1 = layout == "tripleFeature" ? 240 : 700;
  const x2 = layout == "tripleFeature" ? 480 : 1400;
  return (
    <Fragment>
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
            {feature.media ? (
              <Flex
                sx={{
                  width: ["100%", "50%", "100%"],
                  height: layout == "tripleFeature" ? x1 : "100%",
                  mt: layout == "tripleFeature" ? 0 : [0, null, null, -10],
                  mb: layout == "tripleFeature" ? 4 : [0, null, null, -40],
                }}
              >
                {feature.media?.map((item, index) => {
                  return item ? (
                    <Flex
                      key={index}
                      sx={{
                        maxHeight: 700,
                        mx: "auto",
                        px: [0, 5, 0],
                        mb: [5, 0],
                      }}
                    >
                      <Media
                        key={index}
                        image={item.image}
                        alt={item.alt}
                        data={item.data}
                        x1={x1}
                        x2={x2}
                        shadow={shadow}
                      />
                    </Flex>
                  ) : null;
                })}
              </Flex>
            ) : null}
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
                mt: [5, 0],
              }}
            >
              <Box sx={{ maxWidth: 380, margin: "0 auto" }}>
                {feature.overline ? (
                  <Text variant="overline">{feature.overline}</Text>
                ) : null}
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
    </Fragment>
  );
}

export default Feature;
