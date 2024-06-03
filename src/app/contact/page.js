"use client";
import { useEffect } from "react";
import styles from "../page.module.css";
import ContactForm from "../components/contactForm";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className={styles.main}>
      <motion.div
        className={styles.page__info}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          ease: [0.65, 0, 0.35, 1],
          duration: 0.75,
          x: { duration: 0.25 },
        }}
      >
        <p className={styles.title}>CONTACT</p>
        <p>
          <strong>TU MARCA SE CODIFICA CON EL MENSAJE DEL ÉXITO</strong>
        </p>
      </motion.div>
      <div className={styles.contact__page}>
        <motion.div
          className={styles.contact__page__details}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: [0.65, 0, 0.35, 1],
            duration: 0.75,
            x: { duration: 0.25 },
          }}
        >
          <Link href="https://www.instagram.com/solo_agency/" target="blank">
            <Image
              src="/instagram.svg"
              alt="instagram"
              width={80}
              height={80}
            />
          </Link>
          <Link href="https://wa.me/+541131313954" target="blank">
            <Image src="/behance.svg" alt="whatsapp" width={80} height={80} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/soloagency6/"
            target="blank"
          >
            <Image src="/linkedin.svg" alt="linkedin" width={80} height={80} />
          </Link>
          <Link href="https://www.behance.net/soloagency6" target="blank">
            <Image src="/whatsapp.svg" alt="behance" width={80} height={80} />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: [0.65, 0, 0.35, 1],
            duration: 0.75,
            x: { duration: 0.25 },
          }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </main>
  );
}
