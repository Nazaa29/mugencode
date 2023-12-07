import Input from "./Input";
import Button from "../../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import { formActions } from "../../../store";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  const [isInvalid, setInvalid] = useState(false);
  const [enteredText, setText] = useState("");
  const [nombreValid, setNombreValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [blurEvent, setBlurEvent] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const inputStyle =
    "min-w-[185px] xs:w-full p-[10px] outline-none border border-gray-custom bg-dark-custom text-white text-[1em]";
  const labelStyle =
    "absolute left-1 px-[10px] pointer-events-none duration-300 uppercase";
  const textareaStyle =
    "min-w-[185px] xs:w-full px-3 h-64 pt-2 outline-none border border-gray-custom bg-dark-custom text-white text-[1em] resize-none";

  const dispatch = useDispatch();
  const buttonPressed = useSelector(state => state.form.buttonPressed);
  const reset = useSelector(state => state.form.reset);

  const focusHandler = () => {
    setIsFocused(true);
    setIsTouched(true)
  };

  const blurHandler = () => {
    if (enteredText.trim() === '' ){
      setIsFocused(false);
    }else{
      setIsFocused(true)
    }
    setBlurEvent(true)
  };

  useEffect(() => {
    if (isTouched && blurEvent) {

      if (enteredText.trim() === "") {
        setInvalid(true)
      } else {
        setInvalid(false)
      }

    }
  }, [isTouched, blurEvent, enteredText])


  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === 'mensaje') {
      setText(value);
    }
  };

  useEffect(() =>{
    if (enteredText.trim() === "") {
      setInvalid(true);
      setBlurEvent(true);
    }
  }, [buttonPressed])

  useEffect(() => {
    setInvalid(false);
    setBlurEvent(false);
    setIsFocused(false);
    setIsTouched(false);
    setText('')
  }, [reset])

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(formActions.toggleButton());
    if (!isInvalid && emailValid && nombreValid) {
      const response = await fetch("https://formspree.io/f/mvojvyla", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setFormData({
          nombre: "",
          email: "",
          mensaje: "",
        });
        dispatch(formActions.show(true));
        dispatch(formActions.reset());
      } else {
        dispatch(formActions.show(false));
      }
    }
  };


  const pyClass = isFocused ? "py-[0px]" : "py-[10px]";

  const labelDynamic =
    "text-red-custom translate-x-[10px] translate-y-[-9px] text-[0.75em] px-[10px] bg-dark-custom border-l-[1px] border-red-custom border-r-[1px] tracking-[0.25em]";

  return (
    <div className="md:max-w-md w-[65%] pt-16 lg:pt-4 xl:pl-0 mx-auto flex flex-col">
      <form className="flex flex-col items-center min-w-[185px]" onSubmit={handleSubmit} noValidate>
        <div className="h-[1px] mb-2 bg-red-custom w-[65%] self-start"></div>
        {/* linea superior*/}
        <Input
          label="Nombre"
          type="text"
          inputStyle={inputStyle}
          buttonPressed={buttonPressed}
          labelStyle={labelStyle}
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          isValid={setNombreValid}
        />
        <Input
          label="Email"
          type="email"
          buttonPressed={buttonPressed}
          inputStyle={inputStyle}
          labelStyle={labelStyle}
          name="email"
          value={formData.email}
          onChange={handleChange}
          isValid={setEmailValid}

        />
        <div className="relative md:mt-4 mt-2 pb-[10px] w-full">
          <label
            className={`${labelStyle} ${isFocused ? labelDynamic : isInvalid ? "text-red-custom" : "text-white"
              } ${pyClass}`}
          >
            Tu Idea
          </label>
          <textarea
            className={`${textareaStyle}  ${isFocused ? "border-red-custom" : "border-gray-custom"} ${isInvalid ? "text-dark-custom font-medium border-red-custom bg-opacity-25" : ""
              } `}
            rows="4"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            ref={inputRef}
            onBlur={blurHandler}
            onFocus={focusHandler}
          ></textarea>
          {isInvalid && (
            <div className="absolute top-[13px] right-0 flex items-center pr-3">
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className="text-red-custom text-xl" // Personaliza el tamaño y color según tus necesidades
              />
            </div>
          )}
        </div>
        <div className="h-[1.5px] bg-red-custom w-[65%] self-end mb-6"></div>
        {/* linea inferior*/}
        <Button onSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default Form;
