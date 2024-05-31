"use client";
import { useEffect } from "react";
import styles from "../page.module.css";
import ContactForm from "../components/contactForm";

export default function Contact() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.page__info}>
        <p className={styles.title}>CONTACT</p>
        <p>
          TU MARCA SE CODIFICA CON EL MENSJAE DEL <strong>ÉXITO</strong>
        </p>
      </div>
      <div className={styles.contact__page}>
        <div className={styles.contact__page__details}>
          <div className={styles.contact__page__details__section}>
            <p className={styles.subtitle}>WHATSAPP</p>
            <a href="https://wa.me/+541131313954" target="blank">
              <p>+54 11 31313954</p>
            </a>
          </div>
          <div className={styles.contact__page__details__section}>
            <p className={styles.subtitle}>INSTAGRAM</p>
            <a href="https://www.instagram.com/solo_agency/" target="blank">
              <p>@solo_agency</p>
            </a>
          </div>
          <div className={styles.contact__page__details__section}>
            <p className={styles.subtitle}>BEHANCE</p>
            <a href="https://www.behance.net/soloagency6" target="blank">
              <p>Solo Agency</p>
            </a>
          </div>
          <div className={styles.contact__page__details__section}>
            <p className={styles.subtitle}>LINKEDIN</p>
            <a
              href="https://www.linkedin.com/company/soloagency6/"
              target="blank"
            >
              <p>Solo Agency</p>
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
