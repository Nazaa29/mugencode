import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const Input = ({
  label,
  type,
  inputStyle,
  labelStyle,
  name,
  value,
  onChange,
  buttonPressed
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const [enteredEmail, setEmail] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [blurEvent, setBlurEvent] = useState(false);
  const [isInvalid, setInvalid] = useState(false);
  const [enteredText, setText] = useState('');

  useEffect(() => {
    if (type === 'email' && isTouched && blurEvent) {

      const isValidEmail = (email) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(email);
    };    

      if (!isValidEmail(enteredEmail)) {
        setInvalid(true)
      } else {
        setInvalid(false);
      }

    }

    if (type === 'text' && isTouched && blurEvent) {

      if(enteredText.trim() === ""){
        setInvalid(true)
      }else{
        setInvalid(false)
      }

    }
  }, [enteredEmail, isTouched, type, blurEvent, enteredText])

  const focusHandler = () => {
    setIsFocused(true);
    setIsTouched(true);
  };


  const changeHandler = (event) => {
    if (type === 'email') {
      setEmail(event.target.value)
    }
    if (type === 'text') {
      setText(event.target.value)
    }
    onChange(event);
  }

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
    "text-red-custom translate-x-[10px] translate-y-[-9px] text-[0.75em] px-[10px] bg-dark-custom border-l-[1px] border-red-custom border-r-[1px] tracking-[0.25em]";

  return (
    <div className="mb-4 relative pt-4 w-full">
      <label
        className={`${labelStyle} ${
          isFocused ? labelDynamic : isInvalid ? "text-red-custom" : "text-white"
        } ${pyClass}`}
      >
        {label}
      </label>
      <input
        className={`${inputStyle} ${isFocused ? "border-red-custom" : "border-gray-custom"} ${isInvalid ? "text-dark-custom font-medium border-red-custom bg-opacity-25" : ""
          }`}
        type={type}
        name={name}
        value={value}
        onChange={changeHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
        ref={inputRef}
      />
      {isInvalid && (
        <div className="absolute top-7 right-0 flex items-center pr-3">
          <FontAwesomeIcon
            icon={faExclamationCircle}
            className="text-red-custom text-xl" // Personaliza el tamaño y color según tus necesidades
          />
        </div>
      )}
    </div>
  );
};

export default Input;