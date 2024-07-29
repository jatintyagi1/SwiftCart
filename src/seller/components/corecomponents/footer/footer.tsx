import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css'
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Seller_Footer_1 from '../../../../assets/images/Seller_Footer_1.png'
import Seller_Footer_2 from '../../../../assets/images/Seller_Footer_2.png'

const SellerFooter = () => {
    return (
        <div className='seller-footer-wrapper'>
            <div className='seller-footer-upper-wrapper'>
                <div className='seller-footer-heading-container'>
                    <h1 className='seller-footer-heading-text'>Popular categories to sell across India</h1>
                </div>
                <div className='seller-footer-upper-container'>

                    <div className='seller-footer-upper-first'>
                        <ul className='seller-footer-upper-list-item'>
                            <li>Sell Mobile online</li>
                            <li>Sell Clothes online</li>
                            <li>Sell Saree online</li>
                            <li>Sell Electronics online</li>
                            <li>Sell Women Clothes online</li>
                        </ul>
                    </div>

                    <div className='seller-footer-upper-second'>
                        <ul className='seller-footer-upper-list-item'>
                            <li>Sell Shoes online</li>
                            <li>Sell Jewellery online</li>
                            <li>Sell T-shirts online</li>
                            <li>Sell Furniture online</li>
                            <li>Sell Makeup online</li>
                        </ul>
                    </div>

                    <div className='seller-footer-upper-third'>
                        <ul className='seller-footer-upper-list-item'>
                            <li>Sell Painting online</li>
                            <li>Sell Watch online</li>
                            <li>Sell Books online</li>
                            <li>Sell Home Products online</li>
                            <li>Sell Kurtis online</li>
                        </ul>
                    </div>

                    <div className='seller-footer-upper-four'>
                        <ul className='seller-footer-upper-list-item'>
                            <li>Sell Beauty Products online</li>
                            <li>Sell Toys online</li>
                            <li>Sell Appliance online</li>
                            <li>Sell Shirts online</li>
                            <li>Sell indian Clothes online</li>
                        </ul>
                    </div>

                </div>

                <hr className='seller-footer-separating-line'/>

               {/* upper Lower */}
                <div className='seller-footer-lower-container'>
                    <div className='seller-footer-lower-first'>
                        <h4 className='seller-footer-lower-heading'>Sell Online</h4>
                        <ul className='seller-footer-lower-list-item'>
                            <li>Create Account</li>
                            <li>List Products</li>
                            <li>Storage & Shipping</li>
                            <li>Fees & Commission</li>
                            <li>Help & Supports</li>
                        </ul>
                    </div>

                    <div className='seller-footer-lower-second'>
                        <h4 className='seller-footer-lower-heading'>Grow Your Business</h4>
                        <ul className='seller-footer-lower-list-item'>
                            <li>Insight & Tools</li>
                            <li>Swiftcart Ad</li>
                            <li>Swiftcart Value Service</li>
                            <li>Shopping Festivals</li>
                        </ul>

                    </div>

                    <div className='seller-footer-lower-third'>
                        <h4 className='seller-footer-lower-heading'>Learn More</h4>
                        <ul className='seller-footer-lower-list-item'>
                            <li>FAQs</li>
                            <li>Seller Success Stories</li>
                            <li>Seller Blogs</li>
                        </ul>

                    </div>
                    
                    <div className='seller-footer-lower-four'>
                        <p className='seller-footer-lower-heading'>Download Mobile App</p>
                        <img src={Seller_Footer_1} alt='Play-Store'></img>
                        <img src={Seller_Footer_2} alt='apple-store'></img>
                        <p className='seller-footer-lower-heading'>Stay Connect:</p>
                        <div className='seller-footer-lower-social-icon-container'>
                            <FontAwesomeIcon icon={faFacebook}/>
                            <FontAwesomeIcon icon={faInstagram}/>
                            <FontAwesomeIcon icon={faLinkedinIn}/>
                            <FontAwesomeIcon icon={faYoutube}/>
                            <FontAwesomeIcon icon={faTwitter}/>
                        </div>
                    </div>
                </div>
            </div>




            {/* Lower Footer  */}
            <div className='seller-footer-lower-wrapper'>
                <div className='seller-footer-company-name-container'>
                    <h1>Swiftcart</h1>
                </div>
                <div className='seller-footer-copyright-container'>
                   <FontAwesomeIcon icon={faCopyright}/>
                   <p>2024 swiftcart. All Right Reserved</p>
                </div>
                <div className='seller-footer-terms-condition-container'>
                    <ul className='seller-footer-tem-condition'>
                        <li>Privacy Policy</li>
                        <li>Terms of use</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};
export default SellerFooter;