import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup, Row, Button } from 'react-bootstrap';
import CardGenerator from '../CardGenerator/CardGenerator';

const Courses = (props) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div style={{ maxWidth: '99%' }}>
            <h1 className='text-center mb-4'>OUR COURSES</h1>
            <h3 className='text-center quote mb-3'>An investment in knowledge pays the best interest</h3>
            <InputGroup className="mb-3 w-75 mx-auto">
                <FormControl
                    placeholder="Search for your favorite course"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    style={{ lineHeight: '35px' }}
                />
                <Button variant="secondary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>
            <Row xs={1} md={4} className="g-4 p-4">
                {
                    services.map(service => <CardGenerator service={service} key={service.id}></CardGenerator>)
                }
            </Row>
        </div>
    );
};

export default Courses;