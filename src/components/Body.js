import { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import "../assets/css/body.css";
import "../assets/css/common.css";

import HeroSection from "./HeroSection";
import { FaShippingFast, FaUtensils, FaWallet } from "react-icons/fa";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const { loggedInUser, setUserName } = useContext(UserContext);
  const [loading, setLoading] = useState(true); // State to track loading

  // console.log("list of restuarntants", setListOfRestaurants);

  const [searchText, setSearchText] = useState("");

  // * Whenever a state variable updates or changes, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true); // Set loading to true before starting API call

      // Use CORS proxy to avoid CORS errors
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const targetUrl =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.8523973&lng=74.5814773&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

      const response = await fetch(proxyUrl + targetUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(
          `HTTP Error: ${response.status} ${response.statusText}`
        );
      }

      const json = await response.json();

      // Set the restaurants in state
      setListOfRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      setFilteredRestaurant(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      console.log(json); // Optional: Log the response for debugging
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // In case of error, set loading to false
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Something went wrong !.. Please Check Internet Connection !!</h1>
    );

  return loading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <br />
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search a restaurant you want..."
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );

            // setListOfRestaurants(filteredList);
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <HeroSection />
        {/* Features Section */}
        <div className="features-section">
          <div className="features-container">
            <div className="feature-card">
              <div className="feature-icon">
                <FaShippingFast />
              </div>
              <h3>Fast Delivery</h3>
              <p>Hot and fresh food at your doorstep.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaUtensils />
              </div>
              <h3>Wide Variety</h3>
              <p>Explore dishes from top restaurants.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaWallet />
              </div>
              <h3>Easy Payments</h3>
              <p>Quick and secure payment options.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="res-container" id="res-container">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}
        {filteredRestaurant.length === 0 ? (
          <h2 className="no-records">No records found</h2>
        ) : (
          filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
