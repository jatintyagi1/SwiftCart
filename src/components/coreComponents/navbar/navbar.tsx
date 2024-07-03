import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faUser, faStore, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';

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
                        <span className="navbar-user-login-arrow">&#9660;</span>
                    </div>

                    <div className='navbar-cart-container'>
                        <FontAwesomeIcon className='navbar-cart-icon' icon={faShoppingCart} />
                        <p className='navbar-cart-text'>Cart</p>
                    </div>

                    <div className='navbar-seller-container'>
                        <FontAwesomeIcon className='navbar-seller-store-icon' icon={faStore} />
                        <p className='navbar-seller-text'>Became a Seller</p>
                    </div>

                    <div className='navbar-three-dot-container'>
                        <FontAwesomeIcon className='navbar-three-dot' icon={faEllipsisV} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
