import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://bootcamp-book-shop-server.vercel.app/api/products');
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <div className="product-container">
            {products.map(product => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    );
}

export default Products;
