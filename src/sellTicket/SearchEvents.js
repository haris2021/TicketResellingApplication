import React, { useState } from 'react';
import { Card, Carousel } from 'react-bootstrap';

const SearchAndImport = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [importedData, setImportedData] = useState([]);

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
    };

    return (
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
                    />
                    <button onClick={handleImportData}>Import</button>
                    <div className="mt-4 d-flex justify-content-center">
                        {importedData.length > 0 ? (
                            <Carousel slide={false}>
                                {importedData.map((item, index) => (
                                    index % 3 === 0 && (
                                        <Carousel.Item key={item.id}>
                                            <div className="d-flex">
                                                {importedData.slice(index, index + 3).map((item) => (
                                                    <Card key={item.id} style={{ width: '18rem', margin: '0 10px' }}>
                                                        <Card.Img variant="top" src={item.images[0].url} />
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
            </Card>
        </div>
    );
};

export default SearchAndImport;
