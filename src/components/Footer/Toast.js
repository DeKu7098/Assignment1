import React from 'react';
import classes from './Toast.module.css';

export default function Toast({ message, onClose }) {
    return (
        <div className={classes.toast}>
            <p>{message}</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
}