import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponentClass extends Component {
  static defaultProps = {
    name: '기본 이름',
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        제 이름은 {name}입니다.
        <br />
        children은 {children}입니다.
        <br />
        숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

// MyComponentClass.defaultProps = {
//   name: '엄',
// };

// MyComponentClass.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

export default MyComponentClass;
