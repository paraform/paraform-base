import BlockContent from "@sanity/block-content-to-react";

export default function RichText({ content }) {
  return <BlockContent blocks={content} />;
}
