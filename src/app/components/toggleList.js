import { useState, useEffect } from "react";
import styles from "@/styles/styles.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { brands } from "../constants/brands";

const ToggleList = ({ items, initSelect, filterFunction }) => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  };

  useEffect(() => {
    if (initSelect) toggle(initSelect);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initSelect]);

  return (
    <div className={styles.services_container}>
      {items.map((item, i) => {
        return (
          <motion.div
            key={i}
            id={`service-${i}`}
            className={styles.service}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: [0.65, 0, 0.35, 1],
              duration: 0.75,
              x: { duration: 0.25 },
            }}
          >
            <div className={styles.service__banner} onClick={() => toggle(i)}>
              <p className={styles.section_title}>{item.name}</p>
              <span className={styles.cross}>{selected === i ? "–" : "+"}</span>
            </div>
            <div
              className={
                selected == i
                  ? "page_service__list__show__37KEC"
                  : "page_service__list__aU9Ez"
              }
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div className={styles.subservices}>
                {item.items?.map((item, i) => (
                  <div
                    key={`item-${i}`}
                    style={{ display: "flex", gap: "1rem" }}
                  >
                    {i !== 0 && <p>|</p>} <p>{item}</p>
                  </div>
                ))}
              </div>
              <motion.div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  columnGap: "5rem",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  ease: [0.65, 0, 0.35, 1],
                  duration: 0.75,
                  x: { duration: 0.25 },
                }}
              >
                {brands
                  .filter(filterFunction(item))
                  .map((brand, brandIndex) => (
                    <div key={brandIndex}>
                      <Link href={brand.route} alt={brand.name}>
                        <img
                          src={brand.imageLocation}
                          alt={brand.name}
                          className={styles.client__logo}
                        />
                      </Link>
                    </div>
                  ))}
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ToggleList;
