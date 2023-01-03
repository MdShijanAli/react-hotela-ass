import React from 'react';
import room1 from '../images/room1.webp';
import room2 from '../images/room2.webp';
import room3 from '../images/room3.webp';
import room4 from '../images/room4.jpg';
import room5 from '../images/room5.jpg';

function GallerySection() {
    return (
        <div className=" md:grid md:grid-cols-2 gap-5 lg:grid-cols-4 m-10 md:mx-40">



            <img
                src={room1}
                className="my-5 md:my-0 w-full h-full col-span-2 row-span-2 rounded shadow-sm lg:col-start-1 lg:row-start-1"
            />



            <img
                className="my-5 md:my-0 w-full h-full"
                src={room2}
            />


            <img
                className="my-5 md:my-0 w-full h-full"
                src={room3}
            />
            <img
                className="my-5 md:my-0 w-full h-full"
                src={room4}
            />
            <img
                className="my-5 md:my-0 w-full h-full"
                src={room5}
            />


        </div>
    )
}

export default GallerySection
