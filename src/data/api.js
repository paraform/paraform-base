import client from "./sanity";

const pageQuery = `
  name,
  title,
  description,
  'slug': slug.current,
`;

const media = `
  'media': media[] | ({
    _type == 'imageAsset' => {
      alt,
      "image": image.asset->url,
    },
    _type == 'animation' => @-> {data}
  }),
`;

const heroSection = `
  _type == 'heroSection' => {
    _type, 
    heading, 
    subheading, 
    ${media}
  },
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
  },
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
   ${heroSection}
   ${featureSection}   
  }),
`;

export async function getPages() {
  const data = await client.fetch(`*[_type == "page"]{ 'slug': slug.current }`);
  return data;
}

export async function getPageData(slug) {
  const [page] = await Promise.all([
    client
      .fetch(
        `*[_type == "page" && slug.current == $slug]{
        ${pageQuery}
        ${sectionQuery}
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
  ]);
  return { page };
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
