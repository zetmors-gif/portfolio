
import { useState, useEffect } from 'react';

export function Header() {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false); 

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 px-4 md:px-10 py-4 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <p className="text-gn text-2xl md:text-4xl font-bowler">ZETMORS</p>


                <nav className="hidden lg:flex justify-around w-1/2 bg-[#47474730] backdrop-blur-md rounded-4xl px-5">
                    <a href='#home' className="text-lg hover:text-[#8cee1d] px-4 py-1 transition-colors">Home</a>
                    <a href='#about' className="text-lg hover:text-[#8cee1d] px-4 py-1 transition-colors">About</a>
                    <a href='#portfolio' className="text-lg hover:text-[#8cee1d] px-4 py-1 transition-colors">Portfolio</a>
                    <a href='#services' className="text-lg hover:text-[#8cee1d] px-4 py-1 transition-colors">Services</a>
                </nav>

                <button className="hidden lg:block bg-[#47474730] px-6 py-2 rounded-4xl text-[#8cee1d] hover:scale-105 transition-transform">
                    Contact Me
                </button>


                <button className="lg:hidden text-[#8cee1d] text-3xl mb-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? '✕' : '☰'}
                </button>
            </div>


            {isOpen && (
                <div className="lg:hidden absolute top-13.75 right-0 w-40 bg-[#1a1a1a] flex flex-col items-center py-5 gap-3 animate-fadeIn">
                    <a href="#home" onClick={() => setIsOpen(false)} className="text-xl">Home</a>
                    <a href="#about" onClick={() => setIsOpen(false)} className="text-xl">About</a>
                    <a href="#portfolio" onClick={() => setIsOpen(false)} className="text-xl">Portfolio</a>
                    <button className="bg-gn text-black px-4 py-2 rounded-xl mt-0.5 text-ml mb-2">Contact Me</button>
                </div>
            )}
        </header>
    );
}
