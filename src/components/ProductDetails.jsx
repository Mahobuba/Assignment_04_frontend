import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'; // Import the CSS file

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            const response = await fetch(`https://bootcamp-book-shop-server.vercel.app/api/products/${id}`);
            const data = await response.json();
            setProduct(data);
        };

        fetchProductDetails();
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="product-details-container">
            <div className="product-image">
                <img src={product.img_url} alt={product.title} />
            </div>
            <div className="product-info">
                <h1 className="product-title">{product.title}</h1>
                <p className="product-details">{product.details}</p>
                <p className="product-price">Price: ${product.price}</p>
                <p className="product-author">By: {product.author}</p>
                <p className="product-ratings">Ratings: {product.ratings}</p>
            </div>
        </div>
    );
};

export default ProductDetails;

