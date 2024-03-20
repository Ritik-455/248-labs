import React from 'react'
import Image from "next/image";

function Team() {
    return (
        <>
            <section className=' bg-black mt_2 position-relative overflow-hidden' id="team">
                <div className="container-2 pt-44 pb-86">
                    <div className="d-flex justify-content-center"><button className="team-btn"><span className='text-gradient ff-roboto fw-400 text-16 lh-192'> Our Team</span></button></div>
                    <h2 className=' ff-roboto fw-700 text-52 lh-62 text-white mb-0 text-center mt-3'>Behind our expertise</h2>
                    <div className="row mt-61">
                        <div className="col-12 col-lg-6 d-flex justify-content-center">
                            <div className="expertise-card overflow-hidden position-relative">
                                <div className="d-flex gap-12 flex-wrap flex-sm-nowrap align-items-center">
                                    <Image
                                        src="/images/expert-1.png"
                                        alt="expert-1"
                                        height="198"
                                        width="236" />
                                    <div className="">
                                        <p className=' ff-roboto fw-600 text-20 lh-24 text-white mb-0'>James Vuong <span className=' fw-400 text-16 lh-192 text-gradient'>(Co-CEO)</span></p>
                                        <p className=' ff-roboto fw-400 text-16 lh-24 text-white mb-0 op-7 mt-12'>James is a dynamic CEO leading two thriving companies. He co-founded ROOMERANG, elevating it from $0 to $8 million in annual net revenue in just 5 years. Additionally, as a co-founder of KEYNINJA, James achieved an </p>
                                    </div>
                                </div>
                                <p className=' ff-roboto fw-400 text-16 lh-24 text-white mb-0 op-7 mt-2'>impressive 50% year-over-year net revenue growth within the same timeframe. With a background in property valuation, sales, and technology, James brings a unique blend of skills to drive innovation and success in both ventures.
                                </p>
                                <div className="expert-ellips position-absolute"></div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center mt-4 mt-lg-0">
                            <div className="expertise-card overflow-hidden position-relative">
                                <div className="d-flex gap-12 flex-wrap flex-sm-nowrap align-items-center">
                                    <Image
                                        src="/images/yong.png"
                                        alt="expert-1"
                                        height="198"
                                        width="236" />
                                    <div className="">
                                        <p className=' ff-roboto fw-600 text-20 lh-24 text-white mb-0'>Tricia Yong <span className=' fw-400 text-16 lh-192 text-gradient'>(Co-CEO)</span></p>
                                        <p className=' ff-roboto fw-400 text-16 lh-24 text-white mb-0 op-7 mt-12'>Tricia is a Marketing Director with 15 years of expertise, co-founded ROOMERANG and KEYNINJA with James Vuong, bringing a wealth of knowledge from the tech industry, property valuation, and consumer  </p>
                                    </div>
                                </div>
                                <p className=' ff-roboto fw-400 text-16 lh-24 text-white mb-0 op-7 mt-2'>products. With a background in consumer behavior, UI/UX design, and marketing strategies, she adeptly navigates the convergence of technology and marketing. Tricia is renowned for crafting compelling narratives that deeply resonate with both business clients and consumers, propelling the company to success in the ever-evolving tech landscape.
                                </p>
                                <div className="expert-ellips position-absolute"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-lg-6 d-flex justify-content-center">
                            <div className="expertise-card overflow-hidden position-relative">
                                <div className="d-flex gap-12 flex-wrap flex-sm-nowrap align-items-center">
                                    <Image
                                        src="/images/kevin.png"
                                        alt="expert-1"
                                        height="198"
                                        width="236" />
                                    <div className="">
                                        <p className=' ff-roboto fw-600 text-20 lh-24 text-white mb-0'>Kevin Li <span className=' fw-400 text-16 lh-192 text-gradient'>(CFO)</span></p>
                                        <p className=' ff-roboto fw-400 text-16 lh-24 text-white mb-0 op-7 mt-12'>Kev is a seasoned CFO with 15 years of expertise in the Big Pharma sector, demonstrated his leadership by establishing a successful branch office in Myanmar, overseeing its growth to 70 employees in just 24 months. His</p>
                                    </div>
                                </div>
                                <p className=' ff-roboto fw-400 text-16 lh-24 text-white mb-0 op-7 mt-2'>strategic pricing initiatives for life-saving medications not only gained eligibility onto the government reimbursement list in Singapore, Sri Lanka, and the Maldives but also significantly alleviated the financial burden on patients grappling with the costs of disease.
                                </p>
                                <div className="expert-ellips position-absolute"></div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center mt-4 mt-lg-0">
                            <div className="expertise-card overflow-hidden position-relative">
                                <div className="d-flex gap-12 flex-wrap flex-sm-nowrap align-items-center">
                                    <Image
                                        src="/images/ryan.png"
                                        alt="expert-1"
                                        height="198"
                                        width="236" />
                                    <div className="">
                                        <p className=' ff-roboto fw-600 text-20 lh-24 text-white mb-0'>Ryan Ang <span className=' fw-400 text-16 lh-192 text-gradient'>(Lorem Ipsum)</span></p>
                                        <p className=' ff-roboto fw-400 text-16 lh-24 text-white mb-0 op-7 mt-12'>Experienced in investing in traditional equity markets and blockchain companies. Early adopter of digital assets and co-founded a decentralised finance application that provides walletservices, swaps and DeFi  </p>
                                    </div>
                                </div>
                                <p className=' ff-roboto fw-400 text-16 lh-24 text-white mb-0 op-7 mt-2'>products. Previously in the private equity arm of one of Singapore’s leading asset management funds, Dymon Asia Capital. Previously the fund manager at Blockchain Ventures.
                                </p>
                                <div className="expert-ellips position-absolute"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-lg-6 d-flex justify-content-center">
                            <div className="expertise-card overflow-hidden position-relative">
                                <div className="d-flex gap-12 flex-wrap flex-sm-nowrap align-items-center">
                                    <Image
                                        src="/images/dylan.png"
                                        alt="expert-1"
                                        height="198"
                                        width="236" />
                                    <div className="">
                                        <p className=' ff-roboto fw-600 text-20 lh-24 text-white mb-0'>Dylan <span className=' fw-400 text-16 lh-192 text-gradient'>(Executive Producer)</span></p>
                                        <p className=' ff-roboto fw-400 text-16 lh-24 text-white mb-0 op-7 mt-12'>Lorem ipsum dolor sit amet consectetur. Quis in ullamcorper molestie velit proin est. Vestibulum eget eu in egestas. Consequat mi consequat eu eu id integer est. Eget at egestas morbi vitae platea imperdiet sed egestas dignissim.</p>
                                    </div>
                                </div>
                                <p className=' ff-roboto fw-400 text-16 lh-24 text-white mb-0 op-7 mt-2'>Lorem ipsum dolor sit amet consectetur. Amet erat condimentum.
                                </p>
                                <div className="expert-ellips position-absolute"></div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center mt-4 mt-lg-0">
                            <div className="expertise-card overflow-hidden position-relative">
                                <div className="d-flex gap-12 flex-wrap flex-sm-nowrap align-items-center">
                                    <Image
                                        src="/images/ralf.png"
                                        alt="expert-1"
                                        height="198"
                                        width="236" />
                                    <div className="">
                                        <p className=' ff-roboto fw-600 text-20 lh-24 text-white mb-0'>Ralf <span className=' fw-400 text-16 lh-192 text-gradient'>(Lorem Ipsum)</span></p>
                                        <p className=' ff-roboto fw-400 text-16 lh-24 text-white mb-0 op-7 mt-12'>Lorem ipsum dolor sit amet consectetur. Cursus vulputate facilisis mattis diam consectetur molestie ultrices. Laoreet sagittis facilisis consequat dignissim viverra etiam gravida. Eu cursus scelerisque purus pharetra enim.</p>
                                    </div>
                                </div>
                                <p className=' ff-roboto fw-400 text-16 lh-24 text-white mb-0 op-7 mt-2'>Lorem ipsum dolor sit amet consectetur. Donec amet mattis sit fermentum. Cursus at sed commodo ac mattis feugiat vel faucibus iaculis. Id congue egestas sit leo placerat. Ipsum a feugiat massa fringilla justo consectetur. Eu euismod viverra ut porttitor sed leo. Eget viverra etiam sit nunc.
                                </p>
                                <div className="expert-ellips position-absolute"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-lg-6 d-flex justify-content-center">
                            <div className="expertise-card overflow-hidden position-relative">
                                <div className="d-flex gap-12 flex-wrap flex-sm-nowrap align-items-center">
                                    <Image
                                        src="/images/jordan.png"
                                        alt="expert-1"
                                        height="198"
                                        width="236" />
                                    <div className="">
                                        <p className=' ff-roboto fw-600 text-20 lh-24 text-white mb-0 text-xl-nowrap'>Jordan Stratford <span className=' fw-400 text-16 lh-192 text-gradient'>(Creative Director)</span></p>
                                        <p className=' ff-roboto fw-400 text-16 lh-24 text-white mb-0 op-7 mt-12'>Jordan is an international best-selling author of the Wollstonecraft Detective Agency series with Penguin Random House, which was adapted to a mobile game for iOS, Android, and Nintendo Switch, and is in development</p>
                                    </div>
                                </div>
                                <p className=' ff-roboto fw-400 text-16 lh-24 text-white mb-0 op-7 mt-2'>for television with the world’s largest streaming producer.
                                </p>
                                <div className="expert-ellips position-absolute"></div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center mt-4 mt-lg-0">
                            <div className="expertise-card overflow-hidden position-relative">
                                <div className="d-flex gap-12 flex-wrap flex-sm-nowrap align-items-center">
                                    <Image
                                        src="/images/jae.png"
                                        alt="expert-1"
                                        height="198"
                                        width="236" />
                                    <div className="">
                                        <p className=' ff-roboto fw-600 text-20 lh-24 text-white mb-0'>Jae Sik Choi <span className=' fw-400 text-16 lh-192 text-gradient'>(Lorem Ipsum)</span></p>
                                        <p className=' ff-roboto fw-400 text-16 lh-24 text-white mb-0 op-7 mt-12'>Early adopter of digital assets since 2011, founded Garuda Crypto, The Cryptocurrency Fund Project and Kalian Cryptocurrency Fund, along with being deeply experienced in DeFi and dApps since 2019. Previously an ex-NAB</p>
                                    </div>
                                </div>
                                <p className=' ff-roboto fw-400 text-16 lh-24 text-white mb-0 op-7 mt-2'>Specialised Transaction Management Associate, experienced in fixed income structured products, KYC/AML, FATCA and CRS reporting. Holds a Master of Applied Finance from Monash University.
                                </p>
                                <div className="expert-ellips position-absolute"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className=' ff-roboto fw-700 text-187 lh-224 color-lightgrey text-pos2 position-absolute mb-0 d-none d-xxl-block'>Our Team</p>
                <div className="gradient-ellips position-absolute team-right-ellips-pos d-none d-lg-block"></div>
                <div className="gradient-ellips position-absolute team-left-ellips-pos d-none d-lg-block"></div>
            </section>
            <section className='bg-next bg-black d-flex mt_2'>
                <div className="container-2 d-flex flex-grow-1 flex-column justify-content-center">
                    <h3 className=' ff-roboto fw-700 text-52 lh-md-62 text-white mb-0 text-center'>What’s Next</h3>
                    <p className=' ff-roboto fw-600 text-16 lh-24 text-white mb-0 text-center mt-3'>92% of gamers have never even tried a Web3 game. We’re going to change that.</p>
                    <p className=' ff-roboto fw-400 text-16 lh-24 text-white mb-0 text-center mt-12'> 248Labs The market is worth about a gazillion dollars, so whatever those stats were, that goes here.</p>
                    <div className="d-flex justify-content-center mt-34"><button className="move-btn ff-roboto fw-700 text-24 lh-288 text-white">Try to keep up</button></div>
                </div>
            </section>
        </>
    )
}

export default Team