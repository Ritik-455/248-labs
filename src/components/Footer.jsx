import React from 'react'
import Image from 'next/image'

function Footer() {
    return (
        <>
            <footer className='bg-black mt_2 position-relative overflow-hidden'>
                <div className="container-2 d-flex  justify-content-center">
                    <div className="max-w-287">
                        <div className="d-flex justify-content-center">
                            <Image
                                src="/images/logo.svg"
                                alt='logo'
                                width={270}
                                height={55}
                                className='cursor-pointer'
                            />
                        </div>
                        <ul className='d-flex gap-4 mt-3'>
                            <li><a href="#home" className=' ff-roboto fw-400 text-16 lh-18 text-white mb-0 line_nav op-7'>Home</a></li>
                            <li><a href="#roadmap" className=' ff-roboto fw-400 text-16 lh-18 text-white mb-0 line_nav op-7'>Roadmap</a></li>
                            <li><a href="#team" className=' ff-roboto fw-400 text-16 lh-18 text-white mb-0 line_nav op-7'>Team</a></li>
                            <li><a href="#about" className=' ff-roboto fw-400 text-16 lh-18 text-white mb-0 line_nav op-7'>About Us</a></li>
                        </ul>
                        <div className="d-flex gap-3 justify-content-center mt-3">
                            <a href="https://twitter.com/?lang=en" target='_blank'>
                                <div className="icon-box d-flex justify-content-center align-items-center">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.14255 0.839844H0.0151367L7.24549 11.0165L0.409042 19.3194H2.72871L8.32041 12.5291L13.1453 19.3194H19.2727L11.7378 8.71396L18.2223 0.839844H15.9027L10.6628 7.20234L6.14255 0.839844ZM14.0207 17.4714L3.51652 2.68779H5.26721L15.7713 17.4714H14.0207Z" fill="white" />
                                    </svg>
                                </div>
                            </a>
                            <a href="https://www.facebook.com/" target='_blank'>
                                <div className="icon-box d-flex justify-content-center align-items-center">
                                    <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.52891 21.8646V11.7444H0.844666V8.10064H3.52891V4.9884C3.52891 2.54277 5.1145 0.296875 8.76804 0.296875C10.2473 0.296875 11.3411 0.438251 11.3411 0.438251L11.255 3.84091C11.255 3.84091 10.1394 3.83008 8.92207 3.83008C7.60455 3.83008 7.39347 4.43538 7.39347 5.44002V8.10064H11.3597L11.1871 11.7444H7.39347V21.8646H3.52891Z" fill="white" />
                                    </svg>
                                </div>
                            </a>
                            <a href="https://www.instagram.com/" target='_blank'>
                                <div className="icon-box d-flex justify-content-center align-items-center">
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.64262 5.48854C7.21557 5.48854 6.05099 6.65312 6.05099 8.08016C6.05099 9.50721 7.21557 10.6718 8.64262 10.6718C10.0697 10.6718 11.2342 9.50721 11.2342 8.08016C11.2342 6.65312 10.0697 5.48854 8.64262 5.48854ZM16.4156 8.08016C16.4156 7.00696 16.4253 5.94348 16.365 4.87222C16.3047 3.62793 16.0209 2.52362 15.111 1.61373C14.1992 0.701902 13.0968 0.419992 11.8525 0.359721C10.7793 0.299451 9.71582 0.309172 8.64456 0.309172C7.57136 0.309172 6.50788 0.299451 5.43662 0.359721C4.19233 0.419992 3.08802 0.703846 2.17813 1.61373C1.26629 2.52557 0.984384 3.62793 0.924113 4.87222C0.863843 5.94543 0.873564 7.00891 0.873564 8.08016C0.873564 9.15142 0.863843 10.2168 0.924113 11.2881C0.984384 12.5324 1.26824 13.6367 2.17813 14.5466C3.08996 15.4584 4.19233 15.7403 5.43662 15.8006C6.50982 15.8609 7.5733 15.8512 8.64456 15.8512C9.71776 15.8512 10.7812 15.8609 11.8525 15.8006C13.0968 15.7403 14.2011 15.4565 15.111 14.5466C16.0228 13.6348 16.3047 12.5324 16.365 11.2881C16.4272 10.2168 16.4156 9.15337 16.4156 8.08016ZM8.64262 12.0677C6.43594 12.0677 4.65505 10.2868 4.65505 8.08016C4.65505 5.87349 6.43594 4.0926 8.64262 4.0926C10.8493 4.0926 12.6302 5.87349 12.6302 8.08016C12.6302 10.2868 10.8493 12.0677 8.64262 12.0677ZM12.7935 4.86056C12.2783 4.86056 11.8622 4.4445 11.8622 3.92928C11.8622 3.41407 12.2783 2.99801 12.7935 2.99801C13.3087 2.99801 13.7248 3.41407 13.7248 3.92928C13.7249 4.05162 13.7009 4.17279 13.6542 4.28585C13.6074 4.39891 13.5389 4.50163 13.4524 4.58814C13.3658 4.67464 13.2631 4.74324 13.1501 4.78998C13.037 4.83673 12.9158 4.86071 12.7935 4.86056Z" fill="white" />
                                    </svg>
                                </div>
                            </a>
                            <a href="https://in.linkedin.com/" target='_blank'>
                                <div className="icon-box d-flex justify-content-center align-items-center">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.25731 4.00058C3.17327 4.00058 3.9158 3.25805 3.9158 2.34209C3.9158 1.42613 3.17327 0.683594 2.25731 0.683594C1.34135 0.683594 0.598816 1.42613 0.598816 2.34209C0.598816 3.25805 1.34135 4.00058 2.25731 4.00058Z" fill="white" />
                                        <path d="M3.91586 6.48828H0.598877V16.8539H3.91586V6.48828Z" fill="white" />
                                        <path d="M7.23358 10.4272V16.8539H10.1359V11.0491C10.1359 10.0126 10.7579 9.18333 11.7944 9.18333C12.831 9.18333 13.4529 10.2199 13.4529 11.0491V16.8539H16.3553V10.4272C16.3553 9.18333 14.9041 6.48828 11.7944 6.48828C8.68476 6.48828 7.23358 9.18333 7.23358 10.4272Z" fill="white" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-line mt-43"></div>
                <p className=' ff-roboto fw-400 text-14 lh-16 text-white op-6 mb-0 pt-3 pb-25 text-center'>© 2023 248 Labs. All rights reserved</p>
                <div className="about-ellips position-absolute d-none d-lg-block"></div>
                <div className="gradient-ellips position-absolute footer-right-ellips-pos d-none d-lg-block"></div>
            </footer>
        </>
    )
}

export default Footer