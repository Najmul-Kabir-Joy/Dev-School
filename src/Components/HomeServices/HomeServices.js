import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CardGenerator from '../CardGenerator/CardGenerator';

const HomeServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div style={{ maxWidth: '99%' }}>
            <i className="fas fa-book-open display-1 mt-5 d-block text-center"></i>
            <h2 className='text-center mb-5 mt-2'>TOP COURSES</h2>

            <Row xs={1} md={4} className="g-4 p-4">
                {
                    services.slice(0, 4).map(service => <CardGenerator service={service} key={service.id} ></CardGenerator>)
                }
            </Row>
        </div>
    );
};

export default HomeServices;