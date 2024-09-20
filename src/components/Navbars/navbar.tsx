import '../../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faDownload, faChartLine, faBell, faHeadphones, faSearch, faUser, faStore, faEllipsisV, faUserCircle, faStar, faBoxOpen, faHeart, faGift, faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className='navbar-full-wrapper'>
            {/* Upper Navbar */}
            <div className='navbar-upper-wrapper'>
                {/* Upper Left Navbar */}
                <div className='navbar-upper-left-wrapper'>
                    <div className='navbar-company-name-container'>
                        <p className='navbar-company-name'>swiftcart</p>
                    </div>
                    <div className='navbar-search-item-container'>
                        <div className='navbar-search-input-container'>
                            <FontAwesomeIcon className='navbar-search-icon' icon={faSearch} />
                            <input type='text' className='navbar-search-input' placeholder='Search for Product, Brand and More.'></input>
                        </div>
                    </div>
                </div>

                {/* Upper Right Navbar */}
                <div className='navbar-upper-right-wrapper'>

                    <div className='navbar-user-login-container'>
                        <FontAwesomeIcon className='navbar-user-icon' icon={faUser} />
                        <p className='navbar-user-login-text'>Login</p>
                        <FontAwesomeIcon className="navbar-user-login-arrow" icon={faChevronDown} />
                        <div className="navbar-user-login-dropdown">
                            <div className="navbar-user-login-dropdown-upper-container">
                                <div className='navar-new-customer-container'>
                                    <p className='navbar-dropdown-new-customer-text'>New Customer?</p>
                                </div>
                                <div className='navbar-dropdown-signup-container'>
                                    <p className='navbar-dropdown-signup-text'>Sign Up</p>
                                </div>
                            </div>
                            <div className="navbar-user-login-dropdown-lower-container">
                                <ul className="navbar-user-dropdown-list">
                                    <li><FontAwesomeIcon className='navbar-login-dropdown-icon' icon={faUserCircle} /> My Profile</li>
                                    <li><FontAwesomeIcon className='navbar-login-dropdown-icon' icon={faStar} /> Swiftcart Plus Member</li>
                                    <li><FontAwesomeIcon className='navbar-login-dropdown-icon' icon={faBoxOpen} /> Orders</li>
                                    <li><FontAwesomeIcon className='navbar-login-dropdown-icon' icon={faHeart} /> Wishlist</li>
                                    <li><FontAwesomeIcon className='navbar-login-dropdown-icon' icon={faGift} /> Rewards</li>
                                    <li><FontAwesomeIcon className='navbar-login-dropdown-icon' icon={faEnvelope} /> Gift Cards</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='navbar-cart-container'>
                        <FontAwesomeIcon className='navbar-cart-icon' icon={faShoppingCart} />
                        <p className='navbar-cart-text'>Cart</p>
                    </div>

                    <div className='navbar-seller-container'>
                        <FontAwesomeIcon className='navbar-seller-store-icon' icon={faStore} />
                        <a 
                            href="https://sellerswiftcartcom.vercel.app/" 
                            className='navbar-seller-text'
                            style={{
                                textDecoration: 'none',
                                color: 'inherit'
                            }}    
                        >
                            Become a Seller
                        </a>
                    </div>

                    <div className='navbar-three-dot-container'>
                        <FontAwesomeIcon className='navbar-three-dot' icon={faEllipsisV} />
                        <div className='navbar-three-dot-dropdown'>
                            <ul className='navbar-three-dot-dropdown-list'>
                                <li><FontAwesomeIcon icon={faBell} /> Notification Preference</li>
                                <li><FontAwesomeIcon icon={faHeadphones} /> 24x7 Customer Care</li>
                                <li><FontAwesomeIcon icon={faChartLine} /> Advertise</li>
                                <li><FontAwesomeIcon icon={faDownload} /> Download App</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;