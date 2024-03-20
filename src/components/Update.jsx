import React from 'react'

function Update() {
    return (
        <>
            <section className='bg-update bg-black mt_2 d-flex'>
                <div className="container-2 d-flex flex-column flex-grow-1 justify-content-center">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <div className="update-box">
                                <p className=' ff-roboto fw-700 text-52 lh-md-62 text-white mb-0'>Get updated with us</p>
                                <div className="row mt-4">
                                    <div className="col-12 col-sm-6">
                                        <p className=' ff-roboto fw-500 text-16 lh-18 text-white mb-0'>Frist Name</p>
                                        <div className="form-box mt-2">
                                            <input type="text" className='form-input ff-roboto fw-400 text-14 lh-20 text-white' placeholder="Park Seijun" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 mt-4 mt-sm-0">
                                        <p className=' ff-roboto fw-500 text-16 lh-18 text-white mb-0'>Last Name</p>
                                        <div className="form-box mt-2">
                                            <input type="text" className='form-input ff-roboto fw-400 text-14 lh-20 text-white' placeholder="Sejiun" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-12 col-sm-6">
                                        <p className=' ff-roboto fw-500 text-16 lh-18 text-white mb-0'>Phone Number</p>
                                        <div className="form-box mt-2">
                                            <input type="number" className='form-input ff-roboto fw-400 text-14 lh-20 text-white' placeholder="+12 5858526478" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 mt-4 mt-sm-0">
                                        <p className=' ff-roboto fw-500 text-16 lh-18 text-white mb-0'>Email</p>
                                        <div className="form-box mt-2">
                                            <input type="email" className='form-input ff-roboto fw-400 text-14 lh-20 text-white' placeholder="Park@458@Gmail.com" />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex gap-3 align-items-baseline mt-3">
                                    <input type="checkbox" className='input-box' />
                                    <p className=' ff-roboto fw-400 text-18 lh-21 text-white mb-0 max-w-547'>By sending this form I confirm that I have read and accept the Privacy Policy</p>
                                </div>
                                <button className='sub-btn ff-roboto fw-500 text-16 lh-18 mb-0 text-white mt-4'>Subscribe</button>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 d-flex flex-column justify-content-center mt-4 mt-lg-0">
                            <p className=' ff-roboto fw-400 text-24 lh-2813 text-white mb-0'>Stay updated</p>
                            <p className=' ff-roboto fw-400 text-16 lh-24 text-white mb-0 op-7 mt-12'>At 248 Labs, our constant pursuit is to build engaging games that spared joy. Don’t hesitate to reach out to us with your thoughts and messages - we are all ears!</p>
                            <p className=' ff-roboto fw-400 text-24 lh-2813 text-white mb-0 mt-38'>Address</p>
                            <p className=' ff-roboto fw-400 text-16 lh-24 text-white mb-0 op-7 mt-12'>390 Orchard Road, 03-07, Palais Renaissance.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Update