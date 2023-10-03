const Input = ({ label, type, placeholder }) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
        <input
          className={`w-full px-3 py-2 border rounded-lg ${
            type === 'text' ? 'border-red-500' : '' // Añade más condiciones si es necesario
          }`}
          type={type}
          placeholder={placeholder}
        />
      </div>
    );
  };
  
  export default Input;