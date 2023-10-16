import React from 'react';
import './Privacy.css';

import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';


const PrivacyPolicy = () => {
  return (
    <div>

     <HeaderComponent/>
    <div className='privacy-container'>
    <h1 style={{color: "#502f8f"}}>Privacy Policy</h1>
      <p>
        <strong style={{ color: "#502f8f" }}>
          INFORMATION ABOUT OUR ORGANISATION AND WEBSITE
        </strong>
      </p>
      
        Xentury respects your privacy and is committed to protecting it. We
        provide this Privacy Statement to inform you of our Privacy Policy and
        practices and of the choices you can make about the way your information
        is collected online and how that information is used. 
      
    
  
  
      <p>
        <strong style={{ color: "#502f8f" }}>DATA COLLECTION AND USE</strong>
      </p>
      <p>
        When you request information through this site, we may need to know some
        personal information about you. When emailing us, or subscribing for
        free news or information we need your e-mail address, name and other
        limited personal identifiers, typically name, address and contact
        number. If you chose to purchase information, goods, products or
        services, we will usually require some additional limited financial
        details and also you would be bound by the terms &amp; conditions of the
        other third party sites Where you request employment related services or
        products we will usually need limited data about personal identifiers,
        education, employment, family and financial details. Your personal data
        will be processed to provide information, goods, products and services
        you request in the form that you require. If we require sensitive
        personal data then we will ensure that the collection and use is in
        strict accordance with the principles of data protection and data
        privacy of the applicable legislation set out below.
      </p>
      <p>
        We may appoint third party organizations to assist us in providing you
        with the information, goods, products and services you request. In these
        circumstances, we will take steps to ensure that your personal
        information is held in strict accordance with our privacy policy and is
        only used for the purpose of fulfilling your request.
      </p>
   
 
      <p>
        <strong style={{ color: "#502f8f" }}>DATA RETENTION</strong>
      </p>
      <p>
        Data is held for the lifetime your subscription is active for the
        purposes of contacting you effectively after which time it is
        depersonalised and non-identifiable. We do not collect any additional
        information about you other than that outlined above.
      </p>
    
 
      <p>
        <strong style={{ color: "#502f8f" }}>
          ACCESS TO YOUR PERSONAL DATA
        </strong>
      </p>
      <p>
        To enquire about accessing your personal data, or if you have any
        questions relating to Xentury data privacy policy please contact us at
        care@<a href="https://Xentury.in/contact-us/">Xentury.in</a> We will
        provide you with a readable copy of the personal data that we keep about
        you, within 40 days, although we will require proof of your identity
        before disclosing that data. We allow you to challenge the data that we
        hold on you and, where appropriate, you may have the data: erased,
        rectified, amended or completed. We reserve the right to refuse to
        provide our visitors with a copy of their personal data, but will give
        reasons for our refusal. You will be able to challenge our decision to
        refuse to provide you with a copy of your personal data.
        <br />
        At present we do not give visitors to our website the option of using a
        secure transmission method to send us their personal data.
      </p>
      <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
     


    </div>
    <FooterComponent/>
    </div>
  );
};

export default PrivacyPolicy;
