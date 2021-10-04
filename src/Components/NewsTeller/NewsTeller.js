import React from 'react';
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import './NewsTeller.css'

const NewsTeller = () => {
    return (
        <div>
            <i className="fas fa-newspaper display-1 mt-5 d-block text-center"></i>
            <Card className="text-center newsteller bg-dark mb-5" >
                <Card.Header>SUBSCRIBE TO OUR NEWSTELLER</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Subscribe to our newsteller and get update of all our upcoming events
                    </Card.Text>
                    <InputGroup className="mb-3 w-75 mx-auto">
                        <FormControl
                            placeholder="Your email"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            style={{ lineHeight: '35px' }}
                        />
                        <Button variant="secondary" id="button-addon2">
                            Subscribe
                        </Button>
                    </InputGroup>
                </Card.Body>
            </Card>

        </div>
    );
};

export default NewsTeller;