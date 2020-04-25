import client from "./sanity";

const pageQuery = `
  name,
  title,
  description,
  'slug': slug.current,
`;

const sectionQuery = `
  'content': content[] | ({
    _type == 'heroSection' => {
        _type, 
        heading, 
        subheading, 
        alt, 
        "image": image.asset->
    },
    _type == 'featureSection' => {
        _type, 
        heading, 
        "features": features[] {
        title, 
        text, 
        alt,
        "image": image.asset->
    }
    }
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
