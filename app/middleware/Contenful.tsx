import { createClient } from "contentful";

export const ContenfulClient = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY || "",
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || "",
});
