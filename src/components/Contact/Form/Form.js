import Input from "./Input";
import Button from "../../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";

const Form = () => {
  const inputStyle =
    "w-full p-[10px] outline-none border border-gray-custom bg-dark-custom text-white text-[1em]";
  const labelStyle =
    "absolute left-1 px-[10px] pointer-events-none duration-300 uppercase";
  const textareaStyle =
    "w-full px-3 h-64 pt-2 outline-none border border-gray-custom bg-dark-custom text-white text-[1em] resize-none";

  const [isFocused, setIsFocused] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [blurEvent, setBlurEvent] = useState(false);
  const [isInvalid, setInvalid] = useState(false);
  const [enteredText, setText] = useState("");
  const inputRef = useRef(null);
  const [areaValidity, setAreaValidity] = useState(false);
  const [nombreValid, setNombreValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [fakePause, setFakePause] = useState(false);
  const focusHandler = () => {
    setIsFocused(true);
    setIsTouched(true);
  };

  useEffect(() => {
    if (isTouched && blurEvent) {

      if (enteredText.trim() === "") {
        setInvalid(true)
        setAreaValidity(false);
      } else {
        setInvalid(false)
        setAreaValidity(true)
      }

    }
  }, [isTouched, blurEvent, enteredText])

  const blurHandler = () => {
    if (inputRef.current.value.trim() === "") {
      setIsFocused(false);
    } else {
      setIsFocused(true);
    }
    setBlurEvent(true);
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonPressed(true);
    setTimeout(() => {
      setButtonPressed(false); // Cambia el estado después del timeout
    }, 1000);
    if(areaValidity && emailValid && nombreValid){
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
      alert("Tu idea ha sido enviada, gracias por tomar el paso!");
      setFormData({
        nombre: "",
        email: "",
        mensaje: "",
      });

      setAreaValidity(false);
      setEmailValid(false);
      setNombreValid(false);
      setInvalid(false)
      setBlurEvent(false);
      setIsFocused(false);
      setAreaValidity(false);
      setText('');
      setFakePause(true);
    } else {
      alert("Hubo un problema al enviar tu idea. Por favor, inténtalo de nuevo");
    }
    }else if(!areaValidity){
      setInvalid(true)
      setBlurEvent(true);
    }
  };


  const pyClass = isFocused ? "py-[0px]" : "py-[10px]";

  const labelDynamic =
    " text-red-custom translate-x-[10px] translate-y-[-9px] text-[0.75em] px-[10px] bg-dark-custom border-l-[1px] border-red-custom border-r-[1px] tracking-[0.25em]";

  return (
    <div className="max-w-md mx-auto w-full flex flex-col">
      <form className="flex flex-col items-center" onSubmit={handleSubmit} noValidate>
        <div className="h-[1px] bg-red-custom w-[65%] self-start"></div>{" "}
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
          fakePause={fakePause}
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
          fakePause={fakePause}

        />
        <div className="relative pt-4 pb-[10px] w-full">
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
            <div className="absolute top-7 right-0 flex items-center pr-3">
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className="text-red-custom text-xl" // Personaliza el tamaño y color según tus necesidades
              />
            </div>
          )}
        </div>
        <div className="h-[1px] bg-red-custom w-[65%] self-end mb-6"></div>{" "}
        {/* linea inferior*/}
        <Button onSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default Form;
