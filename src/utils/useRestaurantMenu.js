import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Use CORS proxy to avoid CORS error
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const targetUrl = MENU_API + resId;

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
      setResInfo(json.data);

      // Optional: Log the response for debugging
      console.log("All Full Menu:=", json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
