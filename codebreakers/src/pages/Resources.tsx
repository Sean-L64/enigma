import ScrambledText from "../components/Scramble";
import "../css/demo.scss"

export default function Resources() {
    return (
        <>
            <div className="demo-page">
                <div className="header-bg mb-20">
                    <ScrambledText
                        text="Enigma Resources & Demo"
                        className="text-center text-white text-6xl mb-10 font-bold text-shadow-md/90 fadeInUp"
                        speed={20} />
                    <hr className="w-150 h-2 bg-white rounded-2xl m-auto mb-10 fadeInUp line" />

                </div>
                <ul className="flex justify-center items-center">
                    <li>
                        <iframe
                            width="560"
                            className="rounded-lg border-2  border-white"
                            height="315"
                            src="https://www.youtube.com/embed/9kvYlEFDuSc?si=Vw9isuTrjDCPmzyr&amp;controls=0&amp;start=49"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            >

                        </iframe>
                    </li>
                </ul>
            </div>
        </>
    );
}