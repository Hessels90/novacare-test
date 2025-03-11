import styles from "./page.module.css";
import { createClient } from "contentful";

const client = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY || "",
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || "",
});

const response = await client.getEntries({
  content_type: "accordion",
  include: 2,
});

export default function Home() {
  console.log(response);
  return (
    <div className={styles.page}>
      <main className={styles.main}>awdawdawd</main>
    </div>
  );
}
