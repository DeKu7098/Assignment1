import React from 'react';
import classes from './Modal1.module.css';
import InputFields from './Fields/InputFields';

export default function Modal1(){
    return(
        <div className={`container p-5 ${classes['modal-box']}`}>
            <h3 className={classes.step}>Step 1</h3>
            <h2 className={classes.yourProfile}>Your Profile</h2>
            <p className={classes['sub-text']}>Enter the login information for your account.You will be able to create additional users after registering</p>
            <div className={classes['value-fields']}>
                <InputFields/>
            </div>
        </div>
    )
}