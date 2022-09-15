import PropTypes from 'prop-types';
import Currency from './Currency';

import './style.scss';

const Currencies = ({
  currencies, setCurrency, search, setSearch,
}) => {
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <main className="currencies">
      <input
        type="text"
        className="currencies__search"
        placeholder="Rechercher..."
        value={search}
        onChange={handleChange}
      />

      <ul className="currencies__list">
        {
              currencies.map(
                (currency) => (
                  <Currency
                    key={currency.name}
                    {...currency}
                    setCurrency={setCurrency}
                  />
                ),
              )
            }
      </ul>
    </main>
  );
};

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setCurrency: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Currencies;
