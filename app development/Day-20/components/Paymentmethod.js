import React, { useState } from 'react';
import './Paymentmethod.css';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import { useNavigate } from 'react-router-dom';

const PaymentMethod = () => {
    const nav = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentMode, setPaymentMode] = useState(null);

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handlePaymentModeSelection = (mode) => {
    setPaymentMode(mode);
    if (mode === 'cashOnDelivery') {
      alert('Successfully created appointment. Redirecting to service page.');
      // Uncomment the following line to redirect to the service page
      nav('/services');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic for handling card payment here
    // ...

    console.log('Card payment submitted successfully');
    alert('Otp Sent'); // Display a popup alert
  };

  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <h2>Select Payment Method</h2>
        <div>
          <button onClick={() => handlePaymentModeSelection('cardPayment')}>Card Payment</button>
          <button onClick={() => handlePaymentModeSelection('cashOnDelivery')}>Cash on Board</button>
        </div>
        {paymentMode === 'cardPayment' && (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={cardNumber}
                onChange={handleCardNumberChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={cvv}
                onChange={handleCvvChange}
                required
              />
            </div>
            <button type="submit">Pay</button>
          </form>
        )}
      </div>
      <FooterComponent />
    </div>
  );
};

export default PaymentMethod;
