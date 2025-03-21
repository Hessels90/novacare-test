import { useState } from "react";
import styles from "./Accordion.module.css";
import { ItemProps } from "@/types/AccordionTypes";

export default function Accordion({ item }: ItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.accordionItem}>
      <button className={styles.accordionButton} onClick={() => setOpen(!open)}>
        <h3>{item.name}</h3>
        <span>{open ? "-" : "+"}</span>
      </button>
      <div className={`${styles.accordionContent} ${open ? styles.open : ""}`}>
        <p>{item.text}</p>
      </div>
    </div>
  );
}
