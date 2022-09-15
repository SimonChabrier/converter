import PropTypes from 'prop-types';

import './style.scss';

const BaseAmount = ({ baseAmount, setBaseAmount }) => {
  function handleChange(event) {
    setBaseAmount(event.target.value);
  }

  return (
    <header className="base-amount">
      <h1 className="base-amount__title">Converter</h1>
      <h2 className="base-amount__amount">
        <input
          type="number"
          value={baseAmount}
          className="base-amount__value"
          onChange={handleChange}
        />
        {baseAmount >= 2 ? 'euros' : 'euro'}
      </h2>
    </header>
  );
};

BaseAmount.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  setBaseAmount: PropTypes.func.isRequired,
};

export default BaseAmount;
