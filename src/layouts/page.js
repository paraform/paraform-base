/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import * as sections from "./sections";
import Header from "./header";

const modelToViewName = (modelName) =>
  modelName.replace(/^([a-z])/, (first) => first.toUpperCase());

export default function Page({ data, settings }) {
  const router = useRouter();
  if (!router.isFallback && !data?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  console.log(data);
  return (
    <>
      <Header />
      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
        <Box>
          <Head>
            <title>{data.title} | {settings.name} </title>
            <meta name="description" content={data.description} />
          </Head>
          {data.content?.map((section, index) => {
            const sectionName = modelToViewName(section._type);

            if (sections[sectionName]) {
              const Section = sections[sectionName];
              return (
                <section key={index}>
                  <Section {...section} />
                </section>
              );
            }
          })}
        </Box>
      )}
    </>
  );
}
