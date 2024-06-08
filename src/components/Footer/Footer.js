// Footer.js
import React, { useState } from 'react';
import classes from './Footer.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Toast from './Toast';

export default function BackAndNext({ onNext, onBack, dataIsValid }) {
    const [showError, setShowError] = useState(false);

    function handleClickNext() {
        if (!dataIsValid) {
            setShowError(true);
            setTimeout(() => setShowError(false), 3000);
        } else {
            onNext();
        }
    }

    return (
        <div className={classes['nav-buttons']}>
            <button className={classes['back-btn']} onClick={onBack}><ChevronLeft className={classes['left-icon']} />Back To Login</button>
            <button className={classes['next-btn']} onClick={handleClickNext} type='button'>Next Step<ChevronRight className={classes['right-icon']} /></button>
            {showError && <Toast message="Please fill in all required fields." onClose={() => setShowError(false)} />}
        </div>
    );
}


