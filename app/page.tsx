"use client";
import styles from "./page.module.css";
import Accordion from "../components/Accordion/Accordion";
import { useGetEntries } from "./service/Contenful";

export default function Home() {
  const { data, loading } = useGetEntries();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.accordionContainer}>
        {data && (
          <div>
            <h1>{data.title}</h1>
            {data.accordionItems.map((item) => (
              <Accordion item={item.fields} key={item.sys.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
