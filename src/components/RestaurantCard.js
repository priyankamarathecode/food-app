import { CDN_URL } from "../utils/constants";
import "../assets/css/RestaurantCard.css"; // Link to the CSS file for styling

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="restaurant-info">
        <h3 className="restaurant-name">{name}</h3>
        <p className="restaurant-cuisines">{cuisines.join(", ")}</p>
        <div className="restaurant-details">
          <span className="restaurant-rating">{avgRating}</span>
          <span className="restaurant-cost">{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
