/** @jsx jsx */
import { jsx, Input as BaseInput } from "theme-ui";

const Input = ({ id, name, placeholder, type, ref }) => {
  return (
    <BaseInput
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      ref={ref}
      sx={{
        color: "black",
        bg: "white",
        border: (theme) => `1px solid ${theme.colors.text}`,
        flex: "1",
        boxShadow: (theme) => `${theme.shadows.large}`,
        outline: "0px",
        transition: "box-shadow 0.2s ease 0s, color 0.2s ease 0s",
        border: "none",
        borderRadius: 2,
        py: [3, null, null, 4],
        pl: 4,
        "&::placeholder": {
          color: "grey.500",
        },
        "&:hover": {
          boxShadow: (theme) => `${theme.shadows.large}`,
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
  );
};

export default Input;
