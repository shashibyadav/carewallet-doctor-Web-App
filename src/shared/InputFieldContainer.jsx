import "../styles/shared/input-container.css";

const InputFieldContainer = ({ className = 'input-field-container', children }) => {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    );
};

export default InputFieldContainer;
