const FetchWeatherForm = document.getElementById("locationForm");

FetchWeatherForm.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the form from submitting normally
    getWeather(); // call the function to fetch weather data
});

function getWeather() {

        const Location = document.getElementById("location");

        fetch("/weather?location=" + Location.value)
            .then(response => response.json())
            .then(data => {
                console.log("return the weather report.");
                // deconstruct the object.
                const { location, current } = data;
                console.log("Location: ", location);
                console.log("Current: ", current);
                // display the weather data on the page
            })
            .catch(error => {
                console.error("Error fetching weather data: ", error);
                // display an error message on the page
            });
}