import React,{Component} from 'react';
import Modal from "./Modal";

import "./ModalButton.css"

class ModalButton extends Component {
  static displayName = "Модальное окно";
  
    state = {
      isModalShow: false
    };
  
    hideModal = () => {
      this.setState({ isModalShow: false });
    };
  
    showModal = () => {
      this.setState({ isModalShow: true });
    };
  
    render() {
      const { isModalShow } = this.state;
  
      return (
        <div>
          <button onClick={this.showModal}>Модальное окно</button>
          {!isModalShow || (
            <Modal onClose={this.hideModal}>
              <h1>Модальное окно!</h1>
            </Modal>
          )}
        </div>  
      );
    }
  }

export default ModalButton;
