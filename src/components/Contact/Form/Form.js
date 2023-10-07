import Input from "./Input";
import Button from "../../UI/Button";
import { useState, useRef } from "react";

const Form = () => {
  const inputStyle =
    "w-full p-[10px] outline-none border border-gray-custom bg-dark-custom text-white text-[1em]";
  const labelStyle =
    "absolute left-1 px-[10px] pointer-events-none duration-300 uppercase";
  const textareaStyle =
    "w-full px-3 h-64 pt-2 outline-none border border-gray-custom bg-dark-custom text-white text-[1em] resize-none";

  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const focusHandler = () => {
    setIsFocused(true);
  };

  const blurHandler = () => {
    if (inputRef.current.value.trim() === "") {
      setIsFocused(false);
    } else {
      setIsFocused(true);
    }
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const response = await fetch("https://formspree.io/f/mvojvyla", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const responseData = await response.json(); // Agrega esta línea para capturar la respuesta
      console.log(responseData);
      alert("Tu idea ha sido enviada, gracias por tomar el paso!");
      setFormData({
        nombre: "",
        email: "",
        mensaje: "",
      });
    } else {
      alert(
        "Hubo un problema al enviar tu idea. Por favor, intentalo de nuevo"
      );
    }
  };

  const pyClass = isFocused ? "py-[0px]" : "py-[10px]";

  const labelDynamic =
    " text-red-custom translate-x-[10px] translate-y-[-9px] text-[0.75em] px-[10px] bg-dark-custom border-l-[1px] border-red-custom border-r-[1px] tracking-[0.25em]";

  return (
    <div className="max-w-md mx-auto w-full flex flex-col">
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="h-[1px] bg-red-custom w-[65%] self-start"></div>{" "}
        {/* linea superior*/}
        <Input
          label="Nombre"
          type="text"
          inputStyle={inputStyle}
          labelStyle={labelStyle}
          name="nombre" //Prop name
          value={formData.nombre} // Valor del prop
          onChange={handleChange} //Agrega la prop onChange
        />
        <Input
          label="Email"
          type="email"
          inputStyle={inputStyle}
          labelStyle={labelStyle}
          name="email" // Agrega la prop name
          value={formData.email} // Agrega la prop value
          onChange={handleChange} // Agrega la prop onChange
        />
        <div className=" relative pt-4 pb-[10px] w-full">
          <label
            className={`${labelStyle} ${
              isFocused ? labelDynamic : "text-gray-custom"
            } ${pyClass}`}
          >
            Tu Idea
          </label>
          <textarea
            className={`${textareaStyle} ${
              isFocused ? "border-red-custom" : "border-gray-custom"
            }`}
            rows="4"
            name="mensaje" // Agrega la prop name
            value={formData.mensaje} // Agrega la prop value
            onChange={handleChange} // Agrega la prop onChange
            ref={inputRef}
            onBlur={blurHandler}
            onFocus={focusHandler}
          ></textarea>
        </div>
        <div className="h-[1px] bg-red-custom w-[65%] self-end mb-6"></div>{" "}
        {/* linea inferior*/}
        <Button onSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default Form;
