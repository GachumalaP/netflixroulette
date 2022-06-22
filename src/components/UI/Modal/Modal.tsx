import React from 'react';
import styles from './Modal.module.css';

interface ModalProps {
    children: JSX.Element | JSX.Element[]
}

const Modal: React.FC<ModalProps> = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;