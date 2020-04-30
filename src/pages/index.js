import { getPageData } from "../data/api";
import { Page } from "../layouts";

export default function Index({ page, settings, theme }) {
  console.log(theme);
  return <Page data={page} settings={settings} />;
}

export async function getStaticProps() {
  const data = await getPageData("home");
  return {
    props: {
      page: data.page || null,
      settings: data.settings || null,
      theme: data.theme || null,
    },
  };
}
