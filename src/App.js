import logo from './logo.svg';
import './App.css';

import Navigation from './Components/Navigation';
import CrudApp from './Components/CrudApp';

function App() {

  return (
    <div className="App">

        <Navigation/>
        <h1>Ejercicio con React</h1>
        <CrudApp/>
        <hr/>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
