import Link from "next/link";
import React from "react";
import styles from "../page.module.css";
import instagramIcon from "../../../public/instagram.svg";
import behanceIcon from "../../../public/behance.svg";
import linkedinIcon from "../../../public/linkedin.svg";
import whatsappIcon from "../../../public/whatsapp.svg";
import { wppAutoMessage } from "../utils/wppAutoMessage";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__section_container}>
        <div className={styles.footer__section}>
          <p className={styles.subtitle}>KNOW MORE</p>
          <p style={{ fontWeight: 600 }}>
            <Link href="/about">ABOUT US</Link>
          </p>
          <p style={{ fontWeight: 600 }}>
            <Link href="/services">SERVICES</Link>
          </p>
          <p style={{ fontWeight: 600 }}>
            <Link href="/clients">CLIENTS</Link>
          </p>
          <p style={{ fontWeight: 600 }}>
            <Link href="/contact">CONTACT</Link>
          </p>
        </div>
        <div className={styles.footer__section}>
          <p className={styles.subtitle}>FOLLOW US</p>
          <div className={styles.footer__section__socials}>
            <p
              style={{
                width: "32px",
                height: "32px",
                overflow: "hidden",
              }}
            >
              <Link
                href="https://www.instagram.com/solo_agency/"
                target="blank"
              >
                <Image src={instagramIcon} alt="instagram" />
              </Link>
            </p>
            <p style={{ width: "32px", height: "32px", overflow: "hidden" }}>
              <Link
                href={`https://wa.me/${
                  process.env.NEXT_PUBLIC_WPP_NUMBER
                }?text=${wppAutoMessage()}`}
                target="blank"
              >
                <Image src={whatsappIcon} alt="whatsapp" />
              </Link>
            </p>
            <p style={{ width: "32px", height: "32px", overflow: "hidden" }}>
              <Link
                href="https://www.linkedin.com/company/soloagency6/"
                target="blank"
              >
                <Image src={linkedinIcon} alt="linkedin" />
              </Link>
            </p>
            <p style={{ width: "32px", height: "32px", overflow: "hidden" }}>
              <Link href="https://www.behance.net/soloagency6" target="blank">
                <Image src={behanceIcon} alt="behance" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
