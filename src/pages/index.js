import { getPageData } from "../data/api";
import { Page } from "../layouts";

export default function Index({ page, settings }) {
  console.log(settings.name);
  return <Page data={page} settings={settings} />;
}

export async function getStaticProps() {
  const data = await getPageData("home");
  return {
    props: {
      page: data.page || null,
      settings: data.settings || null,
    },
  };
}
