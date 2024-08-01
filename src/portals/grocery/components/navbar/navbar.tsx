import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.css'
import { faChevronDown, faMapMarkedAlt, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className='grocery-navbar-wrapper'>
            <div className='grocery-navbar-left-container'>
                <div className='grocery-navbar-heading-container'>
                    <h1>Grocery</h1>
                </div>

                <div className='grocery-navbar-search-container'>
                    <input
                        type='text'
                        placeholder='search grocery products'
                        className='grocery-navbar-search-input'
                    />
                    <FontAwesomeIcon className='grocery-navbar-search-icon' icon={faSearch} />
                </div>
            </div>

            <div className='grocery-navbar-right-container'>

                <div className='grocery-navbar-location-container'>
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                    <h4>Delivering to 245206</h4>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>

                <div className='grocery-navbar-login-container'>
                    <button className='grocery-navbar-login-button'>Login</button>
                </div>

                <div className='grocery-navbar-more-container'>
                    <p>More</p>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>

                <div className='grocery-navbar-cart-container'>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <p>Cart</p>
                </div>

               
                    <div className="grocery-navbar-company-container">
                        <p className="grocery-navbar-company-name">SwiftCart</p>
                    </div>
                

            </div>
        </div>
    )
};
export default Navbar;