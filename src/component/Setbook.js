import React, { useState, useEffect } from 'react';
import { PiArmchairFill } from "react-icons/pi";

export default function Setbook() {
    const [data, setData] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const seatPrice = 300;

    useEffect(() => {
        const tempData = [];
        for (let i = 0; i < 100; i++) {
            tempData.push(i);
        }
        setData(tempData);
    }, []);

    const setrow = [];
    for (let i = 0; i < data.length; i += 10) {
        setrow.push(data.slice(i, i + 10));
    }

    const handleSeatClick = (seatIndex) => {
        // console.log(seatIndex)
        setSelectedSeats(prevSelectedSeats => {
            if (prevSelectedSeats.includes(seatIndex)) {
                // Deselect the seat
                return prevSelectedSeats.filter(index => index !== seatIndex);
            } else {
                // Select the seat
                return [...prevSelectedSeats, seatIndex];
            }
        });
    };

    console.log(selectedSeats.length)
    const totalPrice = selectedSeats.length * seatPrice;

    return (
        <>
            <div className="container py-4">
                {setrow.map((row, rowIndex) => (
                    <div key={rowIndex} className='flex justify-center mb-2'>
                        {row.map((item, itemIndex) => (
                            <div
                                onClick={() => handleSeatClick(item)}
                                key={itemIndex}
                                className={`w-16 h-16 rounded-[15px] flex items-center justify-center border-2 m-1 ${selectedSeats.includes(item) ? 'border-green-500' : 'border-red-400'}`}>
                                <PiArmchairFill className='text-[35px]' />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className='bg-gray-500 sticky text-white flex items-center bottom-0 w-full h-[60px]' >
                <div className="container">

                    <h2 className='text-[18px]'>
                        Total Price: {totalPrice}
                    </h2>
                </div>
            </div>
        </>
    );
}
