import img from '../images/CareWalletLogo.png';

const CentreRectangle2 = ({ children }) => {
    return (
      <div style={{textAlign:'center'}}>
        <div style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          width: '90%',
          height: '80%',
          background: 'rgba(217, 217, 217, 0)',
          borderRadius: '42px',
          border: '3px white solid',
          color: 'white',
          backgroundColor:'#1C1C1D'
        }}>
          {children}
      </div>
      <img src={img} alt="Care Wallet Logo" style={{ height:'10%',width:'10%',position:'absolute',right:'0px',bottom:'0px'}}/>
      </div>
    );
  };

export default CentreRectangle2;