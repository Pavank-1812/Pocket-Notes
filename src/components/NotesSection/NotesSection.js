import React from 'react'

import styles from './NotesSection.module.css'

function NotesSection() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.outer}>
                <textarea className={styles.textarea}></textarea>
                </div>
            </div>
        </>
    )
}

export default NotesSection