import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <div>
      제 이름은{name}입니다.
      <br />
      children 값은 {children}입니다.
      <br />
      숫자는 {favoriteNumber}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '엄준식',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
