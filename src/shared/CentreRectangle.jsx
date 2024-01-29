import "../styles/shared/center-rectangle.css";

const CentreRectangle = ({className, children }) => {
    return (
        <div className={`${className}`}>
          {children}
      </div>
    );
  };

export default CentreRectangle;