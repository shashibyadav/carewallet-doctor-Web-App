import "../styles/shared/center-rectangle.css";

const CenterRectangle = ({className, children }) => {
    return (
        <div className={`${className}`}>
          {children}
      </div>
    );
  };

export default CenterRectangle;