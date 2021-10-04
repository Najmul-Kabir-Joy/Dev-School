import React from 'react';
import './CardGenerator.css'
import { Card, Col, Table, Button } from 'react-bootstrap';
import Rating from 'react-rating';

const CardGenerator = (props) => {
    const { coursename, enrolled, banner, price, rating, duration, exam, certificate } = props.service;
    return (
        <div>
            <Col>
                <Card className='card bg-dark'>
                    <Card.Img variant="top" src={banner} className='banner-img' />
                    <Card.Body>
                        <Card.Title className='text-center text-white display-6'>{coursename}</Card.Title>
                        <Card.Text>
                            <Table striped bordered hover variant="dark">
                                <tbody>
                                    <tr>
                                        <td><i className="far fa-clock me-2"></i>Course Duration</td>
                                        <td>{duration}</td>
                                    </tr>
                                    <tr>
                                        <td><i className="far fa-file-alt me-2"></i>Examination</td>
                                        <td>{exam}</td>
                                    </tr>
                                    <tr>
                                        <td><i className="fas fa-graduation-cap me-2"></i>Certificate</td>
                                        <td>{certificate}</td>
                                    </tr>
                                    <tr>
                                        <td><i className="fas fa-users me-2"></i>Enrolled</td>
                                        <td>{enrolled}</td>
                                    </tr>
                                    <tr>
                                        <td><i className="fas fa-users me-2"></i>Rating</td>
                                        <td><Rating
                                            style={{ color: 'goldenrod' }}
                                            emptySymbol="fa fa-star-o"
                                            fullSymbol="fa fa-star"
                                            initialRating={rating}
                                            readonly
                                        /></td>
                                    </tr>
                                    <tr>
                                        <td><i className="fas fa-dollar-sign me-2"></i>Price</td>
                                        <td>{price}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Button variant="light" className='d-block mx-auto fw-bold'>Enroll Now</Button>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default CardGenerator;