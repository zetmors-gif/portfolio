

import { Footer } from "./Footer"
import { Header } from "./Header"
import { Main } from "./About"
import { Marquee } from "./Marquee"
import { Portfolio } from "./Portfolio"
import { Services } from "./Services"
import { TopMenu } from "./TopMenu"
import { Animations } from "./Animation"

function App() {

  return (
    <div className="flex flex-col">
      <Header />
      <main className="w-full">

        <section id="home" className="w-full">
          <Animations />
        </section>
        <div className="max-w-360 mx-auto px-4 md:px-10 lg:px-20 overflow-x-hidden">
          
          <section id="top">
            <TopMenu />
          </section>

          <div className="pb-10">
            <Marquee speed={30} direction="left">
              <p className="text-xl md:text-2xl text-gn font-bold mx-4 md:mx-8 italic">HTML</p>
              <p className="text-xl md:text-2xl text-gn font-bold mx-4 md:mx-8 italic">CSS</p>
              <p className="text-xl md:text-2xl text-gn font-bold mx-4 md:mx-8 italic">JAVASCRIPT</p>  
              <p className="text-xl md:text-2xl text-gn font-bold mx-4 md:mx-8 italic">REACT</p>
              <p className="text-xl md:text-2xl text-gn font-bold mx-4 md:mx-8 italic">TAILWIND</p>
              <p className="text-xl md:text-2xl text-gn font-bold mx-4 md:mx-8 italic">SCSS</p>
              <p className="text-xl md:text-2xl text-gn font-bold mx-4 md:mx-8 italic">PYTHON</p>
            </Marquee>
          </div>

          <section id="about" className="scroll-mt-24">
            <Main />
          </section>

          <section id="services" className="scroll-mt-24">
            <Services />
          </section>

          <section id="portfolio" className="scroll-mt-24">
            <Portfolio />
          </section>
        </div>
      </main>

      <section id="contact" className="w-full bg-[#000000] mt-20">
        <Footer />
      </section>
    </div>
  )}


export default App
