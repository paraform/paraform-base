import { getPages, getPageData, getConfig } from "../data/api";
import Page from "./index";

export default Page;

export async function getStaticProps({ params }) {
  const data = await getPageData(params.slug.join("/"));
  const config = await getConfig();
  return {
    props: {
      page: data.page || null,
      settings: config.settings || null,
    },
  };
}

export async function getStaticPaths() {
  const allPages = await getPages();
  return {
    paths:
      allPages?.map((page) => ({
        params: {
          slug: page.slug.split("/"),
        },
      })) || [],
    fallback: true,
  };
}
