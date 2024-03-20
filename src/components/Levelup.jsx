import React from 'react'
import Image from "next/image";

function Levelup() {
    return (
        <>
            <section className='bg-play mt_2 d-flex flex-column '>
                <div className="container-2 w-100 d-flex justify-content-center justify-content-lg-end align-items-center flex-grow-1 ">
                    <div className="level-up-box">
                        <h3 className=' ff-roboto fw-700 text-52 lh-md-67 text-white mb-0'>Level up your gaming experience</h3>
                        <button className='play-btn ff-roboto fw-700 text-18 lh-27 text-white mt-32'>Play Unvilled</button>
                    </div>
                </div>
            </section>
            <section className="bg-black position-relative">
                <div className="container-2 py-22">
                    < Image
                        src="/images/domaine-img.png"
                        alt='logo'
                        width={1140}
                        height={422}
                        className='w-100 h-100 position-relative z-1'
                    />
                    <div className="row mt-4">
                        <div className="col-12 col-md-4">
                            <div className="d-flex justify-content-between d-md-block">
                                <button className=' ff-roboto fw-700 text-18 lh-27 text-white name-btn'>name@domain.com</button>
                                <button className=' ff-roboto fw-700 text-18 lh-27 text-white move-btn mt-md-4'>Make Your Move</button>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 mt-4 mt-md-0">
                            <p className=' ff-roboto fw-400 text-16 lh-24 mb-0 color-grey'>Unveiled is a unique <span className='fw-600 text-white'>collectible card game</span> in which you gain fervour for your ventures, spending it on mercenaries, spies, automata, and influence.</p>
                            <p className='ff-roboto fw-400 text-16 lh-24 mb-0 color-grey mt-2'>You play<span className='fw-600 text-white'> A Rogue Merchant Trader</span> allied to a noble house, alongside your <span className='fw-600 text-white'> cryptid-humanoid companions</span> in a game of ambition and alliance, deception and miracles, and annihilation. Bells chime in the harbour, and markets are opening. Guards have swept the streets of the more obvious  dangers.</p>
                            <p className='ff-roboto fw-400 text-16 lh-24 mb-0 text-white mt-2'>What’s your next move?</p>
                        </div>
                    </div>
                </div>
                <div className="container-2 mt-4 mt-lg-0">
                    <p className=' ff-roboto fw-700 text-52 lh-md-62 text-center text-white mb-0'>A rich, inhabited, and licensable world.</p>
                    <div className="position-relative">
                        < Image
                            src="/images/inhabited.png"
                            alt='logo'
                            width={1140}
                            height={459}
                            className='w-100 mt-11 object-fit-cover object-fit-xl-contain position-relative z-1'
                        />
                        <div className="position-absolute play-btn-pos">
                            <svg className=' cursor-pointer' width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="37.9999" cy="38.3456" r="37.7616" fill="white" fill-opacity="0.41" />
                                <path d="M51.8164 37.48C52.4831 37.8649 52.4831 38.8272 51.8164 39.2121L32.0976 50.5968C31.4309 50.9817 30.5976 50.5005 30.5976 49.7307L30.5976 26.9614C30.5976 26.1916 31.4309 25.7105 32.0976 26.0954L51.8164 37.48Z" fill="url(#paint0_linear_2003_456)" />
                                <defs>
                                    <linearGradient id="paint0_linear_2003_456" x1="52.4509" y1="23.2002" x2="17.6861" y2="41.9989" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#D4145A" />
                                        <stop offset="1" stop-color="#FBB03B" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <p className=' font-roboto fw-400 text-16 lh-24 lts-12 text-white op-7 mb-0 text-lg-center mt-4'> Illustrated with original artwork and a cinematic score, destined not only for mobile and desktop gaming <span className='d-lg-block'> but also for film and television, events, merchandising, and partnerships. </span></p>
                    <div className="about-ellips position-absolute card-ellips-pos d-none d-lg-block"></div>
                    <div className="gradient-ellips position-absolute rich-ellips-pos d-none d-lg-block"></div>
                </div>
            </section>
        </>
    )
}

export default Levelup