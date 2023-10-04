import { useState, useRef } from "react";

const Input = ({ label, type, inputStyle, labelStyle}) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef=useRef(null);

    const focusHandler = () => {
        setIsFocused(true);
    }

    const blurHandler = () =>{
        if(inputRef.current.value.trim() === ''){
            setIsFocused(false);
        }else{
            setIsFocused(true);
        }
        
    }
    console.log(inputRef)

    const labelDynamic=' text-red-custom translate-x-[10px] translate-y-[-9px] text-[0.75em] py-[0] px-[10px] bg-dark-custom border-l-[1px] border-red-custom border-r-[1px] tracking-[0.25em]';

    return (
        <div className="mb-4 relative pt-4">
            <label className={`${labelStyle} ${isFocused ? `${labelDynamic}` : 'text-white'}`}>{label}</label>
            <input
                className={`${inputStyle} ${isFocused ? 'border-red-custom' : 'border-gray-custom'}`}
                type={type}
                onFocus={focusHandler}
                onBlur={blurHandler}
                ref={inputRef}
            />
            
        </div>
    );
};

export default Input;