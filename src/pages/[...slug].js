import { getPages, getPageData } from "../data/api";
export { default } from "./index";

export async function getStaticProps({ params }) {
  const data = await getPageData(params.slug.join("/"));
  return {
    props: {
      page: data.page || null,
      settings: data.settings || null,
      theme: data.theme || null,
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
