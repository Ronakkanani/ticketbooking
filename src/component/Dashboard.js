import React, { useState } from 'react'
import munjya from '../imges/asset 3.jpeg'
import Chandu from '../imges/asset 1.jpeg'
import BadBoys from '../imges/asset 6.jpeg'
import Jhamkudi from '../imges/asset 2.jpeg'
import Mahi from '../imges/asset 4.jpeg'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    const [data, SetData] = useState([
        {
            id: 1,
            name: 'Munjya',
            type: 'Comendy/Horror',
            img: munjya
        },
        {
            id: 2,
            name: 'Chandu Champion',
            type: 'Biography/Drama/Sports',
            img: Chandu
        },
        {
            id: 3,
            name: 'Bad Boys: Ride or Die',
            type: 'Action/Adventure/Comedy',
            img: BadBoys
        },
        {
            id: 4,
            name: 'Jhamkudi',
            type: 'Comedy/Horror/Mystery',
            img: Jhamkudi
        },
        {
            id: 5,
            name: 'Mr. & Mrs. Mahi',
            type: 'Drama/Romantic/Sports',
            img: Mahi
        },
    ])
    return (
        <>
            <main>
                <img src={require('../imges/banner.avif')} alt="" className='mt-[50px] w-full bg-cover' />
                <div className="container">

                    <div className='card mt-[50px] mx-[-19px]'>
                        <div className="flex">
                            {
                                data.map((item, index) => {
                                    return (
                                        <Link to={`/book/${item.id}`}>
                                            <div className='px-[20px] mb-[20px]'>
                                                <img src={item.img} className='w-[250px] rounded-lg' alt="" />
                                                <h3 className='mt-[10px] text-[18px] font-[500]'>{item.name}</h3>
                                                <span className='text-[16px] text-[#666]'>{item.type}</span>
                                            </div>

                                        </Link>

                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
