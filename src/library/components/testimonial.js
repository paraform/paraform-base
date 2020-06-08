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
                ? {
                    flexDirection: ["column", "row", "column"],
                    justifyContent: "center",
                  }
                : reversed == true
                ? {
                    flexDirection: ["column", "row-reverse"],
                    justifyContent: "center",
                  }
                : { flexDirection: ["column", "row"], justifyContent: "center" }
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
                width: ["100%"],
                flexDirection: ["column"],
                alignSelf: "center",
                my: [5, null, 0],
              }}
            >
              <Box
                sx={{
                  maxWidth: layout == "tripleTestimonial" ? 380 : 860,
                  width: "100%",
                  margin: "0 auto",
                  textAlign: "center",
                  px: [5, 0],
                }}
              >
                <Heading
                  as="h3"
                  sx={{ lineHeight: "body" }}
                  variant={
                    layout == "tripleTestimonial" ? "heading5" : "heading3"
                  }
                >
                  "{testimonial.quote}"
                </Heading>
                {testimonial.name ? <Text>{testimonial.name}</Text> : null}
              </Box>
            </Flex>
          </Flex>
        );
      })}
    </Fragment>
  );
}

export default Testimonial;
