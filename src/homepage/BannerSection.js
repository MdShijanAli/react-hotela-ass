import React from 'react';
import BookingForm from '../components/BookingForm';

import banner from '../images/1_Hotel_Guestrooms07V2.webp';

function BannerSection() {
    return (
        <div className="hero h-screen " style={{ backgroundImage: `url(${banner})` }}>
            <BookingForm></BookingForm>
        </div>
    )
}

export default BannerSection
