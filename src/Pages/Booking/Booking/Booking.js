import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])


    return (
        <div>
            <h2>{service.name}</h2>
            <img src={service.img} alt="" />
            <h1>Price: {service.price}</h1>
        </div>
    );
};

export default Booking;