import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/styles/styles.module.css";

const ClientHeader = ({
  logoSrc,
  logoProps,
  clientInfo,
  services,
  shrinkLogo,
}) => {
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
      <div
        className={styles.client__header}
        style={{ marginTop: shrinkLogo ? "4rem" : 0 }}
      >
        <Image
          className={
            shrinkLogo
              ? styles.client__page__logo__shrink
              : styles.client__page__logo
          }
          src={logoSrc}
          alt="Solo Agency"
          width={0}
          height={0}
          sizes="100vw"
          priority
        />
        <div className={styles.client__info}>
          <p>{clientInfo}</p>
        </div>
      </div>
      <div className={styles.client__services}>
        <p className={styles.subtitle}>SERVICIOS</p>
        <div className={styles.client__info__list}>
          {services.map((service, i) => (
            <div key={`item-${i}`} style={{ display: "flex", gap: "0.5rem" }}>
              {i !== 0 && <p className={styles.services__sep}>|</p>}
              <p key={service} className={styles.service__list__mobile}>
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ClientHeader;
