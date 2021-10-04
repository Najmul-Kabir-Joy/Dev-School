import React from 'react';
import { Card } from 'react-bootstrap';

const WishCard = (props) => {
    const { name, img, text } = props.wish;
    return (
        <div>
            <Card bg='dark text-white'>
                <Card.Img variant="top" src={img} style={{ display: 'block', margin: 'auto', height: '200px', width: '200px', borderRadius: '50%' }} />
                <Card.Body>
                    <Card.Title className='text-center'>{name}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default WishCard;