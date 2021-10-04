import React from 'react';
import { Col, Form, Row, Button, Container, Table } from 'react-bootstrap';
import image from '../../Images/contact_us_banner1.jpg';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div style={{ maxWidth: '99%' }}>
            <div className="contactus-banner">
                <img src={image} alt="" />
            </div>
            <div className='table-container'>
                <Table >
                    <tbody>
                        <tr>
                            <td><i class="fas fa-phone"></i></td>
                            <td>01679704843</td>
                        </tr>
                        <tr>
                            <td><i className="fas fa-envelope-open-text"></i></td>
                            <td>najmul15-11321@diu.edu.bd</td>
                        </tr>
                        <tr>
                            <td><i className="fas fa-search-location"></i></td>
                            <td>Dhaka,Bangladesh</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <h3 className='text-center'>Get in our touch anytime</h3>
            <small className='d-block text-center text-primary mb-3'>Just fill up the from</small>
            <Container style={{ border: '2px solid gray' }} className='p-5'>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type='tel' placeholder="Phone number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Dhaka</option>
                                <option>Chadpur</option>
                                <option>Chittagong</option>
                                <option>Comilla</option>
                                <option>Rajshahi</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div >
    );
};

export default ContactUs;