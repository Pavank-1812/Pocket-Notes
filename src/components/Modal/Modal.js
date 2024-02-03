import React from 'react';
import styles from '../../components/Modal/Modal.module.css';

const Modal = () => {
    return (
        <div className={styles.popup}>
            <p>Create  New Group</p>
            <div className={styles.input_div}>
                <p>Group Name</p>
                <input className={styles.input} type='text' placeholder='Enter group name'></input>
            </div>
                <div className={styles.color_div}>
                    <p>Choose Color</p>
                    <div className={styles.choice_div}>
                        <div className={styles.choice} id={styles.choice1}></div>
                        <div className={styles.choice} id={styles.choice2}></div>
                        <div className={styles.choice} id={styles.choice3}></div>
                        <div className={styles.choice} id={styles.choice4}></div>
                        <div className={styles.choice} id={styles.choice5}></div>
                        <div className={styles.choice} id={styles.choice6}></div>
                    </div>
                </div>
                <button className={styles.create_btn}>Create</button>
        </div>
    )
}

export default Modal