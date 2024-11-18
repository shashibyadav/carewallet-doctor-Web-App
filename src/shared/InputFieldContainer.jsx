import "../styles/shared/input-container.css";

const InputFieldContainer = ({ className = 'input-container', children }) => {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    );
};

export default InputFieldContainer;
