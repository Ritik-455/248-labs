'use client'
import React from 'react'
import Image from "next/image";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function About() {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 3000,
        autoplaySpeed: 0,
        slidesToShow: 5,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className=' bg-black mt_2 position-relative overflow-hidden' id="about">
                <div className="container-2 pt-23 pb-167">
                    <Slider {...settings}>
                        <div className="  d-flex justify-content-center align-items-end h-76">
                            < Image
                                src="/images/aridacious.png"
                                alt='ardacious'
                                width={229}
                                height={32}
                                className='slider-img cursor-pointer'
                            />
                        </div>
                        <div className="  d-flex justify-content-center align-items-end h-76">
                            < Image
                                src="/images/twitch.png"
                                alt='ardacious'
                                width={102}
                                height={74}
                                className='slider-img cursor-pointer'
                            />
                        </div>
                        <div className="  d-flex justify-content-center align-items-end h-76">
                            < Image
                                src="/images/game.png"
                                alt='ardacious'
                                width={235}
                                height={76}
                                className='slider-img cursor-pointer'
                            />
                        </div>
                        <div className="  d-flex justify-content-center align-items-end h-76">
                            < Image
                                src="/images/thorn.png"
                                alt='ardacious'
                                width={232}
                                height={48}
                                className='slider-img cursor-pointer'
                            />
                        </div>
                        <div className="  d-flex justify-content-center align-items-end h-76">
                            < Image
                                src="/images/twitch.png"
                                alt='ardacious'
                                width={102}
                                height={74}
                                className='slider-img cursor-pointer'
                            />
                        </div>
                    </Slider>
                </div>
                <div className="container-2 py-50">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <button className="about-btn ff-roboto fw-400 text-16 lh-192 mt-3">
                                <span className=' text-gradient'>DOERS OVER TALKERS</span>
                            </button>
                            <p className=' ff-roboto fw-700 text-52 lh-62 text-white mb-0 mt-3'>Game <span className="d-xl-block">First.Always.</span></p>
                        </div>
                        <div className="col-12 col-md-6 mt-md-5">
                            <p className=' ff-roboto fw-500 text-18 lh-21 text-white mb-0'>This is difficult</p>
                            <p className=' ff-roboto fw-400 text-16 lh-24 text-white op-7 mb-0 mt-12'>Web3 Games have a notoriously high barrier-to-entry for casual gamers who make up the vast majority of players. 	&quot;Link your wallet	&quot; before gameplay is not just off-putting, it&apos;s boring. We&apos;re solving that with <span className='fw-600'> world-class storytelling,</span> world-building, game design, art and sound. And fun.</p>
                        </div>
                    </div>
                    <div className="row pt-42">
                        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center d-lg-block">
                            <div className="build-card overflow-hidden position-relative">
                                <h3 className=' ff-roboto fw-700 text-32 lh-38 text-white mb-0'>World Building</h3>
                                <p className=' ff-roboto fw-400 text-16 lh-24 text-white mb-0 op-7 mt-3'>Every pixel, every character, every puzzle is a testament to the harmonious marriage of imagination and engineering precision</p>
                                <div className="box-ellips position-absolute btm-23"></div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center d-lg-block">
                            <div className="build-card overflow-hidden position-relative mt-40 mt-md-0">
                                <h3 className=' ff-roboto fw-700 text-32 lh-38 text-white mb-0'>Game Design</h3>
                                <p className=' ff-roboto fw-400 text-16 lh-24 text-white mb-0 op-7 mt-3'>Every frame becomes a brushstroke, every motion a choreographed dance, contributing to a symphony of visuals that captivate players&apos; senses and ignite their imagination.</p>
                                <div className="box-ellips position-absolute btm-23"></div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 d-flex justify-content-center d-lg-block mt-66 mt-lg-0 ">
                            <div className="build-card overflow-hidden position-relative ">
                                <h3 className=' ff-roboto fw-700 text-32 lh-38 text-white mb-0'>Art and Sound</h3>
                                <p className=' ff-roboto fw-400 text-16 lh-24 text-white mb-0 op-7 mt-3'>In the realm of game design, art and animation are the storytellers, whispering tales of wonder and excitement, etching memories that linger long after the controller is set down.</p>
                                <div className="box-ellips position-absolute btm-23"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className=' ff-roboto fw-700 text-187 lh-224 color-lightgrey text-pos position-absolute mb-0 d-none d-xxl-block'>About Us</p>
                <div className="about-ellips position-absolute ellips-about-pos d-none d-xxl-block"></div>
            </section>

        </>
    )
}

export default About