import { NavLink } from "react-router";
import ScrambledText from "../components/Scramble";
import "../css/history.scss"

import Enigma1 from "../media/enigma.webp"

export default function History() {
    return (
        <>
            <div className="history-page">
                <div className="header-bg mb-20">
                    <ScrambledText
                        text="History"
                        className="text-center text-white text-2xl mb-10 font-bold text-shadow-md/90 fadeInUp"
                        speed={20} />
                    <hr className="w-45 h-2 bg-white rounded-2xl m-auto mb-10 fadeInUp line" />
                    <ScrambledText
                        text="The Enigma Machine"
                        className="text-center text-white text-6xl mt-20 mb-10 font-bold text-shadow-md/90 fadeInUp"
                        speed={20} />
                    <hr className="w-150 h-2 bg-white rounded-2xl m-auto mb-10 fadeInUp line" />

                </div>

                <div className="flex template-layout justify-center flex-wrap pl-20 pr-20">

                    <NavLink to="/machines" className="fadeInUp">
                        <img
                            src={Enigma1}
                            className="flex history-img border-white w-130 rounded-2xl hover:scale-110
                                transition-all"
                        />
                    </NavLink>
                    <p
                        className=" flex  templates desc border-white border-4 rounded-xl p-8 text-2xl 
                    tracking-wide text-shadow-sm/45 text-white  fadeInUp "
                    >
                        The Enigma cipher and machine was invented in 1923 by Dr. Arthur Scherbius, an engineer
                        in Berlin who owned a companuy named Cipher Machines Corporation.
                        <br />
                        <br />
                        Germany Nazi showed interest in the machine in 1926 and introduced their own named
                        Enigma G in 1928. The Germany Army later improved the model in 1934 to Enigma I.
                        <br />
                        <br />
                        In 1939, when Poland was about to get taken over, they transferred their knowledge
                        and assets regarding Enigma. Lanuched in 1938, Project Ultra took place in Bletchley
                        Park with the goal of breaking the Enigma code. The Enigma machine inspired other 
                        ciphers like Japan's Purple Cipher Machine therefore the Allies could break
                        their code when they broke Enigma
                        <br />
                        <br />

                    </p>

                </div>
                <div className="header">
                    <ScrambledText
                        text="The Bombe"
                        className="text-center text-white text-6xl mt-20 mb-10 font-bold text-shadow-md/90 fadeInUp"
                        speed={20} />
                    <hr className="w-150 h-2 bg-white rounded-2xl m-auto mb-10 fadeInUp line" />
                </div>

            </div>

        </>
    );
}