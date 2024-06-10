import Link from "next/link";
import React from "react";
import styles from "@/styles/styles.module.css";
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
                <Image
                  src="/images/instagram.svg"
                  alt="instagram"
                  width={32}
                  height={32}
                />
              </Link>
            </p>
            <p style={{ width: "32px", height: "32px", overflow: "hidden" }}>
              <Link
                href={`https://wa.me/${
                  process.env.NEXT_PUBLIC_WPP_NUMBER
                }?text=${wppAutoMessage()}`}
                target="blank"
              >
                <Image
                  src="/images/whatsapp.svg"
                  alt="whatsapp"
                  width={32}
                  height={32}
                />
              </Link>
            </p>
            <p style={{ width: "32px", height: "32px", overflow: "hidden" }}>
              <Link
                href="https://www.linkedin.com/company/soloagency6/"
                target="blank"
              >
                <Image
                  src="/images/linkedin.svg"
                  alt="linkedin"
                  width={32}
                  height={32}
                />
              </Link>
            </p>
            <p style={{ width: "32px", height: "32px", overflow: "hidden" }}>
              <Link href="https://www.behance.net/soloagency6" target="blank">
                <Image
                  src="/images/behance.svg"
                  alt="behance"
                  width={32}
                  height={32}
                />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
