import React from 'react'
import Pic from '../img/Pic.png'

function Sobre() {
    return (
        <div>
            <section id="Sobre" className="bg-[#FFFAF1] md:py-40 py-[100px]">
                <div className="max-w-[1180px] px-5 mx-auto md:flex items-center justify-between gap-16">
                    <div className="wow animate__animated animate__backInLeft">
                        <img className="max-w-[480px] w-full md:mb-0 md:flex hidden" src={Pic} alt="picture" />
                    </div>
                    <div className="md:mb-0 mb-16 wow animate__animated animate__backInRight">
                        <p className="text-[#00856F] font-bold text-sm leading-5 mb-3 uppercase">SOBRE NÓS</p>
                        <h2 className="text-[#212529] font-bold text-[30px] md:text-[40px] leading-10 md:leading-[52.08px] mb-6">Entenda
                            quem somos <br/> e por que
                                existimos</h2>
                        <p className="max-w-[573px] text-[#495057] text-base leading-6">Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat duis enim.
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                    </div>

                    <div>
                        <img className="max-w-[480px] w-full md:mb-0 md:hidden flex" src={Pic} alt="picture" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sobre