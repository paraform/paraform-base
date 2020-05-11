import { getPageData } from "../data/api";
import { DefaultLayout } from "../layouts";

export default ({ page, settings, theme }) => {
  process.browser && console.log({theme, settings});
  return <DefaultLayout data={page} settings={settings} />;
};

export const getStaticProps = async ({ params }) => {
  const data = await getPageData("home");
  return {
    props: {
      page: data.page || null,
      settings: data.settings || null,
      theme: data.theme || null,
    },
  };
};
