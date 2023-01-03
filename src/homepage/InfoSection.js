import React from 'react';

const InfoSection = () => {
    return (
        <div className='m-10 md:mx-40'>
            <div className='md:grid md:grid-cols-5 md:justify-between'>
                <div className="md:col-span-4">
                    <h1 className='text-2xl font-bold text-gray-800'>Hotel Vishal @ Airport</h1>
                    <div className='flex gap-10'>
                        <p className='text-lg text-gray-800 font-semibold'>104/2/2, National Highway 8, Mahipapur, New</p>
                        <a className='text-lg text-sky-600 font-semibold underline' href="#">View Map</a>
                    </div>
                    <p className='text-lg text-gray-800 font-semibold'>Delhi, 110037 new Delhi, India</p>

                    <p className='text-lg text-gray-800 font-semibold my-3'>+91-7654564545, 8107344602</p>

                    <ul className='md:flex gap-10 list-disc'>
                        <li className='text-lg text-gray-800 font-semibold'>Free Parking</li>
                        <li className='text-lg text-gray-800 font-semibold'>Conference Room</li>
                        <li className='text-lg text-gray-800 font-semibold'>ATM</li>
                        <li className='text-lg text-gray-800 font-semibold'>Conference Room</li>
                        <li className='text-lg text-gray-800 font-semibold'>Conference Room</li>
                    </ul>
                </div>

                <div class="mapouter"><div class="gmap_canvas"><iframe width="150" height="150" id="gmap_canvas" src="https://maps.google.com/maps?q=104/2/2,%20National%20Highway%208,%20Mahipapur,%20New%20%20Delhi,%20110037%20new%20Delhi,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed" ></iframe></div></div>

            </div>

            <div>
                <p className='mt-3 text-lg font-semibold text-gray-800'>Located in New Delhi, 5.5 km from Rashtapati Shavan, Hotel Vishal @ Airport provides acommodetion with a restaurent free privet parking and a fitness center. This 3 star hotel offers an ATM, a concierge service and free WiFi. The accommodation features a 24 hour frint desk, room service and currency exchange for guests</p>
            </div>

            <div className="divider my-10 "></div>

            <div className='md:grid md:grid-cols-2'>
                <div>
                    <h1 className='text-xl font-bold text-gray-800'>Property Rules</h1>
                    <h3 className='text-xl font-semibold text-gray-800'>Check-in 12PM Check-out 12PM</h3>

                    <ul className='mt-5 list-disc'>
                        <li className='text-lg text-gray-800 font-semibold'>Guest with fever are not allowed</li>
                        <li className='text-lg text-gray-800 font-semibold'>Guest from containment comes are not allowed</li>
                        <li className='text-lg text-gray-800 font-semibold'>Guest bellow 18 years of age are not allowed</li>
                        <li className='text-lg text-gray-800 font-semibold'>PAN Card and Non-Govt IDs are not accepted as ID provides</li>
                        <li className='text-lg text-gray-800 font-semibold'>Acchar , Drriving Licence and Govt ID are accepted as ID profs</li>
                        <li className='text-lg text-gray-800 font-semibold'>Pets are not allowed</li>
                        <li className='text-lg text-gray-800 font-semibold'>Outside food is not allowed</li>
                        <li className='text-lg text-gray-800 font-semibold'>Smoking within the permisions is not allowed</li>
                        <li className='text-lg text-gray-800 font-semibold'>Does not allow privet partners of events</li>
                        <li className='text-lg text-gray-800 font-semibold'>Quarentine prothcols are being followed as per local government authorities</li>
                    </ul>
                </div>
                <div>
                    <ul className='mt-20 list-disc'>
                        <li className='text-lg text-gray-800 font-semibold'>Pets are not allowed</li>
                        <li className='text-lg text-gray-800 font-semibold'>Outside food is not allowed</li>
                        <li className='text-lg text-gray-800 font-semibold'>Smoking within the permisions is not allowed</li>
                        <li className='text-lg text-gray-800 font-semibold'>Does not allow privet partners of events</li>
                        <li className='text-lg text-gray-800 font-semibold'>Quarentine prothcols are being followed as per local government authorities</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;