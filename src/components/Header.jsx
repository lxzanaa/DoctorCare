import React, { useState, useEffect } from 'react';
import Menu from './Menu';

function Header() {
    const [modalisopen, setmodalisopen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('#Início');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            const sections = document.querySelectorAll('section');
            sections.forEach((section) => {
                if (window.scrollY > section.offsetTop - 50 && window.scrollY < section.offsetTop + section.offsetHeight - 50) {
                    setActiveLink(`#${section.id}`);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (e) => {
        setActiveLink(e.target.getAttribute('href'));
    };

    return (
        <div>
            <header className={`transition-colors duration-300 ${isScrolled ? 'bg-[#00856F] text-white fixed top-0 left-0 w-full z-50 pt-4 pb-3' : 'bg-[#DCE9E2] text-black pt-4 pb-3'}`}>
                <div className="max-w-[1180px] animate__animated animate__fadeInDown px-5 mx-auto flex items-center justify-between text-center">
                    <a href="index.html" className={`lg:text-4xl md:text-3xl text-2xl ${isScrolled ? 'text-white' : 'text-black'}`}>
                        Doctor<span id="care" className={`${isScrolled ? 'text-white' : 'text-[#00856F]'} font-semibold`}>Care</span>
                    </a>
                    <div>
                        <ul className="md:flex items-center gap-8 hidden">
                            {['#Início', '#Serviços', '#Sobre', '#Depoimentos'].map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link}
                                        onClick={handleClick}
                                        className={`text-base leading-5 border-b-transparent border-b pb-[23px] ${activeLink === link ? (isScrolled ? 'active_2' : 'header_active') : ''} ${isScrolled ? 'text-white' : 'text-[#00856F]'}`}
                                    >
                                        {link.substring(1)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <a id="header__btn" className={`header_btn_hover justify-center py-3 px-6 bg-transparent rounded-full border ${isScrolled ? 'text-white border-white' : 'text-[#00856F] border-[#00856F]'} md:inline-flex hidden text-sm leading-5 font-bold uppercase`}>
                        Agendar consulta
                    </a>
                    <button onClick={() => setmodalisopen(true)} id="mobile_open" className={`md:hidden flex cursor-pointer ${isScrolled ? 'text-white' : 'text-[#00856F]'} active:opacity-80`}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 20H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 12H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18 28L30 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </header>
            <Menu modalisopen={modalisopen} setmodalisopen={setmodalisopen} />
        </div>
    );
}

export default Header;
