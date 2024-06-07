import React from "react";
import Image from "next/image";
import { delay, motion } from "framer-motion";
import styles from "../page.module.css";

const ClientHeader = ({ logoSrc, logoProps, clientInfo, services }) => {
  return (
    <motion.div
      className={styles.client__banner}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: [0.65, 0, 0.35, 1],
        duration: 0.75,
        x: { duration: 0.25 },
      }}
    >
      <div className={styles.client__header}>
        <div style={logoProps}>
          <Image
            className={styles.client__page__logo}
            src={logoSrc}
            alt="Solo Agency"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className={styles.client__info}>
          <p>{clientInfo}</p>
        </div>
      </div>
      <div className={styles.client__services}>
        <p className={styles.subtitle}>SERVICIOS</p>
        <div className={styles.client__info__list}>
          {services.map((service) => (
            <p key={service}>{service}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ClientHeader;
