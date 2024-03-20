'use client'
import { useState } from 'react';
import Image from "next/image";

function Hero() {
    const [show, setfirst] = useState(false);
    return (
        <>
            <header className='bg-hero d-flex flex-column ' id="home">
                <div className="container-2 pt-4  w-100 ">
                    <nav className=' d-flex justify-content-between align-items-center'>
                        <Image
                            src="/images/logo.svg"
                            alt='logo'
                            width={206}
                            height={42}
                            className='cursor-pointer'
                        />
                        <ul className={` ${show ? "end-0" : "right_100"} d-flex align-items-center gap-4 mobile-view`}>
                            <li><a href="#about" className="text-white ff-roboto fw-400 text-16 lh-24 nav-line op-7">About Us</a></li>
                            <li><a href="#team" className="text-white ff-roboto fw-400 text-16 lh-24 nav-line op-7">Our Team</a></li>
                            <li><a href="#roadmap" className="text-white ff-roboto fw-400 text-16 lh-24 nav-line op-7">Roadmap</a></li>
                            <li><button className="nav-btn text-white ff-roboto fw-700 text-18 lh-27">Contact Us</button></li>
                        </ul>
                        <div className="menu z-5 d-lg-none cursor-pointer" onClick={() => {
                            setfirst(!show);
                        }}>
                            <span></span>
                            <span className='my-2'></span>
                            <span></span>
                        </div>
                    </nav>
                </div>
                <div className="container-2 d-flex flex-grow-1 flex-column justify-content-center w-100">
                    <h2 className=' ff-roboto fw-700 text-72 lh-sm-86 text-white mb-0 text-center '>Changing the way games <span className='d-lg-block'>are made</span></h2>
                    <p className=' ff-roboto fw-400 text-24 lh-28 text-white mb-0 mt-3 text-center'>Redefining the future of play</p>
                </div>
            </header>
        </>
    )
}

export default Hero