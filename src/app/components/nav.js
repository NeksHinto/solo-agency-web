"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "../page.module.css";
import { motion } from "framer-motion";
import Flecha from "./flecha";

export default function Nav() {
  const [isActive, setIsActive] = useState(false);

  const currentPath = usePathname();

  const pages = [
    { name: "ABOUT US", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "CLIENTS", path: "/clients" },
    { name: "CONTACT", path: "/contact" },
  ];

  const isCurrent = (path) => {
    return currentPath === path;
  };

  return (
    <div className={styles.nav}>
      <Link href="/">
        <Image
          src="/SOLO AGENCY LOGO TYPO BLANCO.png"
          alt="Valeries"
          width={177}
          height={45}
          priority
        />
      </Link>
      <div className={styles.list}>
        <motion.ul
          animate={{ top: isActive ? "-15px" : "-225px" }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
        >
          {pages.map((page, index) => {
            return (
              <li key={index} style={{ fontWeight: 600 }}>
                <Link
                  onClick={() => {
                    setIsActive(!isActive);
                  }}
                  href={page.path}
                  alt={page.name}
                  className={isCurrent(page.path) ? "page_current__pRY1c" : ""}
                >
                  {page.name}
                </Link>
              </li>
            );
          })}
          <Flecha isActive={isActive} setIsActive={setIsActive} />
        </motion.ul>
      </div>
    </div>
  );
}
