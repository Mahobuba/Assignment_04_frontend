import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    
    const handleEmailPasswordLogin = async () => {
        try {
            if (isRegistering) {
                await createUserWithEmailAndPassword(auth, email, password);
                toast.success('Registration successful! Redirecting to Products...');
            } else {
                await signInWithEmailAndPassword(auth, email, password);
                toast.success('Login successful! Redirecting to Products...');
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            toast.success('Login successful! Redirecting to Products...');
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleGithubLogin = async () => {
        const provider = new GithubAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            toast.success('Login successful! Redirecting to Products...');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="login-container">
            <h2>{isRegistering ? 'Register' : 'Login'}</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleEmailPasswordLogin} className="bg-blue-600">
                {isRegistering ? 'Register' : 'Login'}
            </button>
            <button onClick={handleGoogleLogin} className="bg-red-600">
                Login with Google
            </button>
            <button onClick={handleGithubLogin} className="bg-black">
                Login with GitHub
            </button>
            <button onClick={() => setIsRegistering(!isRegistering)} className="text-blue-600">
                {isRegistering ? 'Already have an account? Login' : 'Create an account'}
            </button>
        </div>
    );
};

export default Login;