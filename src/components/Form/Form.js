import Input from "./Input";
import Button from '../Button';


const Form = () => {
    const inputStyle = 'w-full p-[10px] outline-none border border-gray-custom bg-dark-custom text-white text-[1em]';
    const labelStyle = 'absolute left-1 p-[10px] pointer-events-none text-white uppercase';

    return (    
        <div className="max-w-md mx-auto w-full">
            <form>
                <Input label="Nombre" type="text" inputStyle={inputStyle} labelStyle={labelStyle}/>
                <Input label="Email" type="email" inputStyle={inputStyle} labelStyle={labelStyle}/>
                <div className="mb-4 ">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Idea</label>
                    <textarea
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Escriba su idea aquí..."
                        rows="4"
                    ></textarea>
                </div>
                <Button />
            </form>
        </div>
    );
};

export default Form;