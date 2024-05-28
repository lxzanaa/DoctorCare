import React from 'react';
import Check from '../img/hero/check-mark.svg';

function Servicos() {
    let data = [
        {
            id: 1,
            title: "Problemas digestivos",
            text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
            logo: Check,
            animation: 'animate__fadeInTopLeft'
        },
        {
            id: 2,
            title: "Saúde Hormonal",
            text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
            logo: Check,
            animation: 'animate__fadeInDown'
        },
        {
            id: 3,
            title: "Bem-estar mental",
            text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
            logo: Check,
            animation: 'animate__fadeInTopRight'
        },
        {
            id: 4,
            title: "Cuidados Pediátricos",
            text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
            logo: Check,
            animation: 'animate__fadeInBottomLeft'
        },
        {
            id: 5,
            title: "Autoimune e Inflamação",
            text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
            logo: Check,
            animation: 'animate__fadeInUp'
        },
        {
            id: 6,
            title: "Saúde do Coração",
            text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
            logo: Check,
            animation: 'animate__fadeInBottomRight'
        },
    ];

    return (
        <div>
            <section id="Serviços" className="md:pt-64 pt-[318px] md:pb-40 pb-14 bg-[#F7F9F9]">
                <div className="max-w-[1180px] px-5 mx-auto wow animate__animated animate__fadeIn">
                    <div className="text-center mb-16">
                        <p className="text-[#00856F] font-bold text-sm leading-5 mb-4">SERVIÇOS</p>
                        <h2 className="text-[#212529] font-bold md:text-[40px] text-3xl leading-9 md:leading-[52.08px]">
                            Como podemos <br className="md:hidden block" /> ajudá-lo <br className="md:block hidden" /> a se sentir melhor?
                        </h2>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
                        {data.map((item, index) => (
                            <div key={item.id} className={`wow animate__animated ${item.animation} p-6 bg-white rounded-md border-[#DCE9E2] border`}>
                                <img className="mb-4" src={item.logo} alt="check-mark" />
                                <h3 className="text-[#212529] font-bold text-2xl leading-8 mb-4">{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Servicos;
