import React from 'react';
import classes from './Info.module.css';

export default function Info() {
    const handleSubmit = (event) => {
        event.preventDefault(); 

 
        const formData = {
            brandName: event.target.brandName.value,
            brandType: event.target.brandType.value,
            address: event.target.address.value,
            city: event.target.city.value,
            zip: event.target.zip.value,
            taxId: event.target.taxId.value
        };

        const formDataJSON = JSON.stringify(formData);

        localStorage.setItem('formData', formDataJSON);
    };

    return (
        <div className={classes['general-info']}>
            <h6 className={classes.title}>General Information </h6>
            <form onSubmit={handleSubmit}>
                <div className={`container ${classes['field-grid']}`}>
                    <div className='brand-name'>
                        <label htmlFor="brandName">Brand Name <span className='text-primary'>*</span></label>
                        <input type="text" name="brandName" placeholder='Brand name' className={classes.brand} required />
                    </div>
                    <div className='brand-type'>
                        <label htmlFor="brandType">Brand Type <span className='text-primary'>*</span></label>
                        <select name="brandType" id="brandType" className={`${classes['client']}`}>
                            <option value="select" disabled>Select your client</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className='address'>
                        <label htmlFor="address">Street Address <span className='text-primary'>*</span></label>
                        <input type="text" name="address" placeholder='Street Address' className={classes.address} required />
                    </div>
                    <div className='city'>
                        <label htmlFor="city">City <span className='text-primary'>*</span></label>
                        <input type="text" name="city" placeholder='Input city' className={classes.city} required />
                    </div>
                    <div className='zipcode'>
                        <label htmlFor="zip">Zip Code <span className='text-primary'>*</span></label>
                        <input type="text" name="zip" placeholder='Zip code' className={classes.zip} required />
                    </div>
                    <div className='tax-id'>
                        <label htmlFor="taxId">Tax Id Number <span className='text-primary'>*</span></label>
                        <input type="text" name="taxId" placeholder='Tax Id Number' className={classes.tax} required />
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
