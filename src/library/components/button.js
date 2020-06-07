/** @jsx jsx */
import { jsx, Button as ButtonBase } from "theme-ui";

const baseStyles = {
  borderRadius: 2,
  px: 4,
  py: 2,
  fontWeight: 700,
};

const solidButton = {
  bg: "text",
  color: "background",
  ":hover": {
    bg: "grey.800",
  },
  ":active": {
    bg: "grey.900",
  },
};

const solidButtonInverse = {
  bg: "text",
  color: "primary.500",
  ":hover": {
    bg: "primary.600",
    color: "text",
  },
  ":active": {
    bg: "primary.700",
    color: "text",
  },
};

const outlineButton = {
  bg: "transparent",
  color: "primary.500",
  border: "1px solid",
  borderColor: "primary.500",
  ":hover": {
    bg: "primary.alpha.400",
  },
  ":active": {
    bg: "primary.alpha.500",
  },
};

const outlineButtonInverse = {
  bg: "transparent",
  color: "text",
  border: "1px solid",
  borderColor: "text",
  ":hover": {
    bg: "primary.alpha.400",
  },
  ":active": {
    bg: "primary.alpha.500",
  },
};

const textButton = {
  bg: "transparent",
  color: "primary.500",
  ":hover": {
    bg: "primary.alpha.400",
    color: "primary.500",
  },
  ":active": {
    bg: "primary.alpha.500",
  },
};

const textButtonInverse = {
  bg: "transparent",
  color: "text",
  ":hover": {
    bg: "primary.alpha.400",
  },
  ":active": {
    bg: "primary.alpha.500",
  },
};

const linkButton = {
  p: 0,
  bg: "transparent",
  color: "primary.500",
  ":hover": {
    textDecoration: "underline",
  },
  ":active": {
    color: "primary.700",
  },
};

const linkButtonInverse = {
  bg: "transparent",
  color: "text",
};

const focusState = {
  "&:focus": {
    outline: "none",
    boxShadow: (theme) => `${theme.shadows.outline}`,
    transition: "all 0.2s",
  },
};

const disabledState = {
  bg: "grey.300",
  color: "grey.700",
  ":hover": {
    bg: "grey.300",
    color: "grey.700",
  },
  ":active": {
    bg: "grey.300",
    color: "grey.700",
  },
  "&:focus": {
    outline: "none",
    boxShadow: "none",
  },
};

const Button = ({
  solid,
  text,
  outline,
  link,
  inverse,
  small,
  large,
  disabled,
  children,
  ...props
}) => (
  <ButtonBase
    {...props}
    sx={{
      ...baseStyles,
      ...(solid && solidButton),
      ...(solid && inverse && solidButtonInverse),
      ...(outline && outlineButton),
      ...(outline && inverse && outlineButtonInverse),
      ...(text && textButton),
      ...(text && inverse && textButtonInverse),
      ...(link && linkButton),
      ...(link && inverse && linkButtonInverse),
      ...focusState,
      ...(disabled && disabledState),
      ...((small && { py: 1 }) || (large && { py: [3, null, null, 4] })),
      ...props.sx,
    }}
  >
    {children}
  </ButtonBase>
);
export default Button;
