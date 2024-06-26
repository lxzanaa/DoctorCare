import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="bg-[#00856F] md:py-20 py-[60px]">
                <div
                    className="wow animate__animated animate__fadeInUp max-w-[1180px] px-5 mx-auto md:flex items-center justify-between">
                    <div className="md:mb-0 mb-8">
                        <h2 className="text-white text-4xl mb-6">Doctor<span className="font-semibold">Care</span></h2>
                        <p className="text-[#FFFAF1] text-sm leading-5 mb-4">©2022 - DoctorCare.</p>
                        <p className="text-[#FFFAF1] text-sm leading-5">Todos os direitos reservados.</p>
                    </div>
                    <div>
                        <ul className="flex items-center gap-9">
                            <li><a
                                className="text-[#FFFAF1] flex hover:opacity-80 hover:bg-white hover:text-[#00856F] transition-all w-[42px] h-[42px] bg-transparent justify-center items-center rounded-full"
                                target="_blank" href="https://www.instagram.com/">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M15.9997 11.3701C16.1231 12.2023 15.981 13.0523 15.5935 13.7991C15.206 14.5459 14.5929 15.1515 13.8413 15.5297C13.0898 15.908 12.2382 16.0397 11.4075 15.906C10.5768 15.7723 9.80947 15.3801 9.21455 14.7852C8.61962 14.1903 8.22744 13.4229 8.09377 12.5923C7.96011 11.7616 8.09177 10.91 8.47003 10.1584C8.84829 9.40691 9.45389 8.7938 10.2007 8.4063C10.9475 8.0188 11.7975 7.87665 12.6297 8.00006C13.4786 8.12594 14.2646 8.52152 14.8714 9.12836C15.4782 9.73521 15.8738 10.5211 15.9997 11.3701Z"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" />
                                </svg>
                            </a></li>
                            <li><a
                                className="text-[#FFFAF1] flex hover:opacity-80 hover:bg-white hover:text-[#00856F] transition-all w-[42px] h-[42px] bg-transparent justify-center items-center rounded-full"
                                target="_blank" href="https://www.facebook.com/">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a></li>
                            <li><a
                                className="text-[#FFFAF1] flex hover:opacity-80 hover:bg-white hover:text-[#00856F] transition-all w-[42px] h-[42px] bg-transparent justify-center items-center rounded-full"
                                target="_blank" href="https://www.youtube.com/">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M22.5396 6.42C22.4208 5.94541 22.1789 5.51057 21.8382 5.15941C21.4976 4.80824 21.0703 4.55318 20.5996 4.42C18.8796 4 11.9996 4 11.9996 4C11.9996 4 5.1196 4 3.3996 4.46C2.92884 4.59318 2.50157 4.84824 2.16094 5.19941C1.82031 5.55057 1.57838 5.98541 1.4596 6.46C1.14481 8.20556 0.990831 9.97631 0.999595 11.75C0.988374 13.537 1.14236 15.3213 1.4596 17.08C1.59055 17.5398 1.8379 17.9581 2.17774 18.2945C2.51758 18.6308 2.93842 18.8738 3.3996 19C5.1196 19.46 11.9996 19.46 11.9996 19.46C11.9996 19.46 18.8796 19.46 20.5996 19C21.0703 18.8668 21.4976 18.6118 21.8382 18.2606C22.1789 17.9094 22.4208 17.4746 22.5396 17C22.852 15.2676 23.0059 13.5103 22.9996 11.75C23.0108 9.96295 22.8568 8.1787 22.5396 6.42Z"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.75 15.02L15.5 11.75L9.75 8.47998V15.02Z" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer