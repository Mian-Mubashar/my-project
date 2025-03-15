import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10 my-80">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

                <div>
                    <h2 className="text-lg font-semibold mb-4">About Us</h2>
                    <p className="text-sm">
                        We are a company dedicated to delivering high-quality products and services.
                        Our mission is to enhance our customers' lives through innovative solutions.
                    </p>
                </div>


                <div>
                    <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="/" className="hover:text-gray-400">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-gray-400">About Us</a>
                        </li>
                        <li>
                            <a href="/services" className="hover:text-gray-400">Services</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-gray-400">Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                    <ul className="space-y-2">
                        <li>Email: <a href="mailto:support@example.com" className="hover:text-gray-400">support@example.com</a></li>
                        <li>Phone: <a href="tel:+123456789" className="hover:text-gray-400">+123 456 789</a></li>
                        <li>Address: 123 Street, City, Country</li>
                    </ul>


                    <div className="mt-4 flex space-x-4">
                        <a href="#" className="hover:text-gray-400">
                            <i className="fab fa-facebook-f"></i> Facebook
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <i className="fab fa-twitter"></i> Twitter
                        </a>
                        <a href="#" className="hover:text-gray-400">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
