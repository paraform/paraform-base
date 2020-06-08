/** @jsx jsx */
import { jsx, Flex, Box, Input, Text, Label } from "theme-ui";
import { createRef } from "react";
import { keyframes } from "@emotion/core";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

import Button from "./button";
import { animatedGrad } from "./animated-grad";

function Loader() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "32px",
        height: "32px",
        "& > div": {
          boxSizing: "border-box",
          display: "block",
          position: "absolute",
          width: "24px",
          height: "24px",
          margin: "4px",
          border: "4px solid white",
          borderRadius: "50%",
          animation: `${animatedGrad} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
          borderColor: "white transparent transparent transparent",
        },
      }}
    >
      <Box></Box>
      <Box sx={{ animationDelay: "-0.45s" }}></Box>
      <Box sx={{ animationDelay: "-0.3s" }}></Box>
      <Box sx={{ animationDelay: "-0.15s" }}></Box>
    </Box>
  );
}

function Holder({ children, ...props }) {
  return (
    <Flex
      sx={{
        bg: "text",
        color: "background",
        my: [5, null, null, 6],
        ml: [0, 3],
        p: 3,
        borderRadius: 4,
        flexDirection: "row",
      }}
      {...props}
    >
      {children}
    </Flex>
  );
}

export default function Subscribe({
  button,
  input,
  contactEmail,
  url,
  flashButton,
}) {
  const emailRef = createRef(undefined);
  return (
    <>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status }) => {
          switch (status) {
            case "sending":
              return (
                <Holder>
                  <Loader />
                  <Box
                    sx={{ position: "relative", px: 3, alignSelf: "center" }}
                  >
                    <Text>Adding you now...</Text>
                  </Box>
                </Holder>
              );
            case "success":
              return (
                <Holder>
                  <FaCheckCircle
                    sx={{ width: 24, height: 24, color: "white" }}
                  />
                  <Box
                    sx={{ position: "relative", px: 3, alignSelf: "center" }}
                  >
                    <Text>You are on the list. Thank You!</Text>
                  </Box>
                </Holder>
              );
            case "error":
              return (
                <>
                  <Holder>
                    <FaExclamationTriangle
                      sx={{ width: 24, height: 24, color: "white" }}
                    />
                    <Box
                      sx={{ position: "relative", px: 3, alignSelf: "center" }}
                    >
                      <Text>Something went wrong!</Text>
                    </Box>
                  </Holder>
                  <Text>
                    Contact {contactEmail} and we will add you to the list!
                  </Text>
                </>
              );
            default:
              return (
                <Flex
                  as="form"
                  sx={{
                    flexDirection: ["column", null, "row"],
                    position: "relative",
                    alignItems: "center",
                    maxWidth: ["100%", null, "500px"],
                    width: "100%",
                  }}
                  onSubmit={() => {
                    event.preventDefault();

                    subscribe({
                      EMAIL: emailRef.current.value,
                    });
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "block",
                      position: "relative",
                      flex: "auto",
                      minWidth: "0",
                    }}
                  >
                    <Input
                      id="email"
                      name="email"
                      placeholder={input}
                      type="email"
                      ref={emailRef}
                      sx={{
                        color: "black",
                        bg: "white",
                        border: (theme) => `1px solid ${theme.colors.text}`,
                        flex: "1",
                        boxShadow: (theme) => `${theme.shadows.inputHover}`,
                        outline: "0px",
                        transition:
                          "box-shadow 0.2s ease 0s, color 0.2s ease 0s",
                        border: "none",
                        borderRadius: 2,
                        py: [3, null, null, 4],
                        pl: 4,
                        "&::placeholder": {
                          color: "grey.500",
                        },
                        "&:hover": {
                          "&::placeholder": {
                            color: "grey.600",
                          },
                        },
                        "&:focus": {
                          "&::placeholder": {
                            color: "grey.400",
                          },
                          outline: "none",
                        },
                      }}
                    />
                    <span
                      sx={{
                        position: "absolute",
                        left: 0,
                        boxSizing: "content-box",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        pointerEvents: "none",
                        color: "grey.500",
                        "&:hover": {
                          color: "grey.600",
                        },
                        "&:focus": {
                          color: "grey.400",
                        },
                      }}
                    >
                      <Label
                        htmlFor="email"
                        sx={{
                          position: "absolute",
                          left: 0,
                          font: "inherit",
                          pointerEvents: "none",
                          width: "100%",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          top: -36,
                          zIndex: "header",
                        }}
                      >
                        {input}
                      </Label>
                    </span>
                  </Box>
                  <Box
                    sx={{
                      mt: [3, null, 0],
                      ml: [0, null, 3],
                      width: ["100%", null, "auto"],
                      display: "block",
                      flexShrink: "0",
                    }}
                  >
                    {flashButton ? (
                      <Button
                        type="submit"
                        value="subscribe"
                        flash
                        large
                        sx={{ width: ["100%", null, "auto"] }}
                      >
                        {button}
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        value="subscribe"
                        solid
                        large
                        sx={{ width: ["100%", null, "auto"] }}
                      >
                        {button}
                      </Button>
                    )}
                  </Box>
                </Flex>
              );
          }
        }}
      />
    </>
  );
}
