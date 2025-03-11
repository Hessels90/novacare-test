"use client";
import styles from "./page.module.css";
import { ContenfulClient } from "./middleware/Contenful";
import Accordion from "../components/Accordion/Accordion";

const response = await ContenfulClient.getEntries({
  content_type: "accordion",
  include: 2,
});

export default function Home() {
  return (
    <div>
      <div className={styles.accordion}>
        {response && (
          <div>
            <h1>{response.items[0].fields.title}</h1>
            {response.items[0].fields.accordionItems &&
              response.items[0].fields.accordionItems.map((item) => (
                <Accordion item={item.fields} key={item.sys.id} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
