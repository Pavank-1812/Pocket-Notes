import React from 'react';
import styles from '../../components/GenerateNotes/GenerateNotes.module.css';
import Modal from '../../components/Modal/Modal.js'


function GenerateNotes() {
    return (
        <>
            <div className={styles.add}>
                <button className={styles.add_btn}>+</button>
            </div>
            <Modal />
        </>

    )
}

export default GenerateNotes