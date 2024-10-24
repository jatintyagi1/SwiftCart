import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/footer.css'
import { faChartLine, faCopyright, faGift, faQuestion, faStore } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Payments from '../../assets/Images/payment-method-c454fb.svg'

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            {/* Upper Footer */}
            <div className='footer-upper-wrapper'>
                {/* left Container  */}
                <div className='footer-upper-left-container'>
                    { /* About  */}
                    <div className='footer-about-wrapper'>
                        <div className='footer-about-container'>
                            <p className='footer-upper-about-text'>ABOUT</p>
                            <ul className='footer-about-list-item'>
                                <li>Contact us</li>
                                <li>About us</li>
                                <li>Careers</li>
                                <li>Swiftcart Stories</li>
                                <li>Press</li>
                                <li>Corporate Information</li>
                            </ul>
                        </div>
                    </div>

                    { /* group company  */}
                    <div className='footer-group-company-wrapper'>
                        <div className='footer-group-company-container'>
                            <p className='footer-upper-group-company-text'>GROUP COMPANIES</p>
                            <ul className='footer-group-company-list-item'>
                                <li>Gym Solution</li>
                                <li>Constructify</li>
                                <li>HealthCare</li>
                            </ul>
                        </div>
                    </div>

                    { /* Help  */}
                    <div className='footer-help-wrapper'>
                        <div className='footer-help-container'>
                            <p className='footer-upper-help-text'>HELP</p>
                            <ul className='footer-help-list-item'>
                                <li>Payments</li>
                                <li>Shipping</li>
                                <li>Cancellation & Return</li>
                                <li>fAQ</li>
                                <li>Report Infringement</li>
                            </ul>
                        </div>
                    </div>

                    { /* Consumer Policy  */}
                    <div className='footer-consumer-policy-wrapper'>
                        <div className='footer-consumer-policy-container'>
                            <p className='footer-upper-consumer-text'>CONSUMER POLICY</p>
                            <ul className='footer-consumer-list-item'>
                                <li></li>
                                <li>Terms of Use</li>
                                <li>Security</li>
                                <li>Privacy</li>
                                <li>Sitemap</li>
                                <li>Grievance Redressal</li>
                                <li>EPR Compliance</li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Right Container */}
                <div className='footer-upper-right-container'>
                    { /* mail  */}
                    <div className='footer-mail-us-wrapper'>
                        <div className='footer-mail-us-container'>
                            <p className='footer-mail-us-text'>Mail Us:</p>
                            <p className='footer-mail-address-text'>Swiftcart private limited,</p>
                            <p className='footer-mail-address-text'>Building Swiftcart, E-commerce</p>
                            <p className='footer-mail-address-text'>Godown, Global Tech Village,</p>
                            <p className='footer-mail-address-text'>Noida,245101,</p>
                            <p className='footer-mail-address-text'>Uttar Pradesh,India</p>
                        </div>
                        <div className='footer-social-icon-container'>
                            <p className='footer-social-text'>Social:</p>
                            <div className='footer-social-media-icon-container'>
                                <FontAwesomeIcon className='footer-social-icon' icon={faFacebook} />
                                <FontAwesomeIcon className='footer-social-icon' icon={faTwitter} />
                                <FontAwesomeIcon className='footer-social-icon' icon={faYoutube} />
                            </div>

                        </div>
                    </div>

                    { /* Address  */}
                    <div className='footer-office-address-wrapper'>
                        <p className='footer-address-text'>Registered office Address:</p>
                        <p className='footer-office-address-text'>Swiftcart private limited,</p>
                        <p className='footer-office-address-text'>Building Swiftcart, E-commerce</p>
                        <p className='footer-office-address-text'>Godown, Global Tech Village,</p>
                        <p className='footer-office-address-text'>Noida,245101,</p>
                        <p className='footer-office-address-text'>Uttar Pradesh,India</p>
                        <p className='footer-office-address-text'>CIN: U51109KA2012PTC066107</p>
                        <p className='footer-office-address-text'>Telephone: 044-45614700 / 044-67415800</p>
                    </div>
                </div>
            </div>

            {/* Lower Footer */}
            <div className='footer-lower-wrapper'>
                <div className='footer-item-container-wrapper'>
                    <div className='footer-lower-left-container'>
                        <div className='footer-seller-container'>
                            <FontAwesomeIcon className='footer-lower-icon' icon={faStore} />
                            <a
                                href="https://sellerswiftcartcom.vercel.app/"
                                className='navbar-seller-text'
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit'
                                }}>
                                Become a Seller</a>
                        </div>
                        <div className='footer-advertise-container'>
                            <FontAwesomeIcon className='footer-lower-icon' icon={faChartLine} />
                            <p>Advertise</p>
                        </div>
                        <div className='footer-gift-container'>
                            <FontAwesomeIcon className='footer-lower-icon' icon={faGift} />
                            <p>Giftcard</p>

                        </div>
                        <div className='footer-help-center-container'>
                            <FontAwesomeIcon className='footer-lower-icon' icon={faQuestion} />
                            <p>Help Center</p>
                        </div>
                    </div>
                    <div className='footer-lower-copyright-container'>
                        <FontAwesomeIcon icon={faCopyright} />
                        <p>{`2020 - ${new Date().getFullYear()} swiftcart.com`}</p>
                    </div>
                    <div className='footer-lower-right-container'>
                        <img src={Payments} alt='payment-icons and images' />
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Footer;