import React from "react";
import styles from "./Accordion.module.css";

type ItemProps = {
  item: {
    internalName: string;
    name: string;
    text: string;
  };
};

export default function Accordion({ item }: ItemProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={styles.accordionContent}>
      <button className={styles.accordionButton} onClick={() => setOpen(!open)}>
        <h2>{item.name}</h2>
        <h2>{open ? "-" : "+"}</h2>
      </button>
      <div>{open && <p>{item.text}</p>}</div>
    </div>
  );
}
