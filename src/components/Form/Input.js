import { useState } from "react";

const Input = ({ label, type, inputStyle, labelStyle}) => {
    const [isFocused, setIsFocused] = useState(false);

    const focusHanlder = () => {
        setIsFocused(true);
    }

    const blurHandler = () =>{
        setIsFocused(false);
    }

    return (
        <div className="mb-4 relative">
            <label className={`${labelStyle} ${isFocused ? 'text-red-custom' : 'text-white'}`}>{label}</label>
            <input
                className={inputStyle}
                type={type}
                onFocus={focusHanlder}
                onBlur={blurHandler}
            />
            
        </div>
    );
};

export default Input;