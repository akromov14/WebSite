import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar'
import Header from '../src/components/header/Header';
import Biznes from './components/bizness/Biznes';
import Clients from './components/Clients/Clients';
import About from './components/About/About';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
        <div className="container">
        <Navbar/>
        <Header/>
        <Biznes/>
        <Clients/>
        <About/>
        <Pricing/>
        </div>
    </div>
  );
}

export default App;
