import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./LocationSelect.css";

const LocationSelect = (props) => {


    return (
        <Container>
            <Form onSubmit={props.loadWeather}>
                <Row className="pt-2">
                    <Col className="md-3 offset-md-2">
                        <input
                            type="text"
                            className="form-control form-input"
                            name="City"
                            autoComplete="off"
                            placeholder="City"
                        ></input>
                    </Col>
                    <Col className="md-3">
                        <input
                            type="text"
                            className="form-control form-input"
                            name="State"
                            autoComplete="off"
                            placeholder="State"
                        ></input>
                    </Col>
                    <Col className="md-3 ">
                        <Button type="submit" className="btn btn-warning btn-custom">Get Weather</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default LocationSelect;
