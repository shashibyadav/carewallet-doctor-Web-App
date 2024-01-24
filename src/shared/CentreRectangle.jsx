import img from '../images/CareWalletLogo.png';

const CentreRectangle = ({ children }) => {
    return (
      <div style={{textAlign:'center'}}>
      <img src={img} alt="Care Wallet Logo" style={{margin:'20px'}}/>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '40%',
          height: '60%',
          background: 'rgba(217, 217, 217, 0)',
          borderRadius: '42px',
          border: '3px white solid',
          color: 'white',
        }}>
          {children}
      </div>
      </div>
    );
  };

export default CentreRectangle;