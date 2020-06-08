/** @jsx jsx */
import { jsx, Flex, Grid, Heading } from "theme-ui";
import { Section, Testimonial } from "library";

function TestimonialSection(props) {
  const { appearance, testimonials, heading, showHeading } = props;
  return (
    <Section
      textColor={appearance?.textColor}
      backgroundColor={appearance?.backgroundColor}
      backgroundGradient={appearance?.backgroundGradient}
      gradientFrom={appearance?.gradientFrom}
      gradientTo={appearance?.gradientTo}
      backgroundVideo={appearance?.backgroundVideo}
      spacing={appearance?.spacing}
    >
      <Flex
        sx={{
          maxWidth: "2100px",
          margin: "0 auto",
          px: [4, 5],
          width: "100%",
          flexDirection: "column",
        }}
      >
        {showHeading ? (
          <Heading
            as="h2"
            variant="heading2"
            sx={{ textAlign: "center", pb: 2 }}
          >
            {heading}
          </Heading>
        ) : null}

        {testimonials?.map((testimonial, index) => {
          const layout = testimonial._type;
          const reversed = testimonial.reversed;
          return (
            <Grid
              gap={4}
              columns={layout == "tripleTestimonial" ? [1, null, 3] : 1}
              py={6}
              key={index}
            >
              <Testimonial
                sx={{ justifyContent: "center" }}
                layout={layout}
                reversed={reversed}
                {...testimonial}
              />
            </Grid>
          );
        })}
      </Flex>
    </Section>
  );
}

export default TestimonialSection;
