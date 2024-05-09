/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "../stayles/productDetailPage.css"


const ProductDetailPage = () => {
  const mainImage = "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087";
  const subImages = ["https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087",
    "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087",
    "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087"];
  const name = "Product Name";
  const price = "50.00";
  const description = "This is a sample product description.";
  return (
    <div className='container'>
      <div className="details-container">
        <div className="details-image">
        <div className="sub-images">
            {subImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${name} sub-image ${index}`}
                className="sub-image"
              />
            ))}
          </div>
          <img src={mainImage} alt={name} className="main-image" />
        </div>
        <div className="productt-details">
          <h2 className="productt-name">{name}</h2>
          <p className="productt-price">${price}</p>
          <p className="productt-description">{description}</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage
