import React, {useState} from 'react';
import './style.css';
import CheckoutForm from '../../checkout-form';
import OrderSummary from '../../order-sumary';

const Checkout = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [paymentMethodSelected, setPaymentMethodSelected] =
    useState(false);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (formSubmitted && paymentMethodSelected) {
      alert('Successful purchase');
    } else {
      alert('Invalid information');
    }
  };
  const handlePaymentMethodChange = (paymentMethod) => {
    setPaymentMethodSelected(!!paymentMethod);
  };
  return (
    <div className='checkout-page'>
      <OrderSummary
        onPaymentMethodChange={handlePaymentMethodChange}
      />
      <CheckoutForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default Checkout;
