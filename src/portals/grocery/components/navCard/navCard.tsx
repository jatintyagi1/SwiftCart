import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navCard.css'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';




const Navcard = () => {
    return (
        <div className='navcard-full-wrapper'>
            <div className='navcard-container'>
                <ul className='navcard-list-container'>
                    <li className='grocery-navcard-menu-item'>
                        <span className='grocery-navcard-menu-text'>Staples</span>
                        <FontAwesomeIcon className='grocery-navcard-dropdown-icon' icon={faChevronDown} />
                        <div className='grocery-navcard-dropdown-content'>
                            <ul className='grocery-navcard-dropdown-list'>
                                <li>Dal & Pulses</li>
                                <li>Ghee & Oil</li>
                                <li>Atta & Flours</li>
                                <li>Masala & Spices</li>
                                <li>Rice & Rice Products</li>
                                <li>Dry Fruits, Nuts & Seeds</li>
                                <li>Sugar, Jaggery & Salt</li>
                            </ul>
                        </div>
                    </li>

                    <li className='grocery-navcard-menu-item'>
                        <span className='grocery-navcard-menu-text'>Snacks & Bevrages</span>
                        <FontAwesomeIcon className='grocery-navcard-dropdown-icon' icon={faChevronDown} />
                        <div className='grocery-navcard-dropdown-content'>
                            <ul className='grocery-navcard-dropdown-list'>
                                <li>Biscuits</li>
                                <li>Chips,Namkeen & Snacks</li>
                                <li>Tea</li>
                                <li>Coffee</li>
                                <li>Juice</li>
                                <li>Nutritional Drink Mix</li>
                                <li>Soft Drinks</li>
                                <li>Instant Drink Mixes,Squash & Syrups</li>
                                <li>Water</li>
                            </ul>
                        </div>
                    </li>

                    <li className='grocery-navcard-menu-item'>
                        <span className='grocery-navcard-menu-text'>Packaged Food</span>
                        <FontAwesomeIcon className='grocery-navcard-dropdown-icon' icon={faChevronDown} />
                        <div className='grocery-navcard-dropdown-content'>
                            <ul className='grocery-navcard-dropdown-list'>
                                <li>Breakfast Cereals</li>
                                <li>Noodles & Pasta</li>
                                <li>Ketchup & Spread</li>
                                <li>Chocolates & Sweets</li>
                                <li>Jams & Honey</li>
                                <li>Pickles & Chutney</li>
                                <li>Ready to Cook</li>
                                <li>Cooking Sauces & Vinegar</li>
                                <li>Baking</li>
                            </ul>
                        </div>
                    </li>

                    <li className='grocery-navcard-menu-item'>
                        <span className='grocery-navcard-menu-text'>Personal & Baby Care</span>
                        <FontAwesomeIcon className='grocery-navcard-dropdown-icon' icon={faChevronDown} />
                        <div className='grocery-navcard-dropdown-content'>
                            <ul className='grocery-navcard-dropdown-list'>
                                <li>Soaps & Body Wash</li>
                                <li>Hair Care</li>
                                <li>Oral Care</li>
                                <li>Deos, Perfumes & talc</li>
                                <li>Creams, Lotion, Skin Care</li>
                                <li>Kajal & Makeup</li>
                                <li>Sanitary Needs</li>
                                <li>Wellness & Common Pharma</li>
                                <li>Shaving Needs</li>
                                <li>Diapers & Wipes</li>
                                <li>Baby Food</li>
                                <li>Baby Bath & Skin Care</li>
                            </ul>
                        </div>
                    </li>

                    <li className='grocery-navcard-menu-item'>
                        <span className='grocery-navcard-menu-text'>HouseHold Care</span>
                        <FontAwesomeIcon className='grocery-navcard-dropdown-icon' icon={faChevronDown} />
                        <div className='grocery-navcard-dropdown-content'>
                            <ul className='grocery-navcard-dropdown-list'>
                                <li>Detergent & Laundary</li>
                                <li>Utensils Cleaners</li>
                                <li>Floor & Other Cleaners</li>
                                <li>Repellants & Fresheners</li>
                                <li>Paper & Disposables</li>
                                <li>Basic Electricals</li>
                                <li>Pooja Needs</li>
                                <li>Pet Food</li>
                                <li>Shoe Care</li>
                            </ul>
                        </div>
                    </li>

                    <li className='grocery-navcard-menu-item'>
                        <span className='grocery-navcard-menu-text'>Dairy & Eggs</span>
                        <FontAwesomeIcon className='grocery-navcard-dropdown-icon' icon={faChevronDown} />
                        <div className='grocery-navcard-dropdown-content'>
                            <ul className='grocery-navcard-dropdown-list'>
                                <li>Dairy</li>
                                <li>Eggs</li>
                            </ul>
                        </div>
                    </li>

                    <li className='grocery-navcard-menu-item'>
                        <span className='grocery-navcard-menu-text'>Home & Kitchen</span>
                        <FontAwesomeIcon className='grocery-navcard-dropdown-icon' icon={faChevronDown} />
                        <div className='grocery-navcard-dropdown-content'>
                            <ul className='grocery-navcard-dropdown-list'>
                                <li>Storage & Containers</li>
                                <li>Kitchen Tools</li>
                                <li>Cookware & Non Sticks</li>
                                <li>Dinning & Cutlery</li>
                                <li>Stationary & Household Essentials</li>
                            </ul>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
};

export default Navcard;