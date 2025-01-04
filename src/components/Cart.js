import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import "../assets/css/cart.css";
import { clearCart } from "../utils/cartSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../assets/css/common.css";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const navigate = useNavigate();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const itemTotal = cartItems.reduce((total, item) => {
    const itemPrice = item.card.info.defaultPrice
      ? item.card.info.defaultPrice
      : item.card.info.price || 0;
    return total + (itemPrice / 100) * item.quantity;
  }, 0);

  const deliveryPartnerFee = cartItems.length > 0 ? 16 : 0;
  const gstCharges = (itemTotal * 0.18).toFixed(2);
  const totalPayable = (
    itemTotal +
    deliveryPartnerFee +
    parseFloat(gstCharges)
  ).toFixed(2);

  const handlePayment = () => {
    const messages = ["Thank you for your order! Your payment was successful."];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setPaymentSuccess(randomMessage);

    dispatch(clearCart());

    setTimeout(() => {
      navigate("/"); // Navigate to the homepage or any other route
    }, 3000); // Adjust delay as needed
  };

  return (
    <div className="cart-page">
      {/* Left Section */}
      <div className="cart-left">
        <div className="account-section">
          <h2>Account</h2>
          <p>To place your order, log in or sign up.</p>
          <div className="account-buttons">
            <Link to="/login" className="action-btn">
              LOG IN
            </Link>
          </div>
        </div>
        <div className="delivery-section">
          <h3>Delivery Address</h3>
          <textarea
            placeholder="Enter your delivery address here"
            className="address-input"
            required
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="cart-right">
        <div className="cart-items">
          <button className="clear-cart-btn" onClick={handleClearCart}>
            Clear Cart
          </button>
          <h2>Order Summary</h2>
        </div>
        <div className="order-summary">
          <ItemList items={cartItems} />
          {cartItems.length === 0 ? (
            <p>No items in the cart. Add items to see the order summary!</p>
          ) : (
            <div className="bill-details">
              <h3>Bill Details</h3>
              <p>Item Total: ₹{itemTotal.toFixed(2)}</p>
              <p>Delivery Partner Fee: ₹{deliveryPartnerFee}</p>
              <p>GST and Charges: ₹{gstCharges}</p>
              <h4>Total Payable: ₹{totalPayable}</h4>
            </div>
          )}
          {paymentSuccess ? (
            <div className="payment-success">
              <h2>Payment Successful!</h2>
              <p>{paymentSuccess}</p>
            </div>
          ) : (
            <button onClick={handlePayment} className="pay-btn">
              Pay
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
