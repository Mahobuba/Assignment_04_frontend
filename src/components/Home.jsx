import React from 'react';
import "./Home.css";

const Home = () => {
    return (
        <div className="home-container">
            {/* Banner Section */}
            <section className="banner">
                <h1>Welcome to the Bootcamp Book Shop!</h1>
            </section>

            {/* How It Works Section */}
            <section className="how-it-works">
                <h2>How It Works</h2>
                <p>Use our platform to browse and purchase various courses. Add courses to your wishlist or cart, and explore detailed course information.</p>
            </section>

            {/* Image Section */}
            <section className="image-section">
                <h2>Our Featured Courses</h2>
                <div className="image-gallery">
                    <img src="https://live.staticflickr.com/65535/52413593240_e00326e727_o.png" alt="Product 1" />
                    <img src="https://live.staticflickr.com/65535/52412638962_12e932256a_o.png" alt="Product 2" />
                    <img src="	https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png" alt="Product 3" />
                </div>
            </section>

            {/* Contact Us Section */}
            <section className="contact-us">
                <h2>Contact Us</h2>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message"></textarea>

                    <button type="submit">Submit</button>
                </form>
            </section>

            {/* About Us Section */}
            <section className="about-us">
                <h2>About Us</h2>
                <img style={{ height: 50, width: 50 }}  src="https://scrimba.com/avatars/kevin-powell/256&quot" alt="Owner" className="owner-img" />
                <p>Hi, I’m John Doe, the owner of Bootcamp Book Shop. Our goal is to provide high-quality educational courses for everyone!</p>
            </section>

            {/* Footer Section */}
            <footer className="footer">
                <p>123 Bootcamp Street, Learn City, Code World</p>
                <p>Contact: info@bootcampbookshop.com</p>
                <div className="social-links">
                    <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
                </div>
            </footer>
        </div>
    );
}

export default Home;

