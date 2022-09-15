// == Import : npm
import { render } from 'react-dom';

// == Import : local
// Composants
import Converter from 'src/components/Converter';

// == Render
const rootReactElement = <Converter />;
const target = document.getElementById('root');
render(rootReactElement, target);
