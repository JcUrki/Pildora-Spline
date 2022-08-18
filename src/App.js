import React, { Fragment } from 'react' 
import NavBar from './components/NavBar.jsx' 
import Router from './router/Router';
import Footer from './components/Footer';
import './App.css'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <NavBar/>
        <Router/>
        <Footer/>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
