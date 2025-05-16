import ScrambledText from "../components/Scramble";
import "../css/turing.scss"
import Alan from "../media/turing.jpg"


export default function Turing() {
    return (
        <>
            <div className="turing-page">
                <div className="header-bg mb-20">
                    <ScrambledText text="Alan Turing" className="text-center text-white text-6xl font-bold text-shadow-md/90 fadeInUp" speed={20} />

                    <hr className="w-70 h-2 bg-white rounded-2xl m-auto mt-10 fadeInUp line" />

                </div>
                <div className="flex template-layout justify-center flex-wrap ">

                    <img src={Alan} className="flex image border-2 border-white w-90 rounded-2xl fadeInUp" />

                    <p className="flex  templates desc border-white border-4 rounded-xl p-8 text-2xl tracking-wide text-shadow-sm/45 text-white fadeInUp">
                        Alan Turing was a British mathematician who played a crucial role into breaking the Enigma
                        code. After moving to Bletchley Park in September 1939, he and Gordon Welchman lead a small team that
                        developed the machine named "Bombe" and had other names like "Victory".
                    </p>

                </div>
            </div>
        </>
    );
}