import React from 'react';
import logo from './logo.svg';
import './App.css';
import DatePicker from './datepicker'
import Header from './Header'
import Footer from './Footer'
import data from './data'
import { BrowserRouter, Route,Link } from 'react-router-dom'
import HomeScreen from './HomeScreen';
import ProductScreen from './ProductScreen';
function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <BrowserRouter>
      <div classNameName="App">
        <div className="grid-container">
          <header className="header">
            <div className="brand">
              <button onClick={openMenu}>
                &#9776;
        </button>
             <Link to='/'>amazona</Link>
            </div>
            <div className="header-links">
              <a href="cart.html">Cart</a>
              <a href="signin.html">Sign In</a>
            </div>
          </header>
          <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
              <li>
                <a href="index.html">Pants</a>
              </li>

              <li>
                <a href="index.html">Shirts</a>
              </li>

            </ul>
          </aside>
          <main className="main">
            <div className="content">
              <Route path='/products/:id' component={ProductScreen} exact />
              <Route path='/' component={HomeScreen} exact />

            </div>

          </main>
          <footer className="footer">
            All right reserved.
    </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
