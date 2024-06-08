import React from 'react';
import classes from './Documents.module.css';

export default function Documents(){
    return(
        <div className='mt-5 documents'>
            <h5 className={classes['documents-title']}>Documents</h5>
            <p className={classes['sub-text']}>Once the following documents are signed , you'll be ready to get started</p>
        </div>   
    )
}