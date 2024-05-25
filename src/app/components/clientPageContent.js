import React from "react";
import Carousel from "./carousel";
import styles from "../page.module.css";

const ClientPageContent = ({ carousel }) => {
  return (
    <div className={styles.client__content}>
      <div className={styles.client__content__container}>
        <p className={styles.client__title} style={{ color: "gray" }}>
          {carousel.title[0]}
        </p>
        <p className={styles.client__title}>{carousel.title[1]}</p>
        <Carousel key={carousel.title} items={carousel.items} />
      </div>
    </div>
  );
};

export default ClientPageContent;
