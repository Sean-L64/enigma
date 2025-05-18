import { NavLink, useLocation } from "react-router-dom";
import ScrambledText from "../components/Scramble";
import "../css/history.scss"

import Enigma1 from "../media/enigma.webp"
import Bombe from "../media/bombe1.jpg"
import Bletchley from "../media/bletchley.jpg"
import ScrollAnimation from "react-animate-on-scroll";
import { useEffect } from "react";

export default function History() {
    const location = useLocation();
    const targetId = location.state?.targetId; // Retrieve the target ID from the route state
    // Or
    const hash = location.hash; // Retrieve the hash value from the URL

    useEffect(() => {
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // Or
        if (hash) {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [targetId, hash]);
    
    return (
        <>
            <div className="history-page">
                <div id="ultra" />

                <div className="header-bg mb-20" >
                    <ScrambledText
                        text="History"
                        className="text-center text-white text-2xl mb-10 font-bold text-shadow-md/90 fadeInUp"
                        speed={20} />
                    <hr className="w-45 h-2 bg-white rounded-2xl m-auto mb-10 fadeInUp line" />

                    <ScrambledText
                        text="Project Ultra"
                        className="text-center text-white text-6xl mt-20 mb-10 font-bold text-shadow-md/90 fadeInUp"
                        speed={20} />
                    <hr className="w-150 h-2 bg-white rounded-2xl m-auto mb-10 fadeInUp line" />

                </div>

                <div className="flex template-layout justify-center flex-wrap pl-20 pr-20">


                    <p
                        className=" flex  templates desc border-white border-4 rounded-xl p-8 text-2xl tracking-wide text-shadow-sm/45 text-white fadeInUp "
                    >
                        Project Ultra launched in 1938 was the starting point on breaking the German
                        Enigma Codes and took place in Bletchley Park in Englaind.
                        Through the '20s and '30s, the Polish Intelligence Service
                        were aware of what the Germans were using Enigma for.
                        <br /> <br />
                        Polish Intelligence also managed to purchase an Enigma Machine
                        in a trade fair as well as a codebook from a French Agent
                        In 1932, a small Polish mathematician team led by Marian Rejewski
                        deducted the internal wiring from Enigma successfully.

                    </p>
                    <div>

                        <img
                            src={Bletchley}
                            className="flex history-img fadeInUp border-white w-140 rounded-2xl hover:scale-110
                                transition-all"
                        />
                        <p className="text-white mt-5  fadeInUp text-center text-3xl font-bold  p-5 desc rounded-xl fadeInUp">
                            Bletchley Park
                        </p>
                    </div>
                    <ScrollAnimation
                        offset={0}
                        animateOnce
                        animateIn="backInUp"
                        duration={0.75}
                        delay={0.25}
                    >

                        <p
                            className=" flex mt-10  ml-10 mr-10 desc border-white border-4 rounded-xl p-8 text-2xl 
                    tracking-wide text-shadow-sm/45 text-white text-center  "
                        >
                            The first machine developed from Polish Intelligence led by Marian
                            Rejewski was "the Bomba" in 1938 which would serve as a foundation
                            for breaking the Enigma code. It's success depeneded on German operating procedures
                            which were like instructions but unfortunately was rendered useless in May 1940
                            due to changes in those procedures.
                            In September 1939 when Poland collpased, they transferred their knowledge
                            and assets regarding Enigma to both France and Britain.

                            <br /> <br />


                        </p>
                    </ScrollAnimation>

                </div>
                <div id="enigma-history" className="mb-35" />

                <div className="header">

                    <ScrollAnimation
                        offset={0}
                        animateOnce
                        animateIn="fadeInUp"
                        duration={0.5}
                        delay={1}
                    >

                        <ScrambledText
                            text="The Enigma Machine"
                            className="text-center text-white text-6xl mt-20 mb-10 font-bold text-shadow-md/90 fadeInUp"
                            speed={20}
                        />
                        <hr className="w-150 h-2 bg-white rounded-2xl m-auto mb-10 fadeInUp line" />
                    </ScrollAnimation>
                </div>

                <div className="flex template-layout justify-center flex-wrap pl-20 pr-20" >


                    <ScrollAnimation
                        offset={0}
                        animateOnce
                        animateIn="fadeInUp"
                        duration={0.75}
                        delay={0.25}
                    >

                        <NavLink to="/machines">
                            <img
                                src={Enigma1}
                                className="flex history-img border-white w-120 rounded-xl hover:scale-105
                                transition-all"
                            />
                            <p className="text-white mt-5 text-center text-3xl font-bold  p-5 desc rounded-xl fadeInUp">
                                Enigma Machine
                            </p>

                        </NavLink>
                    </ScrollAnimation>
            
                    <p
                        className=" flex  templates desc border-white border-4 rounded-xl p-8 text-2xl 
                    tracking-wide text-shadow-sm/45 text-white  fadeInUp "
                    >
                        The Enigma  machine was ready for commercial use in 1923 by Dr. Arthur Scherbius,
                        an engineer in Berlin who owned a company named Cipher Machines Corporation.
                        During the same time, the Germans purchased the patent for intelligence purposes
                        most likely to start creating their own versions. The original Enigma
                        model wasn't officially patented until 1928 but by then, Scherbius had been dead and his company has
                        been collapsing.  While it may look like the Enigma machine wouldn't do well or get many buyers, the story
                        seems to be the opposite at least compared to the commercial side.




                    </p>
                    <ScrollAnimation
                        offset={0}
                        animateOnce
                        animateIn="backInUp"
                        duration={0.75}
                        delay={0.25}
                    >

                        <p
                            className=" flex mt-10  ml-10 mr-10 desc border-white border-4 rounded-xl p-8 text-2xl 
                    tracking-wide text-shadow-sm/45 text-white text-center  "
                        >
                            That's because, in 1926, the German Navy showed interest in the machine and introduced
                            their own version named Funkschlussel C. In 1928, the Germany Army introudced their
                            own version named the Enigma G. These versions of Enigma were initially considered insecure
                            due to the small number of possible combinations that could break the cipher.
                            Each model began to become more sophisticated than the other like creating different
                            systems or adding more rotors over the years with the
                            Germany army adopting a new version Enigma I in 1934 with the German Navy adopting
                            Engima M(Funkschlussel M).
                            <br /> <br />
                            At the time, Enigma was the most advanced cipher at the time and was considered Germany's security
                            blanket if used correctly. That's why the Enigma machine inspired other
                            ciphers like Japan's Purple Cipher Machine. That however allowed the Allies to break
                            their code when they broke Enigma as the system and settings are similar.


                        </p>
                    </ScrollAnimation>

                </div >
                <div id="bombe" className="mb-30" />
                <div className="header" >
                    <ScrollAnimation
                        offset={0}
                        animateOnce
                        animateIn="fadeInUp"
                        duration={0.5}
                        delay={1}
                    >

                        <ScrambledText
                            text="The Bombe"
                            className="text-center text-white text-6xl mt-20 mb-10 font-bold text-shadow-md/90 fadeInUp"
                            speed={20} />
                        <hr className="w-150 h-2 bg-white rounded-2xl m-auto mb-10 fadeInUp line" />
                    </ScrollAnimation>
                    <ScrollAnimation
                        offset={0}
                        animateOnce
                        animateIn="fadeInUp"
                        duration={0.5}
                        delay={1}
                    >

                        <p
                            className=" flex mt-10  ml-45 mr-45 mb-10 desc border-white border-4 rounded-xl p-8 text-3xl font-bold
                    tracking-wide text-shadow-sm/45 text-white text-center  "
                        >
                            Fun fact: Historians estimate that the codebreaking operations especially the ones that exposed
                            Germany's U-Boat positions shortened the war in Europe by 2 - 4 years.

                        </p>
                    </ScrollAnimation>
                </div>
                <div className="flex template-layout justify-center flex-wrap pl-20 pr-20">
                    {/* more info needed for bombe */}

            
                    <p
                        className=" flex templates desc border-white border-4 rounded-xl p-8 text-2xl tracking-wide text-shadow-sm/45 text-white  "
                    >
                        The Bombe which also went by other names like "victory"
                        was developed during autumn of 1939 and operational by spring 1940
                        was designed by Alan Turing and his colleagues. This machine
                        was responsible for breaking mass amounts of encrypted messages
                        to expose military intelligence and turned Bletchley Park
                        into a codebreaking factory. For example. it helped to
                        expose Germany's U-Boat's communications and positions which
                        would prove to be a vital part on the war's outcome.



                    </p>
                    <ScrollAnimation
                        offset={0}
                        animateOnce
                        animateIn="fadeInUp"
                        duration={0.5}
                        delay={1}
                    >

                        <NavLink to="/machines"
                            className="fadeInUp"
                            state={{ targetId: 'bombe' }}
                        >
                            <img
                                src={Bombe}
                                className="flex history-img border-white w-130 rounded-2xl hover:scale-110
                                transition-all"
                            />
                            <p className="text-white mt-5 text-center text-3xl font-bold  p-5 desc rounded-xl fadeInUp">
                                The Bombe Machine
                            </p>
                        </NavLink>
                    </ScrollAnimation>

                </div>


            </div>


        </>
    );
}