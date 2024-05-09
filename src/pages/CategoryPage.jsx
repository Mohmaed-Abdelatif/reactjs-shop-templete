import React from 'react'
import '../stayles/categoryPage.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import product1 from "../assets/product1.jpg"
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const CategoryPage = () => {
  const { cat } = useParams();
  const [category, setCategory] = useState("all")
  useEffect(() => {
    if (cat) {
      setCategory(cat);
    } else {
      setCategory("all")
    }
  }, [cat]);

  return (
    <section className='container'>
      <div className='categorypage-container'>
        <h1 >{category}</h1>
        <div className='products-container'>
          <Link to="/details/df">
            <div class="product-card">
              <img class="product-image" src={product1} alt="Gray Sweater" />
              <div class="add-to-cart-icon"><CiShoppingCart /></div>
              <div class="product-info">
                <p class="product-name">Gray Sweater</p>
                <p class="product-price">$50.00</p>
              </div>
            </div>
            </Link>
          <Link to="/details/df">
            <div class="product-card">
              <img class="product-image" src={product1} alt="Gray Sweater" />
              <div class="add-to-cart-icon"><CiShoppingCart /></div>
              <div class="product-info">
                <p class="product-name">Gray Sweater</p>
                <p class="product-price">$50.00</p>
              </div>
            </div>
            </Link>
          <Link to="/details/df">
            <div class="product-card">
              <img class="product-image" src={product1} alt="Gray Sweater" />
              <div class="add-to-cart-icon"><CiShoppingCart /></div>
              <div class="product-info">
                <p class="product-name">Gray Sweater</p>
                <p class="product-price">$50.00</p>
              </div>
            </div>
            </Link>
          <Link to="/details/df">
            <div class="product-card">
              <img class="product-image" src={product1} alt="Gray Sweater" />
              <div class="add-to-cart-icon"><CiShoppingCart /></div>
              <div class="product-info">
                <p class="product-name">Gray Sweater</p>
                <p class="product-price">$50.00</p>
              </div>
            </div>
            </Link>
          <Link to="/details/df">
            <div class="product-card">
              <img class="product-image" src={product1} alt="Gray Sweater" />
              <div class="add-to-cart-icon"><CiShoppingCart /></div>
              <div class="product-info">
                <p class="product-name">Gray Sweater</p>
                <p class="product-price">$50.00</p>
              </div>
            </div>
            </Link>
          <Link to="/details/df">
            <div class="product-card">
              <img class="product-image" src={product1} alt="Gray Sweater" />
              <div class="add-to-cart-icon"><CiShoppingCart /></div>
              <div class="product-info">
                <p class="product-name">Gray Sweater</p>
                <p class="product-price">$50.00</p>
              </div>
            </div>
            </Link>
        </div>
      </div>
    </section>
  )
}

export default CategoryPage