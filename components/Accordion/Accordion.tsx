import React from "react";
import styles from "./Accordion.module.css";

type ItemProps = {
  item: {
    internalName: string;
    name: string;
    text: string;
  };
};

export default function Accordion(item: ItemProps) {
  console.log(item.item);
  return (
    <div className={styles.accordion}>
      <h2>{item.item.name}</h2>
      <p>{item.item.text}</p>
    </div>
  );
}
