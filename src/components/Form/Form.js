import Input from "./Input";


const Form = () => {
    return (
      <div className="max-w-md mx-auto">
        <form>
          <Input label="Nombre" type="text" placeholder="Ingrese su nombre" />
          <Input label="Email" type="email" placeholder="Ingrese su email" />
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Idea</label>
            <textarea
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Escriba su idea aquí..."
              rows="4"
            ></textarea>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    );
  };
  
  export default Form;