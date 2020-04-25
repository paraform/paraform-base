import { getPageData } from "../data/api";
import { Page } from "../layouts";

export default function Index({ page }) {
  return <Page data={page} />;
}

export async function getStaticProps() {
  const data = await getPageData("home");
  return {
    props: {
      page: data.page || null,
    },
  };
}
