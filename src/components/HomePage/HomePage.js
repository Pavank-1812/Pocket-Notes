import React from 'react';
import styles from '../../components/HomePage/HomePage.module.css';
import lock from '../../assets/lock.png';
import home from '../../assets/home-img.png';
import GenerateNotes from '../../components/GenerateNotes/GenerateNotes.js'
import NotesSection from '../../components/NotesSection/NotesSection.js'


export default function HomePage() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.heading}><p>Pocket Notes</p></div>
                    <GenerateNotes />
                </div>

                <div className={styles.right}>
                    <NotesSection />
                    <div className={styles.main}>
                        <img className={styles.home} alt='home' src={home}></img>
                        <h1>Pocket Notes</h1>
                        <p>Send and receive messages without keeping your phone online.
                            Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                    </div>
                    <div className={styles.encription}>
                        <img className={styles.lock} alt='lock' src={lock}></img>
                        <p>end-to-end encrypted</p>
                    </div>
                </div>
            </div>
        </>
    )
}
