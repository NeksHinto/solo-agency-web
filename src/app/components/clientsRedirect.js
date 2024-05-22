'use client'
import styles from "../page.module.css";
import Link from "next/link";
import '../globals.css'

export default function ClientsRed() {

    return (
        <div >
            <div className={styles.redirect__container}>
                    <div className={styles.redirect}>
                        <Link href={'/clients'} style={{width: '100%'}}>
                        <p style={{width: '100%'}}>ALL CLIENTS</p>
                        </Link>
                        <div style={{background: 'black', height: '150vh', position: 'fixed', zIndex: '-1', width: '100vw', top: '0', left: '0'}}></div>
                    </div>
            </div>
        </div>
    )
}