import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  // const { resData } = props;
  // console.log("props val:---" + props);
  const {
    // cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  const imagepath =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        // src={CDN_URL + cloudinaryImageId}

        src={imagepath + cloudinaryImageId}
      />

      <h3>{name}</h3>
      {/* <h4>{cuisines.join(", ")}</h4> */}
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
