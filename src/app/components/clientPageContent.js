import React from "react";
import ClientCarousel from "./carousel";
import ClientGrid from "./clientGrid";
import styles from "../page.module.css";

const ClientPageContent = ({ carousel, data }) => {
  return (
    <div className={styles.client__content}>
      <div className={styles.client__content__container}>
        <p className={styles.client__title} style={{ color: "gray" }}>
          {data.title[0]}
        </p>
        <p className={styles.client__title}>{data.title[1]}</p>
        {carousel ? <ClientCarousel key={data.title} items={data.items} /> :
        <ClientGrid key={data.title} items={data.items}/>
        }
      </div>
    </div>
  );
};

export default ClientPageContent;
