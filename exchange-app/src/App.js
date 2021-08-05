import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Crypto from './components/cryptoEx';
import CurrencyList from './components/CurrencyList';
import CurrencyToCurrency from './components/CurrencyToCurrency';
import Documentation from './components/Documentation';
import ErrorMessage from './components/Error';
import Home from './components/Home';
import Navbar from './components/NavBar';
import SelectCurrency from './components/SelectCurrency';
<link rel="stylesheet" href="index.css"></link>


function App() {
  //Dark mode handler
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="Exchange App">
      <button className="ThemeButton" onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
      <h1>Welcome to the Exchange App</h1>
      {/*Navigation bar and routes for the apps components, if not route is found goes to erro message page*/}
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Currencies' component={CurrencyList} />
        <Route exact path='/crypto' component={Crypto} />
        <Route exact path='/SelectCurrency' component={SelectCurrency} />
        <Route exact path='/CurToCur' component={CurrencyToCurrency} />
        <Route exact path='/Documentation' component={Documentation} />
        <Route component={ErrorMessage} />
      </Switch>
    </div>
  );
};

export default App;

//End of File