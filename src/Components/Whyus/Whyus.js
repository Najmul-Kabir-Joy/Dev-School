import React from 'react';
import './Whyus.css'
import { Col, Row } from 'react-bootstrap';

const Whyus = () => {
    return (
        <div style={{ maxWidth: '99%' }} className="mb-5">
            <Row className='mb-5'>
                <h2 className='text-center mb-5'>WHY US</h2>
                <Col xs={6} md={3} className='cols'>
                    <div className='bg-dark us-key-point'>
                        <div>
                            <i className="fas fa-laptop-code icon"></i>
                            <p className='icon-text'>SOURCE CODE</p>
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={3} className='cols'>
                    <div className='bg-dark us-key-point'>
                        <div>
                            <i class="fas fa-headset icon"></i>
                            <p className='icon-text'>24/7 SUPPORT</p>
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={3} className='cols'>
                    <div className='bg-dark us-key-point'>
                        <div>
                            <i class="fas fa-heartbeat icon"></i>
                            <p className='icon-text'>LIFE TIME ACCESS</p>

                        </div>
                    </div>
                </Col>
                <Col xs={6} md={3} className='cols'>
                    <div className='bg-dark us-key-point'>
                        <div>
                            <i class="fas fa-question icon"></i>
                            <p className='icon-text'>LIVE QnA</p>

                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Whyus;