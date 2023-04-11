import React from 'react';
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import {
    faMapMarkerAlt,
    faCalendarAlt,
    faClock
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function DetailInformation({details}) {
    return (
        <Container style={{margin: 10, padding: 10}}>
            <Row className="justify-content-center text-center">
                <Col md={6} lg={5}>
                    <Image className="rounded-4"
                           style={{maxWidth: '100%', height: 'auto'}}
                           src={`/images/${details.detailsPicture}`} alt="Picture"/>
                    <h1 className="text-center"
                        style={{fontWeight: 'bold', paddingTop: 30}}>{details.eventTitle}</h1>
                    <p className="text-center"
                       style={{
                           color: 'gray',
                           fontWeight: "bold",
                           fontSize: '20px'
                       }}>{details.datePosted}</p>
                    <p className="text-center" style={{color: 'gray'}}>{details.eventDesc}</p>
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <h5 className="my-3">By {details.postedBy}</h5>
                        <Button className="btn btn-light btn-outline-info my-3">Follow</Button>
                    </div>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <div className="my-3">
                                <h5>
                                    <FontAwesomeIcon className="fa-solid" icon={faCalendarAlt}
                                                     style={{paddingRight: 7}}/> Date and Time
                                </h5>
                                <p>{details.eventDate}</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="my-3">
                                <h5>
                                    <FontAwesomeIcon className="fa-solid" icon={faMapMarkerAlt}
                                                     style={{paddingRight: 7}}/> Location
                                </h5>
                                <p>{details.address}</p>
                            </div>
                        </Col>
                    </Row>
                    <div>
                        <h4 className="text-center">About This Event</h4>
                        <div
                            className="d-flex justify-content-between align-items-center flex-wrap">
                            <div className="my-3">
                                <p><FontAwesomeIcon className="fa-solid" icon={faClock}
                                                    style={{paddingRight: 7}}/>{details.durationOfTheEvent} hrs
                                </p>
                                <p>{details.details}</p>
                            </div>
                        </div>
                        <Button block className="btn btn-danger btn-lg">Buy Ticket</Button>
                    </div>
                </Col>
            </Row>

        </Container>
    );
}

export default DetailInformation;
