"use client";
import Link from "next/link";
import styles from "../page.module.css";

const services = [
  {
    name: "SOCIAL MEDIA",
    item1: "- Calendarizacion",
    item2: "- Copywriting",
    item3: "- Posting",
  },
  {
    name: "PAID MEDIA",
    item1: "- Google ads",
    item2: "- Meta ads",
    item3: "- Mailing",
  },
  {
    name: "GRAPHIC DESIGN & BRANDING",
    item1: "- Logo design",
    item2: "- BrandBooks",
    item3: "- Social Media",
    item4: "- Packaging",
    item5: "- Visual Merchandising",
  },
  {
    name: "CONTENT",
    item1: "- Photo",
    item2: "- Video",
  },
  {
    name: "CREATIVE STRATEGY",
    item1: "- Análisis",
    item2: "- Concept",
    item3: "- Report",
  },
  {
    name: "PRODUCTION & STYLING",
    item1: "- Concept crafting",
    item2: "- Resources Management",
  },
  {
    name: "3D DESIGN",
    item1: "- Modeling",
    item2: "- Rendering",
    item3: "- Animation",
  },
];

export default function ServicesCarousel() {
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "minmax(auto, 1fr) minmax(auto, 1fr)",
          gridTemplateAreas: `
          'box1 box1 box1 box1 box2 box2 box2 box2 box3 box3 box3 box3' 
          'box4 box4 box4 box5 box5 box5 box6 box6 box6 box7 box7 box7'
          `,
        }}
      >
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
              }}
            >
              <Link href="/services">{service.name}</Link>
            </p>
          );
        })}
      </div>
    </div>
  );
}
