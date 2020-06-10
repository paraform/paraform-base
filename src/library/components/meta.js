import Head from "next/head";

export default ({ title, name, description, image, url }) => (
  <Head>
    <title>{title}</title>
    <meta property="og:type" content="website" />
    {title && <meta name="og:title" content={title} />}
    <meta property="og:site_name" content={name} />
    {url && <meta name="og:url" content={url} />}
    {description && <meta name="description" content={description} />}
    {description && <meta name="og:description" content={description} />}
    {image && <meta name="og:image" content={image} />}
  </Head>
);
