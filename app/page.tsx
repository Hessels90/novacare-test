"use client";
import styles from "./page.module.css";
import Accordion from "../components/Accordion/Accordion";
import { useGetEntries } from "./service/Contenful";

export default function Home() {
  const { data, loading } = useGetEntries();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.accordionContainer}>
        {data && data.length > 0 ? (
          data.map((entries) => (
            <div key={entries.sys.id} className={styles.accordionGroup}>
              <h1 className={styles.accordionTitle}>{entries.fields.title}</h1>
              {entries.fields.accordionItems.map((item) => (
                <Accordion item={item.fields} key={item.sys.id} />
              ))}
            </div>
          ))
        ) : (
          <div className={styles.noData}>No accordion data available</div>
        )}
      </div>
    </div>
  );
}
