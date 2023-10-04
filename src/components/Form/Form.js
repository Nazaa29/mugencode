import Input from "./Input";
import Button from '../Button';


const Form = () => {
    const inputStyle = 'w-full p-[10px] outline-none border border-gray-custom bg-dark-custom text-white text-[1em]';
    const labelStyle = 'absolute left-1 p-[10px] pointer-events-none duration-300 uppercase';
    const textareaStyle = 'w-full px-3 h-64 py-2 outline-none border border-gray-custom bg-dark-custom text-white text-[1em] resize-none';

    return (    
        <div className="max-w-md mx-auto w-full">
            <form>
                <Input label="Nombre" type="text" inputStyle={inputStyle} labelStyle={labelStyle} />
                <Input label="Email" type="email" inputStyle={inputStyle} labelStyle={labelStyle} />
                <div className="mb-4 relative">
                    <label className="absolute left-1 p-[10px] pointer-events-none duration-300 uppercase">Your Idea</label>
                    <textarea
                        className={textareaStyle}
                        rows="4"
                    ></textarea>
                </div>
                <Button />
            </form>
        </div>
    );
};

export default Form;