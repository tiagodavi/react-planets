import { BrowserRouter } from 'react-router-dom';
import RoutesComponent from './components/RoutesComponent';
import NavBarComponent from './components/NavBarComponent';
import planets from './data/planets.json';

function App() {
  return (
    <BrowserRouter>
      <RoutesComponent />
      <NavBarComponent planets={planets} />
    </BrowserRouter>
  );
}

export default App;
