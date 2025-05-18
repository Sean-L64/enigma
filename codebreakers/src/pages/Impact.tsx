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
                    <div className="flex mt-10  ml-50 mr-50 mb-10 desc border-white border-4 rounded-xl p-8 text-3xl font-bold
                 text-shadow-sm/45 text-white text-center  fadeInUp">

                        <p >
                            What would've happened if Enigma wasn't broken at all?

                            <hr className="w-190 h-2 mt-10 bg-white rounded-2xl m-auto mb-10 fadeInUp line" />


                            Many plans from the Allied powers including some invasions and the duration of the war would've
                            been delayed by a substantial amount. This could've also led to the Axis Powers being more
                            successful in the war's outcome

                        </p>
                    </div>
                    {/* needs more info */}

                </div>
            </div>

        </>
    );
}