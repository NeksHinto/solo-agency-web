"use client";
import Link from "next/link";
import styles from "../page.module.css";
import { services } from "../constants/services";

export default function ServicesSection() {
  return (
    <div className={styles.carousel}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className={styles.title}>SERVICIOS</p>
        <p
          className={styles.link}
          style={{
            textAlign: "center",
          }}
        >
          <Link href="/services">VER MÁS</Link>
        </p>
      </div>
      {/* <p className={styles.page__description}>Solo Agency es una agencia creativa espacializada en el diseño de identidad visual y comunicacion efectiva.</p> */}
      <div className={styles.services_carousel_container}>
        {services.map((service, i) => {
          return (
            <p
              key={i}
              className={styles.box}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gridArea: `box${i + 1}`,
                textTransform: "uppercase",
              }}
            >
              <Link href="/clients">{service.name}</Link>
            </p>
          );
        })}
      </div>
    </div>
  );
}
