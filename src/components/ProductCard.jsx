// ProductCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./ProductCard.css";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/products/${product._id}`);
    };

    return (
        <div className="product-card">
            <img 
                style={{ height: 150, width: 300 }} 
                src={product.img_url} 
                alt={product.title} 
                className="product-image" 
            />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-author">By: {product.author}</p>
            <p className="product-price">${product.price}</p>
            <p className="product-rating">Rating: {product.ratings} ⭐</p>
            <button className="view-details-button" onClick={handleViewDetails}>
                View Details
            </button>
        </div>
    );
}

export default ProductCard;
