/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import Lottie from "./lottie";

function Media(props) {
  const { image, alt, data, x1, x2, shadow } = props;
  return (
    <Flex
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: shadow ? 32 : 0,
        boxShadow: shadow
          ? "0.625rem 0.875rem 2.5rem rgba(0, 0, 0, 0.2)"
          : null,
      }}
    >
      {image ? (
        <img
          src={`${image}?auto=format&fit=clip&h=${x1}`}
          srcSet={`${image}?auto=format&fit=clip&h=${x1} 1x, ${image}?auto=format&fit=clip&h=${x2} 2x`}
          alt={alt || ""}
          sx={{
            height: "100%",
            width: "100%",
            objectFit: ["contain", null, "cover"],
            objectPosition: ["center bottom", null, "bottom"],
          }}
        />
      ) : null}
      {data ? <Lottie data={JSON.parse(data)} /> : null}
    </Flex>
  );
}

export default Media;
