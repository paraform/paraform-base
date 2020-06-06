/** @jsx jsx */
import { jsx, Flex, Grid, Heading } from "theme-ui";
import { Section, Feature } from "library";

function FeatureSection(props) {
  const { features, heading, appearance } = props;
  return (
    <Section
      textColor={appearance?.textColor}
      backgroundColor={appearance?.backgroundColor}
      backgroundGradient={appearance?.backgroundGradient}
      backgroundVideo={appearance?.backgroundVideo}
      spacing={appearance?.spacing}
    >
      <Flex
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          px: [4, 5],
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Heading as="h2" variant="heading2" sx={{ textAlign: "center", pb: 2 }}>
          {heading}
        </Heading>

        {features?.map((feature, index) => {
          const layout = feature._type;
          const reversed = feature.reversed;
          const shadow = feature.shadow;
          return (
            <Grid
              gap={4}
              columns={layout == "tripleFeature" ? [1, null, 3] : 1}
              py={6}
              key={index}
            >
              <Feature
                layout={layout}
                reversed={reversed}
                shadow={shadow}
                {...feature}
              />
            </Grid>
          );
        })}
      </Flex>
    </Section>
  );
}

export default FeatureSection;
