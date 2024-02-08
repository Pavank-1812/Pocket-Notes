import React from 'react'

import styles from './NotesSection.module.css'

function NotesSection() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.header}>
                    <div className={styles.icon}>MN</div>
                    <div className={styles.group_name}>My Notes</div>

                </div>
                <div className={styles.outer}>
                <textarea draggable="false" className={styles.textarea}></textarea>
                </div>
            </div>
        </>
    )
}

export default NotesSection