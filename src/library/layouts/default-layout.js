/** @jsx jsx */
import { Fragment } from "react";
import { jsx, Box } from "theme-ui";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import * as defaultSections from ".";
import { Header, Banner } from "../components";

const modelToViewName = (modelName) =>
  modelName.replace(/^([a-z])/, (first) => first.toUpperCase());

export default function Page({
  data,
  settings,
  logo,
  modes,
  customSections,
  colorModeSwitchIcon,
  colorModeSwitch,
  bannerBackgroundGrad,
  children,
}) {
  const sections = { ...defaultSections, ...customSections };
  const banner = settings?.banner.show == true;
  const socials = {
    instagram: settings?.instagram,
    twitter: settings?.twitter,
    facebook: settings?.facebook,
  };
  const router = useRouter();
  if (!router.isFallback && !data?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  process.browser && console.log(data);
  console.log(data);
  return (
    <Fragment>
      <Head>
        <title>
          {data?.title} | {settings?.name}
        </title>
        <meta name="description" content={data?.description} />
      </Head>
      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
        <>
          {banner ? (
            <Banner
              text={settings.banner.text}
              backgroundGrad={bannerBackgroundGrad}
            />
          ) : null}
          <Header
            logo={logo}
            colorModeSwitchIcon={colorModeSwitchIcon}
            colorModeSwitch={colorModeSwitch}
            modes={modes}
            socials={socials}
          />
          <Box>
            {data.content?.map((section, index) => {
              const sectionName = modelToViewName(section._type);
              if (sections[sectionName]) {
                const Section = sections[sectionName];
                return <Section key={index} {...section} />;
              }
            })}
          </Box>
          {children}
        </>
      )}
    </Fragment>
  );
}
