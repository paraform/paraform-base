const BlockContent = require("@sanity/block-content-to-react");

import { Text, Heading } from "theme-ui";
import Link from "./link";

const BlockRenderer = ({ node, children }) => {
  const style = node.style || "normal";

  if (style === "heading1") {
    return <Heading variant="heading1">{children}</Heading>;
  } else if (style === "heading2") {
    return <Heading variant="heading2">{children}</Heading>;
  } else if (style === "heading3") {
    return <Heading variant="heading3">{children}</Heading>;
  } else if (style === "heading4") {
    return <Heading variant="heading4">{children}</Heading>;
  } else if (style === "heading5") {
    return <Heading variant="heading5">{children}</Heading>;
  } else if (style === "heading6") {
    return <Heading variant="heading6">{children}</Heading>;
  } else {
    return <Text sx={{ mb: 5 }}>{children}</Text>;
  }
};

const serializers = {
  types: {
    block: BlockRenderer,
  },
  marks: {
    caption: ({ children }) => <Text variant="caption">{children}</Text>,
    large: ({ children }) => <Text variant="large">{children}</Text>,
    link: ({ mark, children, ...props }) => {
      const { newTab, href, external } = mark;

      return (
        <Link href={href} newTab={newTab} external={external}>
          {children}
        </Link>
      );
    },
  },
};

const RichContent = ({ content }) => (
  <BlockContent blocks={content} serializers={serializers} />
);

export default RichContent;
