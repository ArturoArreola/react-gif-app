import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = (props) => {
  
    const [inputValue, setInputValue] = useState('');
    const { setCategories } = props;

    const handleInputChange = (e) => {
        console.log('Inside handleInputChange');
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        console.log('Inside handleSubmit');
        e.preventDefault();
        
        if(inputValue.trim().length > 1) {
            setCategories(category => [inputValue, ...category]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
