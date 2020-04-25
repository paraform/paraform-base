/** @jsx jsx */
import { jsx, Flex, Grid, Box, Heading } from "theme-ui";
import { RichText } from "../../components";

function Section(props) {
  const { features, heading } = props;
  return (
    <Flex sx={{ bg: "white", py: 6 }}>
      <Flex
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          px: [4, 5],
          position: "relative",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Box sx={{ pb: [5, 6] }}>
          <Heading as="h2" variant="heading2" sx={{ textAlign: "center" }}>
            {heading}
          </Heading>
        </Box>
        <Grid gap={4} columns={[1, null, 3]}>
          {features?.map((feature, index) => {
            return (
              <Flex
                sx={{ flexDirection: ["column", "row", "column"] }}
                key={index}
              >
                <Box sx={{ width: ["100%", "50%", "100%"], height: 240 }}>
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
                </Box>
                <Flex
                  sx={{
                    width: ["100%", "50%", "100%"],
                    flexDirection: ["column"],
                    alignSelf: "center",
                  }}
                >
                  <Heading
                    as="h3"
                    variant="heading3"
                    sx={{ textAlign: ["center", "left", "center"] }}
                  >
                    {feature.title}
                  </Heading>
                  {feature.text ? (
                    <Box
                      sx={{
                        fontSize: 1,
                        textAlign: ["center", "left", "center"],
                      }}
                    >
                      <RichText content={feature.text} />
                    </Box>
                  ) : null}
                </Flex>
              </Flex>
            );
          })}
        </Grid>
      </Flex>
    </Flex>
  );
}

export default Section;
