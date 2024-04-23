import "../../styles/shared/modal.css";

const Modal = ({ onClose, title, children, footer, customClass }) => {
  return (
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <div className={`modal ${customClass}`}>
        <div className="modal-content">
          <div className="modal-header">
            {title && <h2>{title}</h2>}
            <button className="modal__close-btn" onClick={onClose}>
              X
            </button>
          </div>
          <div className="modal-body">{children}</div>
          {footer && <div className="modal-footer">{footer}</div>}
        </div>
      </div>
    </>
  );
};

export default Modal;
