import ScrambledText from "../components/Scramble";
import "../css/bibliography.scss"

export default function Bibliography() {
    return (
        <>
            <div className="bibliography-page">
                <div className="header-bg mb-10">
                    <ScrambledText
                        text="Bibliography"
                        className="text-center text-white text-6xl mb-10 font-bold text-shadow-md/90 fadeInUp"
                        speed={20} />
                    <hr className="w-70 h-2 bg-white rounded-2xl m-auto mb-10 fadeInUp line" />
                    <a
                        href="https://docs.google.com/document/d/1esSsb_jnb6IwQw-54lqvD3F4B4cXEJiaDDAk3_igbXM/edit?tab=t.0"
                        target="_blank"
                    >
                        <button className="mb-10 hov-element flex m-auto p-3 pl-16 pr-16 border-2 border-solid border-white text-bold text-2xl font-bold rounded-md cursor-pointer hover:scale-110 transition-all text-white fadeInUpLong" id="home-button">

                            <ScrambledText text="Full Document" speed={30} />

                        </button>
                    </a>
                    <a
                        href="https://github.com/Sean-L64/enigma"
                        target="_blank"
                    >
                        <button className="hov-element flex m-auto p-3 pl-16 pr-16 border-2 border-solid border-white text-bold text-2xl font-bold rounded-md cursor-pointer hover:scale-110 transition-all text-white fadeInUpLong" id="home-button">

                            <ScrambledText text="Source Code" speed={30} />

                        </button>
                    </a>

                </div>


                <p className="text-center text-white text-2xl mb-10">
                    All images provided by Google

                </p>
                <iframe
                    className="doc"
                    src="https://docs.google.com/document/d/e/2PACX-1vRQuZE9u9GbvV77yBdDk2TeBvG2OtuxTyRD4dqSViREbibsyZJ-2rLYx_XfFKST-N8k-h8n8zODEt1f/pub?embedded=true"
                >
                </iframe>

            </div >
        </>
    );
}