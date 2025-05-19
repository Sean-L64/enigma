import ScrambledText from "../components/Scramble";
import "../css/machines.scss"
import Enigma from "../media/enigma4.webp"
import Bombe from "../media/bombe2.jpg"
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";



export default function Machines() {
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
            <div className="machines-page" id="enigma-machine">
                <div className="header-bg  fadeInUp" >
                    <ScrambledText
                        text="Machines"
                        className="text-center text-white text-2xl mb-10 font-bold text-shadow-md/90 fadeInUp"
                        speed={20} />
                    <hr className="w-45 h-2 bg-white rounded-2xl m-auto fadeInUp line" />
                    <ScrambledText
                        text="The Enigma Machine"
                        className="text-center text-white text-6xl mt-10 mb-10 font-bold text-shadow-md/90 fadeInUp"
                        speed={20} />
                    <hr className="w-150 h-2 bg-white rounded-2xl m-auto mb-10 fadeInUp line" />
                    <p
                        className=" flex mt-10  ml-50 mr-50 mb-10 desc border-white border-4 rounded-xl p-8 text-3xl font-bold
                    tracking-wide text-shadow-sm/45 text-white text-center fadeInUp "
                    >
                        Fun fact: The Enigma cipher has 150,000,000,000,000,000,000 (15 quintillion) possible solutions.

                    </p>
                </div>
                <div className="flex template-layout justify-center flex-wrap " >

                    <p className="flex  templates desc border-white border-4 rounded-xl p-8 text-2xl tracking-wide text-shadow-sm/45 text-white fadeInUp">
                        Enigma was a cipher device that was used by Germany military
                        to encrypt and decrypt messages during World War II.
                        It took the form of a typewriter and was powered by an electric mechanism.
                        The number of total rotors changed time to time as the Germans were creating more
                        complex versions of this machine. For example, 3 rotors may be used on the machine but
                        there could be a group of 5 rotors that can be interchangable with the ones on the machine
                        like Enigma I or a group of 8 rotors like Enigma M.
                        <br /> <br />
                        Each rotor had 26 letters, was about half an inch wide, and were mechanically geared together which
                        causes at least one rotor to move each time a key was pressed but multiple can move at the same time.
                        Once a key is pressed, a corresponding letter lights up and those letters are the output which encrypts or decrypts messages.






                    </p>
                    <NavLink to="/resources">

                        <img
                            src={Enigma}
                            loading="lazy"
                            className="flex w-100 rounded-2xl history-img hover:scale-105 cursor-pointer fadeInUp text-center text-2xl font-bold text-white"
                            alt="loading..."
                        />
                        <p className="text-white mt-5 text-center text-3xl font-bold  p-5 desc rounded-xl fadeInUp">
                            Enigma Machine
                        </p>
                    </NavLink>
                </div>
                <div id="bombe-machine" />
                <div className="header">
                    <ScrollAnimation
                        offset={20}
                        animateOnce
                        animateIn="fadeInUp"
                        duration={0.5}
                        delay={1}
                    >


                        <ScrambledText
                            text="The Bombe"
                            className="text-center text-white text-6xl mt-20 mb-10 font-bold text-shadow-md/90 fadeInUp"
                            speed={20}
                        />
                        <hr className="w-150 h-2 bg-white rounded-2xl m-auto mb-10 fadeInUp line" />
                    </ScrollAnimation>
                </div>
                <div className="flex template-layout mt-20 justify-center flex-wrap ">
                    {/* more info needed for bombe */}
                    <div>
                        <ScrollAnimation
                            offset={20}
                            animateOnce
                            animateIn="fadeInUp"
                            duration={0.75}
                            delay={0.5}
                        >

                            <img
                                src={Bombe}
                                loading="lazy"
                                className="flex w-130 page-img rounded-2xl font-bold history-img text-white text-center text-2xl"
                                alt="loading..."
                            />
                        </ScrollAnimation>
                        <ScrollAnimation
                            offset={0}
                            animateOnce
                            animateIn="fadeInUp"
                            duration={0.75}
                            delay={0.5}
                        >

                            <p className="text-white mt-5 text-center text-3xl font-bold history-img p-5 desc rounded-xl">
                                The Bombe Machine
                            </p>
                        </ScrollAnimation>
                    </div>

                    <p className="flex  templates desc border-white border-4 rounded-xl p-8 text-2xl tracking-wide text-shadow-sm/45 text-white ">
                        The Bombe was a machine that was designed to accelerate the process of breaking Enigma settings
                        and the name "bombe" was derived from the Bomba machine made by the Poles.
                        Each Bombe machine had 12 sets of Enigma scramblers each connected so the machine can process more
                        letters. Every machine was 2 meters tall, 2 meters long, and 1 meter wide and was built by the
                        British Tabulating Machine Company. The first version named "Victory"  was considered
                        too slow at the time. The newer one was named "Agnus Dei" proved to be a very capable
                        machine despite the Germans stopping the message key from repeating.


                    </p>
                    <ScrollAnimation
                        offset={0}
                        animateOnce
                        animateIn="fadeInUp"
                        duration={0.75}
                        delay={0.5}
                    >

                        <p
                            className=" flex mt-10 m-auto ml-30 mr-30 desc border-white border-4 rounded-xl p-8 text-2xl 
                    tracking-wide text-shadow-sm/45 text-white text-center  "
                        >
                            The most recent version of the Bombe had 100 rotating drums which were the rotating circular
                            parts on the front of the machine. It also had about 16km or 10 miles worth of wire with 1 million
                            soldered connections. These machines played a key role in deciphering the Engima Codes
                            and supplying military intelligence which was vital in the Allies' victory over Nazi Germany.
                            The number of messages it could decode were about 39,000 intercepted messages a month which
                            eventually rose to 84,000 a month as early as 1943.

                            That's almost 2 messages per minute during day and night.

                            The accomplishments leading up the the creation of this machine
                            created a lasting impact on computer science and modern cryptography.


                        </p>
                    </ScrollAnimation>
                </div>
            </div>
        </>
    );
}