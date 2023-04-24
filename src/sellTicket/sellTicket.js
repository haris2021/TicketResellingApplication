import React, {useState} from "react";
import {Button, Card, Form} from "react-bootstrap";

import './sellTicket.css'
import queryString from 'query-string';
import {useDispatch, useSelector} from "react-redux";
import {createEventThunk} from "../Services/Concert-thunks.js";

import {useNavigate} from "react-router";
import {useLocation} from 'react-router-dom';

import Navigation from "../Home/Navigation/index.js"

function EventForm() {
    const location = useLocation();
    const { name, date, time, place,price, image } = queryString.parse(location.search);


    const {u} = useSelector (state => state.UserLogin);
    const [Ename, setEname] = useState(name || "");
    const [Elocation, setElocation] = useState(place || "");
    const [Edescription, setEdescription] = useState("");
    const [EticketPrice, setEticketPrice] = useState(price || "");
    const [EticketQuantity, setEticketQuantity] = useState("");
    const [Edate, setEdate] = useState(date || "");
    const [Etime, setEtime] = useState(time || "");
    const [Eimage, setEimage] = useState(image || "");
    const [EshortDescription, setEshortDescription] = useState("");
    const [Ecategory, setEcategory] = useState("");
    const [Eorganizer, setEorganizer] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const callfun = ( category ) =>
    {
        setEcategory(category);
    }


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
                        Ecategory:Ecategory,
                        Eorganizer:u._id,
                    },
        }
        if (!Ename || !Elocation || !Edate || !Etime || !Ecategory || !Eimage || !EshortDescription || !Edescription || !EticketPrice || !EticketQuantity) {
            alert('Please fill out all fields.');
            return;
        }
        dispatch(createEventThunk(newEvent.data));
        navigate('/');
    }
    const handleSearchImport = () => {
        navigate('/importEvents');
    }
    return (

        <div>
            <div style={{marginLeft:110}}>
                <Navigation/>

            </div>



            <div className="d-flex justify-content-center align-items-center h-100 auth-container">
                <Card style={{ width: "50rem", border: "2px solid purple" }}>
                    <Card.Header style={{backgroundColor:"rebeccapurple", borderBottomColor:"rebeccapurple",color:"white"}}>Create Event</Card.Header>
                    <Card.Body style={{ overflowY: "scroll", maxHeight: "600px" }}>
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
                            <Form.Group controlId="userType" className="d-flex justify-content-between radio-group"   style={{ marginBottom: "20px" }}>
                                <Form.Label>Event Type</Form.Label>
                                <Form.Check type="radio" label="Movies" name="userType" id="seller" value={Ecategory} onClick={()=>{callfun('Movies')}}/>
                                <Form.Check type="radio" label="Concerts" name="userType" id="buyer" value={Ecategory} onClick={()=>{callfun('Concerts')}}  />
                                <Form.Check type="radio" label="Other" name="userType" id="admin" value={Ecategory} onClick={()=>{callfun('Other')}}/>
                            </Form.Group>
                            <Form.Group controlId="formEventImage" style={{ marginBottom: "20px" }}>
                                <Form.Label>Event Image</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={1}
                                    placeholder="Enter event url"
                                    name="Edescription"
                                    value={Eimage}
                                    onChange={(e) => setEimage(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formEventShortDescription" style={{ marginBottom: "20px" }}>
                                <Form.Label>Event Tag Line</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={1}
                                    placeholder="Enter event tag line"
                                    name="EshortDescription"
                                    value={EshortDescription}
                                    onChange={(e) => setEshortDescription(e.target.value)}
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
                                    style={{ backgroundColor: "rebeccapurple", borderColor: "rebeccapurple", marginRight: "50px"}}>
                                Submit
                            </Button>
                            <Button variant="primary" type="submit" onClick={() => handleSearchImport()}
                                    style={{ backgroundColor: "rebeccapurple", borderColor: "rebeccapurple" }}>
                                Import Event
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>



    );
}

export default EventForm;
