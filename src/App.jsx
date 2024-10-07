import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Toaster } from 'react-hot-toast';

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    return (
        <Router>
            <Navbar user={user} />
            <Toaster />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={user ? <Products /> : <Navigate to="/" />} />
                <Route path="/products/:id" element={user ? <ProductDetails /> : <Navigate to="/" />} />
                <Route path="/login" element={user ? <Navigate to="/products" /> : <Login />} />
            </Routes>
        </Router>
    );
}

export default App;
