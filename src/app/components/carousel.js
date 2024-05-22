"use client";
import Link from "next/link";
import styles from "../page.module.css";
import Image from "next/image";

export default function Carousel() {
  return (
    <div className={styles.carousel}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className={styles.title}>CLIENTES</p>
        <p
          className={styles.link}
          style={{
            textAlign: "center",
          }}
        >
          <Link href="/services">VER MÁS</Link>
        </p>
      </div>
      <div className={styles.scroller}>
        <div className={styles.scroller__inner}>
          <Link href={"../clients/elGorumet"}>
            <Image
              src="/logos/elgourmetLogo.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="Picture of the author"
            />
          </Link>
          <Link href={"../clients/dollstore"}>
            <Image
              src="/logos/dollstoreLogo.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="Picture of the author"
            />
          </Link>
          <Link href={"../clients/eucerin"}>
            <Image
              src="/logos/eucerinLogo.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="Picture of the author"
            />
          </Link>
          <Link href={"../clients/justaOsadia"}>
            <Image
              src="/logos/justaosadiaLogo.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="Picture of the author"
            />
          </Link>
          <Link href={"../clients/lidherma"}>
            <Image
              src="/logos/lidhermaLogo.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="Picture of the author"
            />
          </Link>
          <Link href={"../clients/pucheta"}>
            <Image
              src="/logos/puchetaLogo.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="Picture of the author"
            />
          </Link>
          <Link href={"../clients/elGorumet"}>
            <Image
              src="/logos/elgourmetLogo.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="Picture of the author"
            />
          </Link>
          <Link href={"../clients/dollstore"}>
            <Image
              src="/logos/dollstoreLogo.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="Picture of the author"
            />
          </Link>
          <Link href={"../clients/eucerin"}>
            <Image
              src="/logos/eucerinLogo.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="Picture of the author"
            />
          </Link>
          <Link href={"../clients/justaOsadia"}>
            <Image
              src="/logos/justaosadiaLogo.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="Picture of the author"
            />
          </Link>
          <Link href={"../clients/lidherma"}>
            <Image
              src="/logos/lidhermaLogo.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="Picture of the author"
            />
          </Link>
          <Link href={"../clients/pucheta"}>
            <Image
              src="/logos/puchetaLogo.png"
              width={0}
              height={0}
              sizes="100vw"
              alt="Picture of the author"
            />
          </Link>
        </div>
      </div>
      {/* <div style={{display: 'flex', flexDirection: 'row'}}>
              <p className={styles.button2} style={{margin: '2rem',marginLeft: '0px', textAlign: 'left', right: '0'}}><Link href="/clients">ALL CLIENTS</Link></p>
            </div> */}
    </div>
  );
}
