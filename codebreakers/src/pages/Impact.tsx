import ScrambledText from "../components/Scramble";
import "../css/impact.scss"

export default function Impact() {
    return (
        <>
            <div className="impact-page">
                <div className="header-bg mb-95">
                    <ScrambledText
                        text="Impact"
                        className="text-center text-white text-6xl mb-10 font-bold text-shadow-md/90 fadeInUp"
                        speed={20} />
                    <hr className="w-70 h-2 bg-white rounded-2xl m-auto mb-10 fadeInUp line" />

                </div>
            </div>

        </>
    );
}