import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className=' w-1/2 md:flex gap-5'>
            <div className="md:grid md:grid-cols-3 bg-white rounded-xl p-2">
                <div>
                    <p>Check in</p>
                    <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                </div>
                <div>
                    <p>Check out</p>
                    <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                </div>
                <div>
                    <select>
                        <option>Person</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
            <button className="btn btn-warning mt-5 md:mt-0">Check Availability</button>
        </div>
    );
};

export default BookingForm;