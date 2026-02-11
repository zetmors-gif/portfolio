
import { useState, useEffect } from 'react';

export function TopMenu() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`mt-6 transition-opacity duration-1000  ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between min-h-62.5 md:h-60 gap-8">

                <div className="text-center md:text-left">
                    <h3 className="text-gray-500 text-[1px] md:text-base tracking-widest mb-2">
                        Junior Frontend developer
                    </h3>
                    <h1 className="font-bowler text-4xl sm:text-5xl md:text-6xl lg:text-5xl leading-tight">
                        Maxim Sokolov
                    </h1>
                </div>

                <div className="text-center md:text-right">
                    <div className="flex justify-center md:justify-end">
                        <p className="font-bowler text-gn text-3xl md:text-4xl">LET'S</p>
                    </div>
                    <p className="font-bowler text-3xl md:text-4xl leading-tight">
                        WORK TOGETHER
                    </p>
                </div>
            </div>
        </div>
    );
}
