import { SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const sanityClient = SanityClient({
  projectId: "qunp6ma7",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-03-25",
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);

export default sanityClient;

// Path: sanity.js
// Compare this snippet from sanity/schemas/index.js:
// import category from './category'
// import restaurant from './restaurant'
// import dish from './dish'
// import featured from './featured'
//
// export const schemaTypes = [restaurant, dish, category, featured]
// Compare this snippet from sanity/schemas/restaurant.js:
