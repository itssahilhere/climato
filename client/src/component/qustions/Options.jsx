import React, { useState, useEffect } from 'react';
import './Options.css';

const Options = ({ options, onOptionClick }) => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        // Reset input value whenever options change
        setInputValue('');
    }, [options]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
            // Call onOptionClick when Enter key is pressed
            onOptionClick();
        }
    };

    return (
        <div className="options-container">
            {options.length > 0 ? (
                // If options array is not empty, render options
                options.map((option, index) => (
                    <h2 key={index} onClick={onOptionClick}>{option}</h2>
                ))
            ) : (
                // If options array is empty, render input box with Enter button
                <div>
                    <input
                        type="text"
                        placeholder="Enter your answer"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyPress={handleEnterKeyPress}
                    />
                    <button onClick={onOptionClick}>Enter</button>
                </div>
            )}
        </div>
    );
};

export default Options;
