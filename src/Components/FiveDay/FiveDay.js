import React from "react";
import "./FiveDay.css";
import { Container, Col, Row, Card } from "react-bootstrap";

const FiveDay = (props) => {
    function dateSkip(daysAhead) {
        let date = new Date();
        date.setDate(date.getDate() + daysAhead);
        let options = {
            weekday: "short",
        };
        return date.toLocaleDateString("en-US", options);
    }

    return (
        <Container className="mt-5">
            <Row>
                {/* Day One */}
                <Col>
                    <Card>
                        <div>
                            <p className="dates">{dateSkip(1)}</p>
                            <div className="pt-2">
                                <i
                                    className={`wi ${props.oneIcon} icons display-5`}
                                ></i>
                            </div>
                            <div className="fiveday-min-max pt-3">
                                <h5>{props.oneMin}°</h5>
                                <h5>{props.oneMax}°</h5>
                            </div>
                        </div>
                    </Card>
                </Col>
                {/* Day Two */}
                <Col>
                    <Card>
                        <div>
                            <p className="dates">{dateSkip(2)}</p>
                            <div className="pt-2">
                                <i
                                    className={`wi ${props.twoIcon} icons display-5`}
                                ></i>
                            </div>
                            <div className="fiveday-min-max pt-3">
                                <h5>{props.twoMin}°</h5>
                                <h5>{props.twoMax}°</h5>
                            </div>
                        </div>
                    </Card>
                </Col>
                {/* Day Three */}
                <Col>
                    <Card>
                        <div>
                            <p className="dates">{dateSkip(3)}</p>
                            <div className="pt-2">
                                <i
                                    className={`wi ${props.threeIcon} icons display-5`}
                                ></i>
                            </div>
                            <div className="fiveday-min-max pt-3">
                                <h5>{props.threeMin}°</h5>
                                <h5>{props.threeMax}°</h5>
                            </div>
                        </div>
                    </Card>
                </Col>
                {/* Day Four */}
                <Col>
                    <Card>
                        <div>
                            <p className="dates">{dateSkip(4)}</p>
                            <div className="pt-2">
                                <i
                                    className={`wi ${props.fourIcon} icons display-5`}
                                ></i>
                            </div>
                            <div className="fiveday-min-max pt-3">
                                <h5>{props.fourMin}°</h5>
                                <h5>{props.fourMax}°</h5>
                            </div>
                        </div>
                    </Card>
                </Col>
                {/* Day Five */}
                <Col>
                    <Card>
                        <div>
                            <p className="dates">{dateSkip(5)}</p>
                            <div className="pt-2">
                                <i
                                    className={`wi ${props.fiveIcon} icons display-5`}
                                ></i>
                            </div>
                            <div className="fiveday-min-max pt-3">
                                <h5>{props.fiveMin}°</h5>
                                <h5>{props.fiveMax}°</h5>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default FiveDay;
