import React, {useState} from 'react';
import {Button, ButtonGroup, Col, Container, Image, Row} from 'react-bootstrap';
import {faCalendarAlt, faClock, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router";
import Reviews from "../ReviewsComponent";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {buyTicketThunk} from "../Services/details-thunk";

function DetailInformation({details}) {
    const [count, setCount] = useState(0);

    //const [buttonText, setButtonText] = useState('Follow');
    // const followBtn = () => {
    //     if (buttonText === 'Follow') {
    //         setButtonText('Following');
    //     } else {
    //         setButtonText('Follow');
    //     }
    // }


    const handlePlusClick = () => {
        setCount(count + 1);
    };

    const handleMinusClick = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const { id } = useParams();
    const {u} = useSelector(state => state.UserLogin)
    const login = useSelector(state => state.UserLogin);
    const isSeller = u.Role === 'Seller';

    const userId = login.u._id;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleBuyTicket = () => {

        const ticketBought = {
            "eventId": id,
            "userId": userId,
            "quantity": count,
            "date": details.Edate,
        }
        window.alert("Ticket bought successfully");
        dispatch(buyTicketThunk(ticketBought));
        navigate('/');
    }

    return (
        <Container fluid style={{margin: 10, padding: 10}}>
            <Row className="justify-content-center">
                <Col xs={12} sm={12} md={8} lg={6} xl={5} xxl={4}>
                    <div className="text-center">
                        <Image className="rounded-4" style={{maxWidth: '100%', height: 'auto'}}
                               src={details.Eimage} alt="Picture"/>
                        <h1 className="my-4" style={{fontWeight: 'bold'}}>{details.Ename}</h1>
                        <p style={{
                            color: 'gray',
                            fontWeight: 'bold',
                            fontSize: '20px'
                        }}>{details.Edate}</p>
                        <p style={{color: 'gray'}}>{details.EshortDescription}</p>
                        <Row className="justify-content-center my-4">
                            <Col xs={12} md={6}>
                                <div className="my-3">
                                    <h5><FontAwesomeIcon className="fa-solid" icon={faCalendarAlt}
                                                         style={{paddingRight: 7}}/> Date and Time
                                    </h5>
                                    <p>{details.Edate}</p>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="my-3">
                                    <h5><FontAwesomeIcon className="fa-solid" icon={faMapMarkerAlt}
                                                         style={{paddingRight: 7}}/> Location</h5>
                                    <p>{details.Elocation}</p>
                                </div>
                            </Col>
                        </Row>
                        <div className="my-4">
                            <h4 className="text-center">About This Event</h4>
                            <div className="my-4">
                                <p><FontAwesomeIcon className="fa-solid" icon={faClock}
                                                    style={{paddingRight: 7}}/>{details.Etime}</p>
                                <p>{details.Edescription}</p>
                            </div>
                            {
                                !isSeller &&
                                  <>
                                      {u._id ? <>
                                                      <Button block className="btn btn-primary btn-lg my-4"
                                                              onClick={handleBuyTicket}>Buy Ticket</Button>
                                                      <ButtonGroup className="ps-2">
                                                          <Button variant="secondary" onClick={handleMinusClick}>-</Button>
                                                          <Button variant="light">{count}</Button>
                                                          <Button variant="success" onClick={handlePlusClick}>+</Button>
                                                      </ButtonGroup>
                                               </> : " "
                                      }

                                  </>
                            }
                        </div>

                        <div className={"my-4"}>
                            <Reviews/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    )
    // return (
    //     <Container style={{margin: 10, padding: 10}}>
    //         <Row className="justify-content-center text-center">
    //             <Col md={6} lg={5}>
    //                 <Image className="rounded-4"
    //                        style={{maxWidth: '100%', height: 'auto'}}
    //                        src={`/images/${details.Eimage}`} alt="Picture"/>
    //                 <h1 className="text-center"
    //                     style={{fontWeight: 'bold', paddingTop: 30}}>{details.Ename}</h1>
    //                 <p className="text-center"
    //                    style={{
    //                        color: 'gray',
    //                        fontWeight: "bold",
    //                        fontSize: '20px'
    //                    }}>{details.Edate}</p>
    //                 <p className="text-center"
    //                    style={{color: 'gray'}}>{details.EshortDescription}</p>
    //                 {/*<div*/}
    //                 {/*    className="d-flex justify-content-between align-items-center
    // flex-wrap">*/} {/*    <h5 className="my-3">By {details.Eorganizer}</h5>*/} {/*    <Button
    // className="btn btn-light btn-outline-info my-3"*/} {/*
    // onClick={followBtn}>{buttonText}</Button>*/} {/*</div>*/} <Row
    // className="justify-content-center"> <Col md={6}> <div className="my-3"> <h5>
    // <FontAwesomeIcon className="fa-solid" icon={faCalendarAlt} style={{paddingRight: 7}}/> Date
    // and Time </h5> <p>{details.Edate}</p> </div> </Col> <Col md={6}> <div className="my-3"> <h5>
    // <FontAwesomeIcon className="fa-solid" icon={faMapMarkerAlt} style={{paddingRight: 7}}/>
    // Location </h5> <p>{details.Elocation}</p> </div> </Col> </Row> <div> <h4
    // className="text-center">About This Event</h4> <div className="d-flex justify-content-between
    // align-items-center flex-wrap text-center"> <div className="my-3 mx-auto"> <p><FontAwesomeIcon className="fa-solid" icon={faClock} style={{paddingRight: 7}}/>{details.Etime}</p> <p>{details.Edescription}</p> </div> </div>  <Button block className="btn btn-primary btn-lg" onClick={handleBuyTicket}>Buy Ticket</Button> <ButtonGroup className="ps-2"> <Button variant="secondary" onClick={handleMinusClick}>-</Button> <Button variant="light">{count}</Button> <Button variant="success" onClick={handlePlusClick}>+</Button> </ButtonGroup> </div> <div className={"mt-3"}> <Reviews/> </div> </Col> </Row> </Container> );
}

export default DetailInformation;
