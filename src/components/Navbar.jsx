import React from 'react';
import "../stayles/navbar.css";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import product1 from "../assets/product1.jpg"


const Dropdown = () => {
  return (
    <div className="dropdown-menu">
      <ul>
        <li>
          <div className="dropdown-item">
            <img src={product1} alt="Product 1" className="dropdown-item-image" />
            <div>
              <div className="dropdown-item-info">
                <h3 className="dropdown-item-title">Product1</h3>
                <p className="dropdown-item-price">$100.00</p>
              </div>
              <div className="product-quantity">
                <span className="quantity">1</span>
                <div className='control'>
                  <button className="increment-btn">+</button>
                  <button className="decrement-btn">-</button>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown-item">
            <img src={product1} alt="Product 1" className="dropdown-item-image" />
            <div>
              <div className="dropdown-item-info">
                <h3 className="dropdown-item-title">Product1</h3>
                <p className="dropdown-item-price">$100.00</p>
              </div>
              <div className="product-quantity">
                <span className="quantity">1</span>
                <div className='control'>
                  <button className="increment-btn">+</button>
                  <button className="decrement-btn">-</button>
                </div>
              </div>
            </div>
          </div>
        </li>
        <div>
          <div className='total-pricef'>
            <h4>Total:</h4>
            <h4>200$</h4>
          </div>
          <div className='batton'>
            <div className='btn'>Place Order</div>
          </div>

        </div>
      </ul>
    </div>
  )
}

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className='navbar container'>
      <ul>
        <li><NavLink exact to="/" activeClassName="isActive-nav">All</NavLink></li>
        <li><NavLink exact to="/category/clothes" activeClassName="isActive-nav">Clothes</NavLink></li>
        <li><NavLink exact to="/category/tech" activeClassName="isActive-nav">Tech</NavLink></li>
      </ul>

      <div className="navbar-cart" >
        <div className='icon' onClick={toggleDropdown}>
          <CiShoppingCart />
        </div>
        {dropdownVisible && <Dropdown />}
      </div>
    </nav>
  )
}

export default Navbar;
