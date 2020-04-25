import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import * as sections from "./sections";

const modelToViewName = (modelName) =>
  modelName.replace(/^([a-z])/, (first) => first.toUpperCase());

export default function Page({ data }) {
  const router = useRouter();
  if (!router.isFallback && !data?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  console.log(data);
  return (
    <>
      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
        <>
          <Head>
            <title>{data.title} | Paraform</title>
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
        </>
      )}
    </>
  );
}
