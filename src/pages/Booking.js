import React, {useState} from "react";

import './Booking.css';

const Booking = () => {
    const[bookValue, setBookValue] = useState('');

    return (
        <>
            <h3>Booking page</h3>
            <button>Book to view</button>
        </>
    )
}

export default Booking
