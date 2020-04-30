import client from "./sanity";

const pageQuery = `
  name,
  title,
  description,
  'slug': slug.current
`;

const image = `
  _type == 'imageAsset' => {
    alt,
    "image": image.asset->url
  }
`;

const animation = `
  _type == 'animation' => @-> {
    data
  }
`;

const media = `
  'media': media[] | ({
    ${image},
    ${animation}
  })
`;

const appearance = `
 'appearance': appearance {
  "backgroundColor": backgroundColor->color.hex,
  backgroundGradient
 }
`;

const heroSection = `
  _type == 'heroSection' => {
    _type, 
    heading, 
    subheading, 
    ${media},
    ${appearance} 
  }
`;

const featureItem = `
  _type,
  reversed,
  shadow,
  "featureItem": featureItem[] -> {
    title, 
    text, 
    alt,
    ${media}
  }
`;

const featureSection = `
  _type == 'featureSection' => {
    _type, 
    heading, 
    "features": features[] | ({
      _type == 'tripleFeature' => {
        ${featureItem}
      },
      _type == 'singleFeature' => {
        ${featureItem}
      }
    })
  }
`;

const sectionQuery = `
  'content': content[] | ({
   ${heroSection},
   ${featureSection}
  }),
`;

export async function getPages() {
  const data = await client.fetch(`*[_type == "page"]{ 'slug': slug.current }`);
  return data;
}

export async function getPageData(slug) {
  const [page, settings, theme] = await Promise.all([
    client
      .fetch(
        `*[_type == "page" && slug.current == $slug]{
        ${pageQuery},
        ${sectionQuery}
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    client
      .fetch(`*[_type == "settings"]{ "name": name }`)
      .then((res) => res?.[0]),
    client
      .fetch(
        `*[_type == "brandColors"]{
            "color": color.hex
        }`
      )
      .then((res) => res?.[0]),
  ]);
  return { page, settings, theme };
}

// For later
// const getUniquePages = (pages) => {
//   const slugs = new Set();
//   return pages.filter((page) => {
//     if (slugs.has(page.slug)) {
//       return false;
//     } else {
//       slugs.add(page.slug);
//       return true;
//     }
//   });
// };
