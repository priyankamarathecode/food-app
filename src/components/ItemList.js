import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items = [] }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Get the current quantity of an item in the cart
  const getItemQuantity = (itemId) => {
    const item = cartItems.find((cartItem) => cartItem.card.info.id === itemId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.card.info.id} className="item">
          <div className="item-header">
            {/* Image */}
            <div className="item-image">
              <img
                src={
                  item.card.info.imageId
                    ? CDN_URL + item.card.info.imageId
                    : "placeholder-image-url.png"
                }
                alt={item.card.info.name || "Food Item"}
                className="item-img"
              />
            </div>

            {/* Item details */}
            <div className="item-details">
              <span className="item-name">{item.card.info.name}</span>
              <div className="item-rating">
                <span>
                  Rating: {item.card.info.ratings?.aggregatedRating?.rating}
                </span>
              </div>
              <span className="item-price">
                ₹
                {item.card.info.price / 100
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>

            {/* Quantity Buttons */}
            <div className="item-quantity">
              <button
                className="quantity-btn"
                onClick={() => dispatch(removeItem(item))}
              >
                -
              </button>
              <span className="quantity-count">
                {getItemQuantity(item.card.info.id)}
              </span>
              <button
                className="quantity-btn"
                onClick={() => dispatch(addItem(item))}
              >
                +
              </button>
            </div>
          </div>

          {/* Item description */}
          <p className="item-description">{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
