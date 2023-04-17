import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";



import './sellTicket.css'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {createEventThunk} from "../Services/Event-Thunks.js";

import Navigation from "../Home/Navigation/index.js"
import {useNavigate} from "react-router";


function EventForm() {

    const {u} = useSelector (state => state.UserLogin);
    const [Ename, setEname] = useState("");
    const [Elocation, setElocation] = useState("");
    const [Edescription, setEdescription] = useState("");
    const [EticketPrice, setEticketPrice] = useState("");
    const [EticketQuantity, setEticketQuantity] = useState("");
    const [Edate, setEdate] = useState("");
    const [Etime, setEtime] = useState("");
    const [Eimage, setEimage] = useState("");
    const [EshortDescription, setEshortDescription] = useState("");
    const [Ecategory, setEcategory] = useState("");
    const [Eorganizer, setEorganizer] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvent = {
            data: {
                        Ename,
                        Elocation,
                        Edate,
                        Etime,
                        Edescription,
                        EticketPrice,
                        EticketQuantity,
                        Eimage,
                        EshortDescription,
                        Ecategory,
                        Eorganizer:u._id,
                    },
        }
        dispatch(createEventThunk(newEvent.data));
        navigate('/');
    }
    return (
        <div className="d-flex justify-content-center align-items-center h-100 auth-container">
            <Card style={{ width: "50rem", border: "2px solid purple" }}>
                <Card.Header style={{backgroundColor:"rebeccapurple", borderBottomColor:"rebeccapurple",color:"white"}}>Create Event</Card.Header>
                <Card.Body >
                    <Form onSubmit={(e)=>handleSubmit(e)}>
                        <Form.Group controlId="formEventName" style={{ marginBottom: "20px" }}>
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter event name"
                                name="ename"
                                value={Ename}
                                onChange={(e) => setEname(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formLocation" style={{ marginBottom: "20px" }}>
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter location of the event"
                                name="eventLocation"
                                value={Elocation}
                                onChange={(e) => setElocation(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formDate" style={{ marginBottom: "20px" }}>
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="Edate"
                                value={Edate}
                                onChange={(e) => setEdate(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formTime" style={{ marginBottom: "20px" }}>
                            <Form.Label>Time</Form.Label>
                            <Form.Control
                                type="time"
                                name="Etime"
                                value={Etime}
                                onChange={(e) => setEtime(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formEventDescription" style={{ marginBottom: "20px" }}>
                            <Form.Label>Event Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter event description"
                                name="Edescription"
                                value={Edescription}
                                onChange={(e) => setEdescription(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formTicketPrice" style={{ marginBottom: "20px" }}>
                            <Form.Label>Ticket Price</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter ticket price"
                                name="EticketPrice"
                                value={EticketPrice}
                                onChange={(e) => setEticketPrice(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formTicketQuantity" style={{ marginBottom: "20px" }}>
                            <Form.Label>Ticket Quantity</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter ticket quantity"
                                name="EticketQuantity"
                                value={EticketQuantity}
                                onChange={(e) => setEticketQuantity(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}
                                style={{ backgroundColor: "rebeccapurple", borderColor: "rebeccapurple" }}>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>

    );
}

export default EventForm;
