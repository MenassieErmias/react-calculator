import React from 'react'

const NumberInput = ({ digit, display, setDisplay }) => {
    function handleClick() {
        setDisplay(prev => prev + digit)
    }

    return (
        <button className='number-input button' onClick={handleClick}>{digit}</button>
    )
}

export default NumberInput