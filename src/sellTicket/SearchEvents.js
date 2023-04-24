import React, {useEffect, useState} from 'react';
import {Button, Card, Carousel} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import './SearchEvent.css'

import Navigation from "../Home/Navigation/index.js"

const SearchAndImport = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [importedData, setImportedData] = useState([]);
    const navigate = useNavigate();
    const [selectedEvent, setSelectedEvent] = useState(null);


    const handleCreateEventClick = () => {
        if (selectedEvent) {
            const imageurl ='https://www.billboard.com/wp-content/uploads/2021/08/concert-crowd-billboard-1548-1629382874.jpg?w=942&h=623&crop=1'
            const price = selectedEvent.priceRanges ? selectedEvent.priceRanges[0].min : "Not Available"; // provide default value "Not Available"
            navigate(`/createEvent?name=${selectedEvent.name}&date=${selectedEvent.dates.start.localDate}&time=${selectedEvent.dates.start.localTime}&place=${selectedEvent._embedded.venues[0].city.name}&price=${price}&image=${imageurl}`);
        } else {
            navigate('/createEvent')
        }
    };

    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const fetchDataFromAPI = async (searchQuery) => {
        const response = await fetch(
            `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${searchQuery}&apikey=vGU0WGd0NUnbDwq5eg8c7G0jFAlK5AHA&size=100`
        );
        const data = await response.json();
        return data._embedded ? data._embedded.events : [];
    };

    const handleImportData = async () => {
        const importedData = await fetchDataFromAPI(searchQuery);
        setImportedData(importedData);
        localStorage.setItem('importedData', JSON.stringify(importedData));
    };

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('importedData'));
        if (storedData) {
            setImportedData(storedData);
        }
    }, []);


    return (
        <div>
            <div style={{marginLeft:110}}>
                <Navigation/>

            </div>


            <div className="d-flex justify-content-center align-items-center h-100 auth-container">
                <Card style={{ width: '70rem', border: '2px solid purple' }}>
                    <Card.Header
                        style={{
                            backgroundColor: 'rebeccapurple',
                            borderBottomColor: 'rebeccapurple',
                            color: 'white',
                        }}
                    >
                        Import Events
                    </Card.Header>
                    <Card.Body className="text-center">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchQueryChange}
                            placeholder="Type something to search..."
                            style={{
                                width: "450px",
                                padding: "5px 10px",
                                borderRadius: "5px",
                                border: "3px solid rebeccapurple ",
                                marginLeft: "15px",
                                marginRight: "10px"
                            }}
                        />
                        <button onClick={handleImportData}    style={{
                            backgroundColor: "white",
                            border: "1px solid rebeccapurple",
                            borderRadius: "20px",
                            padding: "5px 10px",
                            color: "rebeccapurple"
                        }}>Import</button>
                        <div className="mt-4 d-flex justify-content-center" style={{ marginBottom: "70px" }}>
                            {importedData.length > 0 ? (
                                <Carousel slide={false}>
                                    {importedData.map((item, index) => (
                                        index % 3 === 0 && (
                                            <Carousel.Item key={item.id}>
                                                <div className="d-flex">
                                                    {importedData.slice(index, index + 3).map((item) => (
                                                        <Card
                                                            key={item.id}
                                                            style={{ width: "33%", margin: "0 10px" }}
                                                            onClick={() => setSelectedEvent(item)}
                                                            className={selectedEvent && selectedEvent.id === item.id ? "selected" : ""}>
                                                            <Card.Img className="image" variant="top" src={item.images[0].url} />
                                                            <Card.Body>
                                                                <Card.Title>{item.name}</Card.Title>
                                                                <Card.Text>{item.dates.start.localDate}</Card.Text>
                                                                <Card.Text>{item.dates.start.localTime}</Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    ))}
                                                </div>
                                            </Carousel.Item>
                                        )
                                    ))}
                                </Carousel>
                            ) : (
                                 <p>No data imported yet</p>
                             )}
                        </div>
                    </Card.Body>

                    <Button variant="primary" type="submit" onClick={() => handleCreateEventClick()}
                            style={{
                                backgroundColor: "rebeccapurple",
                                borderColor: "rebeccapurple",
                                display: "block",
                                position: "absolute",
                                bottom: "10px",
                                left: "50%",
                                transform: "translateX(-50%)"
                            }}>
                        Create Event
                    </Button>
                    {/*<button onClick={handleCreateEventClick}>Create Event</button>*/}
                </Card>
            </div>

        </div>

    );
};

export default SearchAndImport;
