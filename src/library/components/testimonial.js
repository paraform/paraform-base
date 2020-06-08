/** @jsx jsx */
import { Fragment } from "react";
import { jsx, Flex, Box, Heading, Text } from "theme-ui";

function Testimonial(props) {
  const { testimonialItem, layout, reversed } = props;

  return (
    <Fragment>
      {testimonialItem?.map((testimonial, index) => {
        return (
          <Flex
            sx={
              layout == "tripleTestimonial"
                ? { flexDirection: ["column", "row", "column"] }
                : reversed == true
                ? { flexDirection: ["column", "row-reverse"] }
                : { flexDirection: ["column", "row"] }
            }
            key={index}
          >
            <Flex
              textAlign={
                layout == "tripletestimonial"
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
                <Heading as="h3" variant={"heading3"}>
                  "{testimonial.quote}"
                </Heading>
                {testimonial.name ? (
                  <Text variant="overline">{testimonial.name}</Text>
                ) : null}
              </Box>
            </Flex>
          </Flex>
        );
      })}
    </Fragment>
  );
}

export default Testimonial;
