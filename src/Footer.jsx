import { useState } from "react"

export function Footer() {

    const [email, setEmail] = useState('')

    function onSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        fetch("https://formcarry.com/s/LA-2l-_mHVj", {
            method: 'POST',
            headers: { 
            "Accept": "application/json",
            "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        })
        .then(response => response.json())
        .then(response => {
            if (response.code === 200) {
            alert("We received your submission, thank you!");
            } else {
            alert("Error: " + response.message);
            }
        })
        .catch(error => {
            alert("Network error: " + error);
        }); 
    }

    return (
        <div className="px-4 md:px-10 max-w-337.5 mx-auto">
            <div className="border-b border-b-gray-500"></div>
            

            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mt-5 gap-10">

                <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
                    <h1 className="text-[20px] md:text-[33px] font-bowler font-bold mb-6 leading-tight text-left lg:text-center">
                        LET'S WORK TOGETHER
                    </h1>
                    
                    <form className="w-full max-w-md" onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium mb-4">
                                Enter your email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="shadow-custom border border-gray-700 bg-black rounded-lg p-3 w-full focus:outline-none focus:ring-1 focus:ring-gn text-white"
                                placeholder="example@example.com"
                                required
                            />
                        </div>
                        <button className="bg-[#474747] shadow-custom px-6 py-3 rounded-lg font-medium w-full hover:bg-gn hover:text-black transition-all duration-300">
                            To send
                        </button>
                    </form>
                </div>
                

                <div className="w-full lg:w-1/2">
                    <h1 className="flex lg:justify-end sm:justify-center font-bowler text-gn text-[28px] md:text-[33px] mb-8 lg:mb-30">
                        Contact information
                    </h1>
                

                    <div className="grid grid-cols-1 sm:place-items-center sm:grid-cols-3 gap-6 lg:gap-10 lg:justify-items-end">
                        <div className="flex flex-col">
                            <p className="text-[20px] font-bold">Email</p>
                            <a href="mailto:zetmors@gmail.com" className="whitespace-nowrap text-[14px] md:text-[18px] text-gray-500 mt-1 break-all hover:text-gn transition-colors">
                                zetmors@gmail.com
                            </a>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[20px] font-bold">Phone</p>
                            <p className="whitespace-nowrap text-[14px] md:text-[18px] text-gray-500 mt-1">+7 989 809 4680</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[20px] font-bold">Telegram</p>
                            <a href="https://t.me/ZetMors" target="_blank" rel="noreferrer" className="text-[14px] md:text-[18px] text-gray-500 mt-1 hover:text-gn transition-colors">
                                @zetmors
                            </a>
                        </div>
                    </div>

                </div>
            </div>


            <div className="border-t border-gray-800 mt-10"></div>
            <div className="flex flex-col md:flex-row justify-between py-8 items-center gap-4 text-center md:text-left">
                <div className="flex gap-5 text-gray-500 text-sm md:text-base">
                    <p className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</p>
                    <p className="hover:text-white cursor-pointer transition-colors">Privacy Policy</p>
                </div>
                <div className="text-gray-500 text-xs md:text-sm">
                    <p>© 2026 Sokolov Maxim. Frontend Developer. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
