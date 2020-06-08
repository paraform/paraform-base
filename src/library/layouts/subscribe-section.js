/** @jsx jsx */
import { jsx, Box, Flex, Heading } from "theme-ui";
import { Section, RichText, Subscribe } from "library";

function SubscribeSection(props) {
  const {
    heading,
    subheading,
    appearance,
    contactEmail,
    mailchimpUrl,
    buttonText,
    inputText,
    flashButton,
  } = props;

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
          height: "100%",
          width: "100%",
          margin: "0 auto",
          maxWidth: "1200px",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          px: [5, 6, 0],
        }}
      >
        <Flex
          sx={{
            flexDirection: "column",
            maxWidth: ["100%", null, "680px"],
            textAlign: "center",
          }}
        >
          <Heading as="h2" variant="heading2">
            {heading}
          </Heading>
          {subheading ? (
            <Box sx={{ fontSize: [2, null, 3], pb: 5 }}>
              <RichText content={subheading} />
            </Box>
          ) : null}
        </Flex>
        <Subscribe
          button={buttonText}
          input={inputText}
          contactEmail={contactEmail}
          url={mailchimpUrl}
          flashButton={flashButton ? true : null}
        />
      </Flex>
    </Section>
  );
}

export default SubscribeSection;
