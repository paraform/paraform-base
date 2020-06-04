import { getPageData } from "library";
import { DefaultLayout } from "custom";

export default ({ page, settings }) => {
  process.browser && console.log({ settings });
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
