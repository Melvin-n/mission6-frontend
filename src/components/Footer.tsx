import React from 'react'
import '../styles/footer.css'

const Footer: React.FC = () => {
  return (
    <div id='footer-container'>
        <div id='footer-hero'>
            <div id='signup-box'>
                <h3>Why don't you let us do the hardwork?</h3>
                <p id='for-only-text'>For only</p>
                <span><h4 id='price-off-signup-box'>$199</h4><p>one off</p></span>

                <p id='signup-box-info'>One of our highly trained team members will work hard to find you the perfect property so that you don’t have to.</p>
                <h4 id='signup-box-features-text'>Features</h4>
                <ul id='signup-box-features'>
                    <li className='signup-box-feature-item'>Create your renter profile</li>
                    <li className='signup-box-feature-item'>Find you the property that meeds your needs</li>
                    <li className='signup-box-feature-item'>Book and assist</li>
                    <li className='signup-box-feature-item'>Guide you with your application</li>
                </ul>
                <button id='signup-footer-button'>Sign up now!</button>
            </div>
            <div id='footer-hero-contact-info'>
                <img id='footer-hero-image' src='./images/Search/Illustration - pavan 689.png' alt='girl-laptop' />
                <ul id='footer-hero-contact-details-list'>
                    <li className='footer-hero-contact-item'>
                        <img 
                        className='footer-hero-contact-item-icon'
                        src='./images/Search/icon/outlined/other/mail/mail.png'
                        alt='mail-icon'
                        />

                        <p className='footer-hero-contact-item-text'>info@aucklandprop.co.nz</p>
                    </li>
                    <li className='footer-hero-contact-item'>
                        <img 
                        className='footer-hero-contact-item-icon'
                        src='./images/Search/icon/outlined/other/phone/phone.png'
                        alt='phone-icon'
                        />

                        <p className='footer-hero-contact-item-text'>(09) 262 0561</p>
                    </li>
                    <li className='footer-hero-contact-item'>
                        <img 
                        className='footer-hero-contact-item-icon'
                        src='./images/Search/icon/outlined/other/location/map pin.png'
                        alt='location-icon'
                        />

                        <p className='footer-hero-contact-item-text'>1/63 Corinthian Drive, Albany, Auckland 0632</p>
                    </li>
                </ul>
            </div>
        </div>
        <div id='footer-bottom'>
            <ul id='footer-bottom-list'>
                <li className='footer-bottom-item'>Privacy policy</li>
                <li className='footer-bottom-item'>Terms of service</li>
                <li className='footer-bottom-item'>Legal</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
