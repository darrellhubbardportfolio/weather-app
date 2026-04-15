require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");

const PKEY = process.env.WEATHER_API_KEY;

// what plan are we on?

// can we upgrade?


// express static files
app.use("/public", express.static(path.join(__dirname, "public")));

// express body parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set view engine
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/", (req, res) => {
    res.render("index");
});

// retrieve weather from this api
app.get("/weather", async (req, res) => {
    const { location } = req.query;
    
    try {
        const response = await axios.get("http://api.weatherapi.com/v1/current.json?key=" + PKEY + "&q=" + location + "&aqi=no");
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching weather data: ", error);
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});