import { useState, useRef, useEffect } from "react";

const Input = ({
  label,
  type,
  inputStyle,
  labelStyle,
  name,
  value,
  onChange,
  onInvalidChange
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const [enteredEmail, setEmail] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [blurEvent, setBlurEvent] = useState(false);

  useEffect(() => {
    if (type === 'email' && isTouched && blurEvent) {
      const isValidEmail = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
      };

      if (!isValidEmail(enteredEmail)) {
        onInvalidChange(false, isTouched);
      } else {
        onInvalidChange(true, isTouched);
      }
    }
  }, [enteredEmail, isTouched, type, onInvalidChange, blurEvent]);

  const focusHandler = () => {
    setIsFocused(true);
    setIsTouched(true);
    setBlurEvent(false);
  };

  const changeHandler = (event) => {
    if (type === 'email') {
      setEmail(event.target.value);
    }
    onChange(event);
  };

  const blurHandler = () => {
    if (inputRef.current.value.trim() === "") {
      setIsFocused(false);
    } else {
      setIsFocused(true);
    }
    setBlurEvent(true);
  };

  const pyClass = isFocused ? "py-[0px]" : "py-[10px]";

  const labelDynamic =
    " text-red-custom translate-x-[10px] translate-y-[-9px] text-[0.75em] px-[10px] bg-dark-custom border-l-[1px] border-red-custom border-r-[1px] tracking-[0.25em]";

  return (
    <div className="mb-4 relative pt-4 w-full">
      <label
        className={`${labelStyle} ${isFocused ? `${labelDynamic}` : "text-white"
          } ${pyClass}`}
      >
        {label}
      </label>
      <input
        className={`${inputStyle} ${isFocused ? "border-red-custom" : "border-gray-custom"
          }`}
        type={type}
        name={name}
        value={value}
        onChange={changeHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
        ref={inputRef}
      />
    </div>
  );
};

export default Input;