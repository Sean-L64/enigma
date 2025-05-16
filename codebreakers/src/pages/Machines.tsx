import ScrambledText from "../components/Scramble";
import "../css/machines.scss"
import Enigma from "../media/enigma4.webp"

export default function Machines() {
    return (
        <>
            <div className="machines-page">
                <div className="header-bg mb-20 fadeInUp">
                    <ScrambledText
                        text="Machines"
                        className="text-center text-white text-2xl mb-10 font-bold text-shadow-md/90 fadeInUp"
                        speed={20} />
                    <hr className="w-45 h-2 bg-white rounded-2xl m-auto mb-10 fadeInUp line" />
                    <ScrambledText
                        text="The Enigma Machine"
                        className="text-center text-white text-6xl mt-20 mb-10 font-bold text-shadow-md/90 fadeInUp"
                        speed={20} />
                    <hr className="w-150 h-2 bg-white rounded-2xl m-auto mb-10 fadeInUp line" />
                </div>
                <div className="flex template-layout justify-center flex-wrap ">

                    <p className="flex  templates desc border-white border-4 rounded-xl p-8 text-2xl tracking-wide text-shadow-sm/45 text-white fadeInUp">
                        Enigma was a cipher device that was used by Germany military
                        to encrypt and decrypt messages during World War II.
                        It took the form of a typewriter using 3 rotors that 
                        constantly rotated each time a key was pressed.


                    </p>
                    <img src={Enigma} className="flex w-100 rounded-2xl fadeInUp" />
                </div>
            </div>
        </>
    );
}