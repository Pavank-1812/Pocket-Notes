import lock from '../../assets/lock.png';
import home from '../../assets/home-img.png';
import React from 'react';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal.js';
import home_styles from '../../components/HomePage/HomePage.module.css';
import Notes from './NotesSection.module.css'
import btn_styles from '../../components/GenerateNotes/GenerateNotes.module.css';


export default function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleBlurClick = (event) => {
        // Check if the clicked element has the blur class
        if (event.target.classList.contains(home_styles.blur)) {
            closeModal(); // Close the modal
        }
    };
    return (
        <>
            <div className={home_styles.container}>
                <div className={home_styles.left}>
                    <div className={home_styles.heading}><p>Pocket Notes</p></div>
                    <div className={home_styles.group_list}>
                        <div className={Notes.icon}>MN</div>
                        <div className={Notes.group_name}><h3>My Notes</h3></div>
                    </div>

                    <div className={btn_styles.add}>
                        <button className={btn_styles.add_btn} onClick={openModal}>
                            +
                        </button>
                    </div>
                    {isModalOpen && <div onClick={handleBlurClick} className={home_styles.blur}><Modal onClose={closeModal} /></div>}
                </div>

                <div className={home_styles.right}>



                    <div className={home_styles.main}>
                        <img className={home_styles.home} alt='home' src={home}></img>
                        <h1>Pocket Notes</h1>
                        <p>Send and receive messages without keeping your phone online.
                            Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                    </div>
                    <div className={home_styles.encription}>
                        <img className={home_styles.lock} alt='lock' src={lock}></img>
                        <p>end-to-end encrypted</p>
                    </div>

                    {/* <div className={Notes.main}>
                        <div className={Notes.header}>
                            <div className={Notes.icon}>MN</div>
                            <div className={Notes.group_name}>My Notes</div>

                        </div>
                        <div className={Notes.outer}>
                            <textarea className={Notes.textarea}></textarea>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}
