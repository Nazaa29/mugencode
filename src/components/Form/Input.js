const Input = ({ label, type, inputStyle, labelStyle}) => {
    return (
        <div className="mb-4">
            <label className={labelStyle}>{label}</label>
            <input
                className={inputStyle}
                type={type}
            />
        </div>
    );
};

export default Input;