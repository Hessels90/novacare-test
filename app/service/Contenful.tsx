import { createClient } from "contentful";
import { useEffect, useState } from "react";

export const ContenfulClient = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY || "",
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || "",
});

export const useGetEntries = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await ContenfulClient.getEntries({
          content_type: "accordion",
          include: 2,
        });

        setData(response.items[0].fields);
      } catch (error) {
        console.error("Error fetching data", error);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return { data, loading };
};
