/** @jsx jsx */
import { jsx, Flex, Grid, Box, Heading } from "theme-ui";
import { Feature } from "../../components";

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

        {features?.map((feature, index) => {
          const layout = feature._type;
          const reversed = feature.reversed;
          return (
            <Grid
              gap={4}
              columns={layout == "tripleFeature" ? [1, null, 3] : 1}
              py={5}
              key={index}
            >
              <Feature layout={layout} reversed={reversed} {...feature} />
            </Grid>
          );
        })}
      </Flex>
    </Flex>
  );
}

export default Section;
