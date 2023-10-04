import Input from "./Input";
import Button from '../Button';


const Form = () => {
    const inputStyle = 'relative p-15px w-full border relative';
    const labelStyle = 'absolute ml-2 text-neutral-950 text-sm z-10';

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