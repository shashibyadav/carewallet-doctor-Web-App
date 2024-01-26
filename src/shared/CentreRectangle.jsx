import "../styles/shared/center-rectangle.css";

const CentreRectangle = ({ children }) => {
    return (
        <div className={'center-rectangle'}>
          {children}
      </div>
    );
  };

export default CentreRectangle;