import React, { Component } from "react";
import PropTypes from "prop-types";

class CardNumberInput extends Component {
  static propTypes = {
    cardNumber: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    cardNumber: ""
  };

  constructor(props) {
    super(props);
    this.state = { number: this.format(props.cardNumber) };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      number: this.format(nextProps.cardNumber)
    });
  }

  format = unformatNumber => {
    let formattedNumber = "";
    if (unformatNumber) {
      const cardNumberSections = unformatNumber
        .toString()
        .substring(0, 19)
        .match(/\d{1,4}/g);
      if (cardNumberSections) {
        formattedNumber = cardNumberSections.join(" ");
      }
    }
    return formattedNumber;
  };

  normalize = formatedNumber => {
    const { number } = this.state;
    let formattedNumber = formatedNumber || number || "";
    const unformatNumber = formattedNumber.replace(/\s/g,"");
    return unformatNumber;
  };

  handleChange = e => {
    this.props.onChange(this.normalize(e.target.value));
  };

  render() {
    const { number } = this.state;

    return (
      <input value={number} onChange={this.handleChange} />
    );
  }
}

export default CardNumberInput;
