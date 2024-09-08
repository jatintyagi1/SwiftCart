import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import './navcard.css'
import '../../styles/navCard.css';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navcard = () => {
    return (
        <div className="navcard-wrapper">
            <div className="navcard-item-container-wrapper">
                <ul className="navcard-items-list">
                   <li className='navcard-menu-text'>Grocery</li>
                   <li className='navcard-menu-text'>Mobile</li>

                    <li className='navcard-menu-item'>
                        <span className='navcard-menu-text'>Fashion</span>
                        <FontAwesomeIcon className='navcard-dropdown-icon' icon={faChevronDown} />
                        <div className='navcard-dropdown-content'>
                            <ul className='navcard-dropdown-list'>
                                <li>Men's Top Wear</li>
                                <li>Men's Bottom Wear</li>
                                <li>Women Ethnic</li>
                                <li>Men Footwear</li>
                                <li>Women Footwear</li>
                                <li>Watch and Accessories</li>
                                <li>Women Western</li>
                                <li>Bags, Suitcase & Luggage</li>
                                <li>Kids</li>
                                <li>Essentials</li>
                                <li>Winter</li>
                            </ul>
                        </div>
                    </li>
                    
                    <li className='navcard-menu-item'>
                        <span className='navcard-menu-text'>Electronics</span>
                        <FontAwesomeIcon className='navcard-dropdown-icon' icon={faChevronDown} />
                        <div className='navcard-dropdown-content'>
                            <ul className='navcard-dropdown-list'>
                                <li>Audio</li>
                                <li>Electronics GST Store</li>
                                <li>Camera & Accessories</li>
                                <li>Computer Peripherals</li>
                                <li>Gaming</li>
                                <li>Health & Personal Care</li>
                                <li>Laptop Accessories</li>
                                <li>Laptop and Desktop</li>
                                <li>Mobile Accessory</li>
                                <li>Powerbank</li>
                                <li>Smart Home automation</li>
                                <li>Smart Wearable</li>
                            </ul>
                        </div>
                    </li>

                    {/* Home & Furniture */}
                    <li className='navcard-menu-item'>
                        <span className='navcard-menu-text'>Home & Furniture</span>
                        <FontAwesomeIcon className='navcard-dropdown-icon' icon={faChevronDown} />
                        <div className='navcard-dropdown-content'>
                            <ul className='navcard-dropdown-list'>
                                <li>Home Furnishing</li>
                                <li>Furniture</li>
                                <li>Living Room Furniture</li>
                                <li>Kitchen & Dining</li>
                                <li>Bedroom Furniture</li>
                                <li>Space Saving Furniture</li>
                                <li>Home Decor</li>
                                <li>Tools & Utility</li>
                                <li>Work Space Furniture</li>
                                <li>Kids Furniture</li>
                                <li>Lightings & Electrical</li>
                                <li>Cleaning & Bath</li>
                            </ul>
                        </div>
                    </li>


                   <li className='navcard-menu-text'>Appliances</li>
                   <li className='navcard-menu-text'>Travel</li>

                    {/* Beauty */}
                    <li className='navcard-menu-item'>
                        <span className='navcard-menu-text'>Toy & More</span>
                        <FontAwesomeIcon className='navcard-dropdown-icon' icon={faChevronDown} />
                        <div className='navcard-dropdown-content'>
                            <ul className='navcard-dropdown-list'>
                                <li>Beauty & Personal care</li>
                                <li>Men's Grooming</li>
                                <li>Food & Drinks</li>
                                <li>Nutrition & Health Care</li>
                                <li>baby Care</li>
                                <li>Toys & School Supplies</li>
                                <li>Sports & Fitness</li>
                                <li>Books</li>
                                <li>Musics</li>
                                <li>Stationary & Office Supplies</li>
                                <li>Auto Accessories</li>
                                <li>Safety & Hygiene Essential</li>
                            </ul>
                        </div>
                    </li>

               
                   {/* Vehicle */}
                    <li className='navcard-menu-item'>
                        <span className='navcard-menu-text'>Two Wheelers</span>
                        <FontAwesomeIcon className='navcard-dropdown-icon' icon={faChevronDown} />
                        <div className='navcard-dropdown-content'>
                            <ul className='navcard-dropdown-list'>
                                <li>Petrol Vehicle</li>
                                <li>Electric Vehicle</li>
                            </ul>
                        </div>
                    </li> 
                </ul>                
            </div>
        </div>
    )
}
export default Navcard;