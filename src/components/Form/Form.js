import Input from "./Input";
import Button from '../Button';
import { useState, useRef } from "react";

const Form = () => {
    const inputStyle = 'w-full p-[10px] outline-none border border-gray-custom bg-dark-custom text-white text-[1em] ';
    const labelStyle = 'absolute left-1 px-[10px] pointer-events-none duration-300 uppercase';
    const textareaStyle = 'w-full px-3 h-64 py-2 outline-none border border-gray-custom bg-dark-custom text-white text-[1em] resize-none';

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

    const pyClass = isFocused ? 'py-[0px]' : 'py-[10px]';

    const labelDynamic=' text-red-custom translate-x-[10px] translate-y-[-9px] text-[0.75em] px-[10px] bg-dark-custom border-l-[1px] border-red-custom border-r-[1px] tracking-[0.25em]';

    return (    
        <div className="max-w-md mx-auto w-full">
            <form>
                <Input label="Nombre" type="text" inputStyle={inputStyle} labelStyle={labelStyle} />
                <Input label="Email" type="email" inputStyle={inputStyle} labelStyle={labelStyle} />
                <div className="mb-4 relative pt-4">
                    <label className={`${labelStyle} ${isFocused ? labelDynamic : 'text-gray-custom'} ${pyClass}`}>Your Idea</label>
                    <textarea
                        className={`${textareaStyle} ${isFocused ? 'border-red-custom' : 'border-gray-custom'}`}
                        rows="4"
                        ref={inputRef}
                        onBlur={blurHandler}
                        onFocus={focusHandler}
                    ></textarea>
                </div>
                <Button />
            </form>
        </div>
    );
};

export default Form;