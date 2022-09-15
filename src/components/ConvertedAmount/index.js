import './style.scss';

import PropTypes from 'prop-types';

const ConvertedAmount = ({ convertedAmount, currency }) => (
  <footer className="converted-amount">
    <h2 className="converted-amount__amount">{convertedAmount}</h2>
    <h3 className="converted-amount__currency">{currency}</h3>
  </footer>
);

ConvertedAmount.propTypes = {
  convertedAmount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default ConvertedAmount;
