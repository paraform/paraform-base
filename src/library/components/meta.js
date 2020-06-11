import Head from "next/head";

export default ({ title, name, description, image, url }) => (
  <Head>
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    <meta property="og:type" content="website" />
    {title && <meta name="og:title" content={title} />}
    <meta property="og:site_name" content={name} />
    {url && <meta property="og:url" content={url} />}
    {description && <meta property="og:description" content={description} />}
    {image && <meta property="og:image" content={image} />}
  </Head>
);
