"use client";
import { useContext } from "react";
import styles from "@/styles/styles.module.css";
import ContactForm from "@/components/contactForm";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { wppAutoMessage } from "../utils/wppAutoMessage";
import { DeviceContext } from "../contexts/deviceContext";

export default function Contact() {
  const { isMobile } = useContext(DeviceContext);

  return (
    <main className={styles.main}>
      <div className={styles.contact__page}>
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
          <p className={styles.page__description}>
            Tu marca se codifica con el mensaje del éxito
          </p>
          <ContactForm />
        </motion.div>
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
          <div className={styles.title__gap}>
            <p className={styles.title}>FOLLOW US</p>
          </div>
          <motion.div className={styles.socials__container}>
            <Link href="https://www.instagram.com/solo_agency/" target="blank">
              <Image
                style={{ marginLeft: !isMobile && -4 }}
                src="/images/instagramThin.svg"
                alt="instagram"
                width={80}
                height={80}
              />
            </Link>
            <Link
              href={`https://wa.me/${
                process.env.NEXT_PUBLIC_WPP_NUMBER
              }?text=${wppAutoMessage()}`}
              target="blank"
            >
              <Image
                style={{ paddingBottom: !isMobile && 4 }}
                src="/images/whatsappThin.svg"
                alt="behance"
                width={70}
                height={70}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/soloagency6/"
              target="blank"
            >
              <Image
                style={{
                  paddingBottom: isMobile && 5,
                  paddingTop: !isMobile && 3,
                }}
                src="/images/linkedinThin.svg"
                alt="linkedin"
                width={80}
                height={80}
              />
            </Link>
            <Link href="https://www.behance.net/soloagency6" target="blank">
              <Image
                style={{
                  paddingBottom: isMobile && 5,
                  marginLeft: isMobile ? -10 : -4,
                }}
                src="/images/behanceThin.svg"
                alt="whatsapp"
                width={80}
                height={80}
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
