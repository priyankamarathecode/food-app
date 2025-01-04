const express = require("express");
const fetch = require("node-fetch");

const app = express();
const PORT = 3001; // You can use any port

app.get("/cors-proxy", async (req, res) => {
  const targetUrl =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.8523973&lng=74.5814773&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  try {
    const response = await fetch(targetUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
