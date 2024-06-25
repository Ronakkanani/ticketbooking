import React, { useState } from 'react'
import { PiArmchairFill } from "react-icons/pi";


export default function Setbook() {
    const [data, SetData] = useState([]);

    for (let i = 0; i < 100; i++) {
        data.push(i)
        console.log(data);
    }

    return (
        <>
            {
                data.map((item) => {
                    return (
                        <div>
                            {/* {item} */}
                            <PiArmchairFill />
                        </div>
                    )
                })
            }
        </>
    )
}
