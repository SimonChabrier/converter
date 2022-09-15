/* eslint-disable react/sort-comp */
/* eslint-disable class-methods-use-this */

//* COMPRENDRE LES CYCLES DE VIE
//* https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

// == import NPM
import React from 'react';

// Composants
import BaseAmount from 'src/components/BaseAmount';
import Currencies from 'src/components/Currencies';
import ConvertedAmount from 'src/components/ConvertedAmount';
import Toggler from 'src/components/Toggler';
import currenciesData from 'src/data/currencies';

// == Import
import './styles.scss';

// == Composant

class Converter extends React.Component {
  constructor(props) {
    console.log('Converter : constructor');
    super(props);

    this.state = {
      open: true,
      currentCurrency: 'Brazilian Real',
      baseAmount: 1,
      search: '',
    };

    this.toggle = this.toggle.bind(this);
    this.setCurrency = this.setCurrency.bind(this);
    this.setSearch = this.setSearch.bind(this);
    this.setBaseAmount = this.setBaseAmount.bind(this);
  }

  toggle() {
    console.log('on veut afficher / masquer la zone de devise');
    this.setState({
      open: !this.state.open,
    });
  }

  setCurrency(clickedCurrency) {
    console.log(`Je change currentCurrency dans le state avec ${clickedCurrency}`);
    this.setState({
      currentCurrency: clickedCurrency,
    });
  }

  setSearch(search) {
    this.setState({
      search: search,
    });
  }

  setBaseAmount(newBaseAmount) {
    this.setState({
      baseAmount: Math.max(0, Number(newBaseAmount)),
    });
  }

  getConvertedAmount() {
    const { baseAmount, currentCurrency } = this.state;
    const foundCurrency = currenciesData.find(
      (currency) => currency.name === currentCurrency,
    );

    const { rate } = foundCurrency;
    const convertedAmount = Math.round((baseAmount * rate) * 100) / 100;
    return convertedAmount;
  }

  getFilteredCurrencies() {
    const { search } = this.state;
    const loweredSearch = search.toLowerCase();
    return currenciesData.filter(
      (currency) => currency.name.toLowerCase().includes(loweredSearch),
    );
  }

  pageTitleEffect() {
    const { currentCurrency } = this.state;
    document.title = `Euro  -> ${currentCurrency}`;
  }

  componentDidMount() {
    console.log('converter : componentDidMount');
    this.pageTitleEffect();
    document.addEventListener('keyup', (event) => {
      console.log(`key up : ${event.key} `);
      if (event.key === 'Escape') {
        this.setState({
          open: false,
        });
      }
    });
  }

  componentDidUpdate() {
    this.pageTitleEffect();
  }

  render() {
    console.log('converter : render');
    const {
      open, baseAmount, currentCurrency, search,
    } = this.state;

    const convertedAmount = this.getConvertedAmount();
    const filteredCurrencies = this.getFilteredCurrencies();

    return (
      <div className="converter">
        <BaseAmount
          baseAmount={baseAmount}
          setBaseAmount={this.setBaseAmount}
        />
        <Toggler open={open} toggle={this.toggle} />
        {
          open && (
            <Currencies
              currencies={filteredCurrencies}
              setCurrency={this.setCurrency}
              search={search}
              setSearch={this.setSearch}
            />
          )
        }
        <ConvertedAmount
          convertedAmount={convertedAmount}
          currency={currentCurrency}
        />
      </div>
    );
  }
}

// == Export
export default Converter;
