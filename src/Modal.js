import React, { Component } from "react";
import ReactDOM from "react-dom";

class Modal extends Component {
  render() {
    const { children, onClose } = this.props;

    return ReactDOM.createPortal(
      <div className="modal">
        <div className="modal__fog">
          <div className="modal__body">
            {children}
            <button onClick={onClose}>Закрыть</button>
          </div>
        </div>
      </div>,
      document.querySelector("#portal")
    );
  }
}


export default Modal;
