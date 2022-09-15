import PropTypes from 'prop-types';

import './style.scss';

const Toggler = ({ open, toggle }) => {
  const handleButtonClick = () => {
    // appel de la fonction toggle() qui modifie le state
    // elle est déclarée dans index.js et passée comme valeur de la props toggle
    // sur l'appel du composant Toggler dans index.js
    toggle();
  };

  return (
    <button
      className={open ? 'toggler toggler--open' : 'toggler'}
      type="button"
      onClick={handleButtonClick}
    >
      =
    </button>
  );
};

Toggler.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Toggler;
