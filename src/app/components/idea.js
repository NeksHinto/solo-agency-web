import Link from "next/link";
import styles from "../page.module.css";

export default function Idea() {
  return (
    <div className={styles.carousel}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p className={styles.title}>ESTAMOS A UN CLICK DE DISTANCIA</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p className={styles.button2}>
            <Link href="/contact">CONTACT US</Link>
          </p>
        </div>
      </div>
    </div>

    // <div className={styles.idea}>
    //   <div>
    //     <p>Tenes una idea?</p>
    //   </div>
    //   <div style={{display: 'flex', flexDirection: 'row'}}>
    //     <p className={styles.button2} style={{marginLeft: '0rem'}}><Link href="/contact">CONTACTANOS</Link></p>
    //   </div>
    // </div>
  );
}
