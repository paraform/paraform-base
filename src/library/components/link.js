import React from "react";
import Link from "next/link";
import { Link as ThemeLink, Styled } from "theme-ui";

function Anchor({ href, external, newTab, children, ...props }) {
  if (external == true) {
    return (
      <ThemeLink
        href={href}
        {...props}
        target={newTab ? "_blank" : null}
        rel={newTab ? "noopener" : null}
      >
        {children}
      </ThemeLink>
    );
  } else {
    return (
      <Link href={href} {...props}>
        <ThemeLink
          target={newTab ? "_blank" : null}
          rel={newTab ? "noopener" : null}
        >
          {children}
        </ThemeLink>
      </Link>
    );
  }
}

export default Anchor;
