import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Weather from "./Components/Weather";
import LocationSelect from "./Components/LocationSelect/LocationSelect";
import FiveDay from "./Components/FiveDay/FiveDay";
import "../node_modules/weather-icons/css/weather-icons.css";

function App() {
    const api_key = "968b1c5c314008e5222f0b22d0ee619e";
    // default values for weather api
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [icon, setIcon] = useState(undefined);
    const [currentTemp, setCurrentTemp] = useState(undefined);
    const [maxTemp, setMaxTemp] = useState(undefined);
    const [minTemp, setMinTemp] = useState(undefined);
    const [description, setDescription] = useState("");
    const [fiveDayData, setFiveDayData] = useState();
    const [api, setApi] = useState(false);

    const [firstDayIcon, setFirstDayIcon] = useState(undefined);
    const [secondDayIcon, setSecondDayIcon] = useState(undefined);
    const [thirdDayIcon, setThirdDayIcon] = useState(undefined);
    const [fourthDayIcon, setFourthDayIcon] = useState(undefined);
    const [fifthDayIcon, setFifthDayIcon] = useState(undefined);

    // Options for weather icons
    const weatherIcon = {
        Thunderstorm: "wi-thunderstorm",
        Drizzle: "wi-sleet",
        Rain: "wi-storm-showers",
        Snow: "wi-snow",
        Atmosphere: "wi-fog",
        Clear: "wi-day-sunny",
        Clouds: "wi-day-fog",
    };

    // JSON response contains weather id ranges which will determine the desired icon dependent upon forecast conditions

    const getWeatherIcon = (rangeID) => {
        switch (true) {
            case rangeID >= 200 && rangeID <= 232:
                setIcon(weatherIcon.Thunderstorm);
                break;
            case rangeID >= 300 && rangeID <= 321:
                setIcon(weatherIcon.Drizzle);
                break;
            case rangeID >= 500 && rangeID <= 531:
                setIcon(weatherIcon.Rain);
                break;
            case rangeID >= 600 && rangeID <= 622:
                setIcon(weatherIcon.Snow);
                break;
            case rangeID >= 701 && rangeID <= 781:
                setIcon(weatherIcon.Atmosphere);
                break;
            case rangeID === 800:
                setIcon(weatherIcon.Clear);
                break;
            case rangeID >= 801 && rangeID <= 804:
                setIcon(weatherIcon.Clouds);
                break;
            default:
                setIcon(weatherIcon.Clear);
        }
    };

    const getWeatherIconDay1 = (rangeID) => {
        switch (true) {
            case rangeID >= 200 && rangeID <= 232:
                setFirstDayIcon(weatherIcon.Thunderstorm);
                break;
            case rangeID >= 300 && rangeID <= 321:
                setFirstDayIcon(weatherIcon.Drizzle);
                break;
            case rangeID >= 500 && rangeID <= 531:
                setFirstDayIcon(weatherIcon.Rain);
                break;
            case rangeID >= 600 && rangeID <= 622:
                setFirstDayIcon(weatherIcon.Snow);
                break;
            case rangeID >= 701 && rangeID <= 781:
                setFirstDayIcon(weatherIcon.Atmosphere);
                break;
            case rangeID === 800:
                setFirstDayIcon(weatherIcon.Clear);
                break;
            case rangeID >= 801 && rangeID <= 804:
                setFirstDayIcon(weatherIcon.Clouds);
                break;
            default:
                setFirstDayIcon(weatherIcon.Clear);
        }
    };
    const getWeatherIconDay2 = (rangeID) => {
        switch (true) {
            case rangeID >= 200 && rangeID <= 232:
                setSecondDayIcon(weatherIcon.Thunderstorm);
                break;
            case rangeID >= 300 && rangeID <= 321:
                setSecondDayIcon(weatherIcon.Drizzle);
                break;
            case rangeID >= 500 && rangeID <= 531:
                setSecondDayIcon(weatherIcon.Rain);
                break;
            case rangeID >= 600 && rangeID <= 622:
                setSecondDayIcon(weatherIcon.Snow);
                break;
            case rangeID >= 701 && rangeID <= 781:
                setSecondDayIcon(weatherIcon.Atmosphere);
                break;
            case rangeID === 800:
                setSecondDayIcon(weatherIcon.Clear);
                break;
            case rangeID >= 801 && rangeID <= 804:
                setSecondDayIcon(weatherIcon.Clouds);
                break;
            default:
                setSecondDayIcon(weatherIcon.Clear);
        }
    };
    const getWeatherIconDay3 = (rangeID) => {
        switch (true) {
            case rangeID >= 200 && rangeID <= 232:
                setThirdDayIcon(weatherIcon.Thunderstorm);
                break;
            case rangeID >= 300 && rangeID <= 321:
                setThirdDayIcon(weatherIcon.Drizzle);
                break;
            case rangeID >= 500 && rangeID <= 531:
                setThirdDayIcon(weatherIcon.Rain);
                break;
            case rangeID >= 600 && rangeID <= 622:
                setThirdDayIcon(weatherIcon.Snow);
                break;
            case rangeID >= 701 && rangeID <= 781:
                setThirdDayIcon(weatherIcon.Atmosphere);
                break;
            case rangeID === 800:
                setThirdDayIcon(weatherIcon.Clear);
                break;
            case rangeID >= 801 && rangeID <= 804:
                setThirdDayIcon(weatherIcon.Clouds);
                break;
            default:
                setThirdDayIcon(weatherIcon.Clear);
        }
    };
    const getWeatherIconDay4 = (rangeID) => {
        switch (true) {
            case rangeID >= 200 && rangeID <= 232:
                setFourthDayIcon(weatherIcon.Thunderstorm);
                break;
            case rangeID >= 300 && rangeID <= 321:
                setFourthDayIcon(weatherIcon.Drizzle);
                break;
            case rangeID >= 500 && rangeID <= 531:
                setFourthDayIcon(weatherIcon.Rain);
                break;
            case rangeID >= 600 && rangeID <= 622:
                setFourthDayIcon(weatherIcon.Snow);
                break;
            case rangeID >= 701 && rangeID <= 781:
                setFourthDayIcon(weatherIcon.Atmosphere);
                break;
            case rangeID === 800:
                setFourthDayIcon(weatherIcon.Clear);
                break;
            case rangeID >= 801 && rangeID <= 804:
                setFourthDayIcon(weatherIcon.Clouds);
                break;
            default:
                setFourthDayIcon(weatherIcon.Clear);
        }
    };

    const getWeatherIconDay5 = (rangeID) => {
        switch (true) {
            case rangeID >= 200 && rangeID <= 232:
                setFifthDayIcon(weatherIcon.Thunderstorm);
                break;
            case rangeID >= 300 && rangeID <= 321:
                setFifthDayIcon(weatherIcon.Drizzle);
                break;
            case rangeID >= 500 && rangeID <= 531:
                setFifthDayIcon(weatherIcon.Rain);
                break;
            case rangeID >= 600 && rangeID <= 622:
                setFifthDayIcon(weatherIcon.Snow);
                break;
            case rangeID >= 701 && rangeID <= 781:
                setFifthDayIcon(weatherIcon.Atmosphere);
                break;
            case rangeID === 800:
                setFifthDayIcon(weatherIcon.Clear);
                break;
            case rangeID >= 801 && rangeID <= 804:
                setFifthDayIcon(weatherIcon.Clouds);
                break;
            default:
                setFifthDayIcon(weatherIcon.Clear);
        }
    };

    // Collects weather information
    async function getWeather(e) {
        e.preventDefault();
        setCity(e.target[0].value);
        setState(e.target[1].value);
        // geoCoordinates needed to get 5 day data
        const api_geo = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${"us"}&appid=${api_key}`;

        const response_geo = await fetch(api_geo);
        const data_geo = await response_geo.json();
        let longitude = data_geo[0].lon;
        let latitude = data_geo[0].lat;

        const api_call = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,alerts&units=imperial&appid=${api_key}`
        );
        const response = await api_call.json();
        console.log(response);
        setFiveDayData(response);
        setApi(true);
        getWeatherIcon(response.current.weather[0].id);

        setDescription(response.current.weather[0].description);
        // // Temp's return in decimal points, need to be rounded up
        setCurrentTemp(Math.round(response.current.temp));
        setMaxTemp(Math.round(response.daily[0].temp.max));
        setMinTemp(Math.round(response.daily[0].temp.min));
    }

    useEffect(() => {
        console.log(fiveDayData);
    }, [fiveDayData]);

    useEffect(() => {
        if (api) {
            getWeatherIconDay1(fiveDayData.daily[1].weather[0].id);
            getWeatherIconDay2(fiveDayData.daily[2].weather[0].id);
            getWeatherIconDay3(fiveDayData.daily[3].weather[0].id);
            getWeatherIconDay4(fiveDayData.daily[4].weather[0].id);
            getWeatherIconDay5(fiveDayData.daily[5].weather[0].id);
            console.log("ran");
        }
    }, [api]); //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="App">
            <LocationSelect loadWeather={getWeather} />
            <Weather
                city={city}
                state={state}
                temp_min={minTemp}
                temp_max={maxTemp}
                description={description}
                current_temp={currentTemp}
                weatherIcon={icon}
            />
            {/* Makes sure the api is called before attempting to render 5 day data */}
            {api ? (
                <FiveDay
                    oneIcon={firstDayIcon}
                    oneMin={Math.round(fiveDayData.daily[1].temp.min)}
                    oneMax={Math.round(fiveDayData.daily[1].temp.max)}
                    twoIcon={secondDayIcon}
                    twoMin={Math.round(fiveDayData.daily[2].temp.min)}
                    twoMax={Math.round(fiveDayData.daily[2].temp.max)}
                    threeIcon={thirdDayIcon}
                    threeMin={Math.round(fiveDayData.daily[3].temp.min)}
                    threeMax={Math.round(fiveDayData.daily[3].temp.max)}
                    fourIcon={fourthDayIcon}
                    fourMin={Math.round(fiveDayData.daily[4].temp.min)}
                    fourMax={Math.round(fiveDayData.daily[4].temp.max)}
                    fiveIcon={fifthDayIcon}
                    fiveMin={Math.round(fiveDayData.daily[5].temp.min)}
                    fiveMax={Math.round(fiveDayData.daily[5].temp.max)}
                />
            ) : null}
        </div>
    );
}

export default App;
