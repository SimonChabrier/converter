import PropTypes from 'prop-types';

const Currency = ({ name, setCurrency }) => {
  const handleClick = () => {
    setCurrency(name);
  };

  return (
    <li className="currency" onClick={handleClick}>{name}</li>
  );
};

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  setCurrency: PropTypes.func.isRequired,
};

export default Currency;
