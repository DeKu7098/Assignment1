import React, { useState } from 'react';
import classes from './InputFields.module.css';

export default function InputFields() {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    function changeHandler(e) {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));

        if (value.trim() === '') {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: `${name} is required`
            }));
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: ''
            }));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        const isEmpty = Object.values(errors).some(error => error !== '');
        if (isEmpty) {
            alert('Please fill in all required fields.');
            return;
        }

        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('Form data saved to localStorage:', formData);
    }

    return (
        <div className={`container ${classes['fields-table']}`}>
            <form onSubmit={handleSubmit}>
                <div className='firstName'>
                    <label htmlFor="firstName">First Name <span className='text-primary'>*</span></label>
                    <input type="text" name="firstName" placeholder='First name' required onChange={changeHandler} />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                </div>
                <div className='lastName'>
                    <label htmlFor="lastName">Last Name <span className='text-primary'>*</span></label>
                    <input type="text" name="lastName" placeholder='Last Name' required onChange={changeHandler} />
                    {errors.lastName && <span className="error">{errors.lastName}</span>}
                </div>
                <div className='email'>
                    <label htmlFor="email">Email <span className='text-primary'>*</span></label>
                    <input type="email" name="email" placeholder='Email' required onChange={changeHandler} />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className='pNumber'>
                    <label htmlFor="phoneNumber">Phone Number <span className='text-primary'>*</span></label>
                    <input type="tel" name="phoneNumber" placeholder='Phone Number' required onChange={changeHandler} />
                    {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
                </div>
                <div className='password'>
                    <label htmlFor="password">Password <span className='text-primary'>*</span></label>
                    <input type="password" name="password" placeholder='Create Password' required onChange={changeHandler} />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <div className='confirmPassword'>
                    <label htmlFor="confirmPassword">Confirm Password<span className='text-primary'>*</span></label>
                    <input type="password" name="confirmPassword" placeholder='Confirm Your Password' required onChange={changeHandler} />
                    {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
