import React, { useState } from 'react';
import styles from '../../components/GenerateNotes/GenerateNotes.module.css';
import Modal from '../../components/Modal/Modal.js';

function GenerateNotes() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <div className={styles.add}>
                <button className={styles.add_btn} onClick={openModal}>
                    +
                </button>
            </div>
            {isModalOpen && <Modal />}
        </>
    );
}

export default GenerateNotes;
