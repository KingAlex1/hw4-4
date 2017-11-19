import React, { Component } from "react";
import CardNumberInput from "./CardNumberInput";

class CardNumberHolder extends Component {
  static displayName = "Номер карты";

  state = {
    cardNumber: ""
  };

  handleChange = number => {
    this.setState({ cardNumber: number });
  };

  render() {
    const { cardNumber } = this.state;
    return (
      <CardNumberInput
        onChange={this.handleChange}
        cardNumber={cardNumber}
      />
    );
  }
}

export default CardNumberHolder;
