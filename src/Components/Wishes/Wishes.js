import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import WishCard from './WishCard/WishCard';

const Wishes = () => {
    const [wishes, setWishes] = useState([]);
    useEffect(() => {
        fetch('./wish.json')
            .then(res => res.json())
            .then(data => setWishes(data))
    }, [])
    return (
        <div style={{ maxWidth: '99%' }}>
            <i className="fas fa-award display-1 mt-5 d-block text-center"></i>
            <h2 className='text-center mt-2'>SOME WELL WISHERS</h2>
            <Row xs={1} md={4} className="g-4 p-5">
                {
                    wishes.map(wish => <WishCard wish={wish} key={wish.id}></WishCard>)
                }
            </Row>
        </div>
    );
};

export default Wishes;