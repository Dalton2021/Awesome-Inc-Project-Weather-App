import React from "react";
import { Container, Card } from "react-bootstrap";
import "./Weather.css";

const Weather = (props) => {
    // Displays the current max and min temps
    const min_max_temp = (min, max) => {
        if ((min, max)) {
            return (
                <h3>
                    <span className="px-4 min-max">{min}°</span>
                    <span className="px-4 min-max">{max}°</span>
                </h3>
            );
        }
    };

    // Collects Current Date
    function dateGrabber() {
        let date = new Date();
        let options = {
            weekday: "short",
            day: "numeric",
            month: "short",
        };

        return date.toLocaleDateString("en-US", options);
    }
    return (
        <Container className="mt-4">
            <p className="date">{dateGrabber()}</p>
            <Card className="pt-3 card-custom">
                <div className="flex-items">
                    <h1 className="city-name">{props.city}</h1>
                    <h5 className="pt-2 ml-4">
                        <i
                            className={`wi ${props.weatherIcon} icon display-1`}
                        ></i>
                    </h5>
                </div>

                {/* Checks for values before displaying information */}
                {props.current_temp ? (
                    <h1 className="py-2 current-temp">{props.current_temp}°</h1>
                ) : null}
                {/* Show max and min temperature */}

                {min_max_temp(props.temp_min, props.temp_max)}
                {/* Show Weather Description*/}
                <h4 className="py-3 description">{props.description}</h4>
            </Card>
        </Container>
    );
};

export default Weather;
