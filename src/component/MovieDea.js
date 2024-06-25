import React, { useState } from 'react'
import munjya from '../imges/asset 3.jpeg'
import Chandu from '../imges/asset 1.jpeg'
import bgChandu from '../imges/bgchandu.avif'
import BadBoys from '../imges/asset 6.jpeg'
import bgBadBoys from '../imges/bgbad-boys.avif'
import Jhamkudi from '../imges/asset 2.jpeg'
import Jhamkudibg from '../imges/bgjhamkudi.avif'
import munjyabg from '../imges/bgmunjya.avif'
import Mahi from '../imges/asset 4.jpeg'
import bgMahi from '../imges/bgmr-and-mrs.avif'
import { Link, useParams } from 'react-router-dom'


export default function MovieDea() {
  const [data, SetData] = useState([
    {
      id: 1,
      name: "Munjya",
      type: "Comedy/Horror",
      ua: "UA",
      img: munjya,
      bg: munjyabg,
      viewType: "2D",
      date: "15 June, 2024",
      rating: '8.2/10',
      about: 'A young man`s visit to his native village unveils a family secret and a vengeful spirit, Munjya, who wants to get married. Now the young man must fight to protect himself and his love from Munjya`s clutches leading to a humorously chaotic and terrifying adventure.',
    },
    {
      id: 2,
      name: "Chandu Champion",
      type: "Biography/Drama/Sports",
      img: Chandu,
      bg: bgChandu,
      ua: "U",
      viewType: "2D",
      date: "25 December, 2024",
      rating: '9.2/10',
      about: 'This is an unbelievable tale of a man who faced one adversary after another with an undying spirit. His unwavering zeal and never-give-up attitude led to the creation of history. This is the story of Chandu Champion!',
    },
    {
      id: 3,
      name: "Bad Boys: Ride or Die",
      type: "Action/Adventure/Comedy",
      img: BadBoys,
      bg: bgBadBoys,
      ua: "A",
      viewType: "3D",
      date: "6 Jun, 2024",
      rating: '8.6/10',
      about: 'The world`s favorite Bad Boys are back with their iconic mix of edge-of-your-seat action and outrageous comedy but this time with a twist: Miami`s finest are now on the run.',
    },
    {
      id: 4,
      name: "Jhamkudi",
      type: "Comedy/Horror/Mystery",
      img: Jhamkudi,
      ua: "UA",
      img: Jhamkudi,
      bg: Jhamkudibg,
      viewType: "2D",
      date: "31 May, 2024",
      rating: '8.6/10',
      about: 'While Gujarat is celebrating Navratri, the village of Raniwada is forbidden to play Garba due to the curse of an evil witch named Jhamkudi. But when the rules are broken, the haunting begins. Will Bablo and Kumud be able to solve the mystery and save Raniwada from the curse of Jhamkudi?',
    },
    {
      id: 5,
      name: "Mr. & Mrs. Mahi",
      type: "Drama/Romantic/Sports",
      img: Mahi,
      ua: "UA",
      img: Mahi,
      bg: bgMahi,
      viewType: "2D",
      date: "31 May, 2024",
      rating: '8.6/10',
      about: 'Mahendra, a failed cricketer and Mahima, a doctor are brought together by the virtue of an arranged marriage. Having the same nickname, Mahi, together they become Mr. and Mrs. Mahi. They soon discover their common love and passion for Cricket. Eventually, Mahendra spots cricketing talent in his wife and encourages her to chase her dream of becoming a cricketer and coaches her on this journey.',
    },
  ]);

  const { mid } = useParams();

  const movie = data.find(item => item.id === parseInt(mid));

  return (
    <>
      <div
        style={{ backgroundImage: `linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%, rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%), url(${movie.bg})` }}
        className="bg  h-[480px]"
      >

        <div className="container  text-white h-full">
          <div className="flex h-full items-center">
            <div>
              <img className='h-[392px]' src={movie.img} alt="" />
            </div>
            <div className='ms-[20px]'>
              <h1 className='text-[36px] font-medium'>{movie.name}</h1>
              <div className='text-[16px] font-normal'>
                {movie.type}
                <span className='text-[16px] px-[8px]'>•</span>
                {movie.ua}
                <span className='text-[16px] px-[8px]'>•</span>
                {movie.date}
              </div>
              <Link to={'/setbook'}>
                <button className='text-[18px] mt-[25px] rounded-md px-[25px] py-[10px] bg-[#f84464]'>Book tickets</button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
