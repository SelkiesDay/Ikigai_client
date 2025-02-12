import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './backbutton.module.css';

const BackButton = ({onClick}) => {
    const navigate = useNavigate();

    const handleClick = ()=> {
        if (onClick)
 onClick();
navigate(-1);    };

    return(
        <button onClick={handleClick} className={styles.backButton}>Back</button>
    );
};

export default BackButton;