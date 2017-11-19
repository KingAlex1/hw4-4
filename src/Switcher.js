import React, {Component} from 'react';
import './Switcher.css';

class Switcher extends Component {
  state = { selectedChild: 0 };

  handleChangeChild = e => {
    this.setState({ selectedChild: Number(e.target.getAttribute("data-id"))});
  };

  render() {
    const { children } = this.props;
    const childArray = React.Children.toArray(children);

    const navTemplate = React.Children.map(children, (child, index) => {
      return (
        <li
          className="component-list__name"
          onClick={this.handleChangeChild}
          data-id={index}
        >
          {child.type.displayName || child.type.name}
        </li>
      );
    })

    const paneTemplate = childArray.filter((item,index) => {
      return index === this.state.selectedChild;
    }, this);

    return (
      <div>
        <nav>
          <ul className="component-list">{navTemplate}</ul>
        </nav>
        <hr />
        <div className="component-wrapper">{paneTemplate}</div>
      </div>
    );
  }
}

export default Switcher;