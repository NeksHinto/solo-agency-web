"use client";
import { useEffect } from "react";
import styles from "../page.module.css";
import ContactForm from "../components/contactForm";
import Inner from "../inner/inner";

export default function Contact() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className={styles.main}>
      <Inner>
        <div className={styles.page__info}>
          <div id="footer">
            <div className={styles.contact__page__title}>
              <p>TU MARCA SE CODIFICA CON EL MENSAJE DEL EXITO</p>
            </div>
          </div>
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
      </Inner>
    </main>
  );
}
