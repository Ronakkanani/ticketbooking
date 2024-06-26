import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="flex justify-between py-[15px]">
                        <div className="flex">
                            <div>
                                <Link to={'/'}>
                                    <img src={require('../imges/asset 10.jpg')} alt="" className='w-[115px]' />
                                </Link>
                            </div>
                            <div className='flex items-center px-[10px] border-[1px] border-[#eeeeee] ms-[20px] w-[550px]'>
                                <span><CiSearch /></span>
                                <span className='text-[14px] ms-[10px] text-[#999999]'>Search for Movies, Events, Plays, Sports and Activities</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className='flex items-center'>
                                <span className='text-[14px]'>Surat</span>
                                <span className='ms-[10px]'><MdKeyboardArrowDown /></span>
                            </div>
                            <div className='flex items-center'>
                                <button className='bg-[#dc3558] ms-[20px] text-[12px] w-[67px] h-[25px] rounded-[4px] text-[#fff]'>Sign in</button>
                                <span className='ms-[20px] text-[25px]'><IoMenuOutline /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
