import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";


import './sellTicket.css'

import Navigation from "../Home/Navigation/index.js"


function EventForm() {
    const [eventName, setEventName] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [ticketPrice, setTicketPrice] = useState("");
    const [ticketQuantity, setTicketQuantity] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        //data process
    };

    return (
        <div>

            <Navigation/>

            <div className="d-flex justify-content-center align-items-center h-100 auth-container">
                <Card style={{ width: "30rem", border: "2px solid purple" }}>
                    <Card.Header style={{backgroundColor:"rebeccapurple", borderBottomColor:"rebeccapurple",color:"white"}}>Create Event</Card.Header>
                    <Card.Body >
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formEventName" style={{ marginBottom: "30px" }}>
                                <Form.Label>Event Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter event name"
                                    value={eventName}
                                    onChange={(e) => setEventName(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formLocation" style={{ marginBottom: "30px" }}>
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter location of the event"
                                    value={eventName}
                                    onChange={(e) => setEventName(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formEventDescription" style={{ marginBottom: "30px" }}>
                                <Form.Label>Event Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Enter event description"
                                    value={eventDescription}
                                    onChange={(e) => setEventDescription(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formTicketPrice" style={{ marginBottom: "30px" }}>
                                <Form.Label>Ticket Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter ticket price"
                                    value={ticketPrice}
                                    onChange={(e) => setTicketPrice(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formTicketQuantity" style={{ marginBottom: "30px" }}>
                                <Form.Label>Ticket Quantity</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Enter ticket quantity"
                                    value={ticketQuantity}
                                    onChange={(e) => setTicketQuantity(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" style={{ backgroundColor: "rebeccapurple", borderColor: "rebeccapurple" }}>
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>

        </div>

    );
}

export default EventForm;
