import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {

  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error))
  }, [])

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Countries Loaded : {countries.length}</h1>
        <Cart cart={cart}></Cart>
        <h4>Country Added:{cart.length}</h4>
        {
          countries.map(country => <Country Country={country} key={country.alpha3Code} handleAddCountry={handleAddCountry}></Country>)
        }

      </header>
    </div>
  );
}

export default App;
