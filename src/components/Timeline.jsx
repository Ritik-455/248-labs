import React from 'react'
import Image from 'next/image'

function Timeline() {
    return (
        <>
            <section className=' bg-black mt_2 position-relative overflow-hidden bg-roadmap' id="roadmap">
                <div className="container-2 pt-25 d-flex flex-column">
                    <div className="d-flex justify-content-center"><button className="team-btn"><span className='text-gradient ff-roboto fw-400 text-16 lh-192'>Road map</span></button></div>
                    <p className=' ff-roboto fw-700 text-52 lh-62 text-center mb-0 text-white mt-3'>Milestones and markers</p>
                    <div class="timeline mt-90 position-relative w-100">
                        <div class="container-timeline right pt-81">
                            <div class="content position-relative overflow-hidden">
                                <h2 className=' ff-roboto fw-400 text-24 lh-2813 text-gradient mb-0 text-center'>Oct 2014</h2>
                                <p className=' ff-roboto fw-400 text-24 lh-2813 text-white mb-0 text-center text-capitalize op-7'>Hired our first employee</p>
                                <div className="timeline-box-ellips position-absolute timeline-ellips-pos"></div>
                            </div>
                        </div>
                        <div class="container-timeline left">
                            <div class="content position-relative overflow-hidden">
                                <h2 className=' ff-roboto fw-400 text-24 lh-2813 text-gradient mb-0 text-center'>Nov 2014</h2>
                                <p className=' ff-roboto fw-400 text-24 lh-2813 text-white mb-0 text-center op-7'>Launched Bitcoin wallet</p>
                                <div className="timeline-box-ellips position-absolute timeline-ellips-pos"></div>
                            </div>
                        </div>
                        <div class="container-timeline right">
                            <div class="content position-relative overflow-hidden">
                                <h2 className=' ff-roboto fw-400 text-24 lh-2813 text-gradient mb-0 text-center'>Oct 2015</h2>
                                <p className=' ff-roboto fw-400 text-24 lh-2813 text-white mb-0 text-center op-7'>1st prize by Bit angels at Coin Agenda, Las Vegas</p>
                                <div className="timeline-box-ellips position-absolute timeline-ellips-pos"></div>
                            </div>
                        </div>
                        <div class="container-timeline left">
                            <div class="content position-relative overflow-hidden">
                                <h2 className=' ff-roboto fw-400 text-24 lh-2813 text-gradient mb-0 text-center'>Jan 2020</h2>
                                <div className="d-flex gap-3 align-items-center justify-content-center">
                                    <p className=' ff-roboto fw-400 text-24 lh-2813 text-white mb-0 text-center op-7'>launch On
                                    </p>
                                    <Image
                                        src="/images/indian.svg"
                                        alt='india'
                                        width={21}
                                        height={21} />
                                    <Image
                                        src="/images/australia.svg"
                                        alt='india'
                                        width={21}
                                        height={21} />
                                    <Image
                                        src="/images/USA.svg"
                                        alt='india'
                                        width={21}
                                        height={21} />
                                </div>
                                <div className="timeline-box-ellips position-absolute timeline-ellips-pos"></div>
                            </div>
                        </div>
                        <div class="container-timeline right">
                            <div class="content position-relative overflow-hidden">
                                <h2 className=' ff-roboto fw-400 text-24 lh-2813 text-gradient mb-0 text-center'>Jan 2022</h2>
                                <p className=' ff-roboto fw-400 text-24 lh-2813 text-white mb-0 text-center op-7'>Trusted by 10 Millions+ Users</p>
                                <div className="d-flex justify-content-center">
                                    <Image
                                        src="/images/star.svg"
                                        alt='india'
                                        width={151}
                                        height={30} />
                                </div>
                                <div className="timeline-box-ellips position-absolute timeline-ellips-pos"></div>
                            </div>
                        </div>
                        <div className="position-absolute svg-pos z-1">
                            <Image
                                src="/images/timeline-svg.svg"
                                alt='india'
                                width={104}
                                height={104} />
                        </div>
                    </div>
                </div>
                <p className=' ff-roboto fw-700 text-187 lh-224 color-lightgrey text-pos3 position-absolute mb-0 d-none d-xxl-block'>Roadmap</p>
                <div className="about-ellips position-absolute top-timeline-ellips d-none d-lg-block"></div>
            </section>
        </>
    )
}

export default Timeline