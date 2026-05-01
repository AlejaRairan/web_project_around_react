import close from "../../../../images/closeIcon.svg";

export default function Popup(props) {
  //los hijos son el contenido de la ventana emergente
  const { title, children, onClose, isOpen } = props;

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__content">
        <button
          aria-label="Close modal"
          className="popup__close-button"
          type="button"
          onClick={onClose}
        >
          <img src={close} alt="Close" className="popup__close-icon" />
        </button>
        <h3 className="popup__title">{title}</h3>
        {children}
        
      </div>
      
    </div>
  );
}