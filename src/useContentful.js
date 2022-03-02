import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "ubc3383ontjd",
    accessToken: "jOE0TftW8WUMbks5kdRLkPja-Ys8Gek9hioVhYpgBvg",
  });

  const getBlog = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "blog",
        select: "fields",
      });
      const dataEntries = entries.items;
      return dataEntries;
    } catch (error) {
      console.log("fetching error");
    }
  };
  return { getBlog };
};

export default useContentful;
