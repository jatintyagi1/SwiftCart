import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './navbar.css'; 

const Navbar = () => {
    return (
        <div className="seller-navbar-wrapper">
            {/* Company Name Container */}
            <div className="seller-navbar-company-name-container">
                <p className='seller-navbar-company-name'>SwiftCart</p>
            </div>

            {/* Navigation Menu Container */}
            <div className="seller-navbar-nav-menu-list-container">
                <ul className='seller-navbar-nav-menu-list'>
                    {/* Sell Online Dropdown */}
                    <li className="seller-menu-item">
                        <span className="seller-navbar-menu-text">Sell Online</span>
                        <FontAwesomeIcon icon={faChevronDown} className="seller-navbar-menu-icon" />
                        <div className="seller-navbar-dropdown-content">
                            <ul className='seller-nav-menu-list'>
                                <li>Create Account</li>
                                <li>List Product</li>
                                <li>Storage & Shipping</li>
                                <li>Receive payments</li>
                                <li>Grow Faster</li>
                                <li>Seller App</li>
                                <li>Help & Supports</li>
                            </ul>
                        </div>
                    </li>
                    {/* Fees and Commission Dropdown */}
                    <li className="seller-menu-item">
                        <span className="seller-navbar-menu-text">Fees and Commission</span>
                        <FontAwesomeIcon icon={faChevronDown} className="seller-navbar-menu-icon" />
                        <div className="seller-navbar-dropdown-content">
                            <ul className='seller-nav-menu-list'>
                                <li>Payment Cycle</li>
                                <li>Fee Type</li>
                                <li>Calculate Gross Margin</li>
                            </ul>
                        </div>
                    </li>
                    {/* Grow Dropdown */}
                    <li className="seller-menu-item">
                        <span className="seller-navbar-menu-text">Grow</span>
                        <FontAwesomeIcon icon={faChevronDown} className="seller-navbar-menu-icon" />
                        <div className="seller-navbar-dropdown-content">
                            <ul className='seller-nav-menu-list'>
                                <li>SWassured Batch</li>
                                <li>Insights & Tools</li>
                                <li>Flipkart Ads</li>
                                <li>Flipkart Value Service</li>
                                <li>Shopping Festival</li>
                                <li>Service Partners</li>
                            </ul>
                        </div>
                    </li>
                    {/* Learn Dropdown */}
                    <li className="seller-menu-item">
                        <span className="seller-navbar-menu-text">Learn</span>
                        <FontAwesomeIcon icon={faChevronDown} className="seller-navbar-menu-icon" />
                        <div className="seller-navbar-dropdown-content">
                            <ul className='seller-nav-menu-list'>
                                <li>FAQs</li>
                                <li>Seller Success Stories</li>
                                <li>Seller Blogs</li>
                            </ul>
                        </div>
                    </li>
                    {/* Shopsy Menu Item */}
                    <li className="seller-navbar-menu-text">Shopsy</li>
                </ul>
            </div>

            {/* Login and Start Selling Buttons */}
            <div className="seller-navbar-login-container">
                <div className='seller-navbar-login'>
                    <p className='seller-navbar-login-text'>Login</p>
                </div>
                <div className='seller-navbar-sell'>
                    <p className='seller-navbar-start-selling-text'>Start Selling</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
