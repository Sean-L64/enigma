import ScrambledText from "../components/Scramble";
import "../css/impact.scss"
import dday from "../media/dday2.jpg"

export default function Impact() {
    return (
        <>
            <div className="impact-page">
                <div className="header-bg mb-10">
                    <ScrambledText
                        text="Impact"
                        className="text-center text-white text-6xl mb-10 font-bold text-shadow-md/90 fadeInUp"
                        speed={20} />
                    <hr className="w-70 h-2 bg-white rounded-2xl m-auto mb-10 fadeInUp line" />
                    <div className="flex mt-10  ml-50 mr-50 mb-10 desc border-white border-4 rounded-xl p-8 text-2xl font-bold
                 text-shadow-sm/45 text-white text-center history-img fadeInUp">

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
                <div className="flex template-layout  justify-center flex-wrap">

                    <p className="flex templates desc border-white  border-4 rounded-xl p-8 text-2xl tracking-wide text-shadow-sm/45 text-white fadeInUp">
                        The Enigma messages contained crucial pieces of data like U-boat positions and other
                        forms of military communication. The faster the messages were broken, the intelligence
                        is fresher and more relavent.

                        Historians estimate that the codebreaking operation in Bletchley Park espcecially
                        the one that broke the U-boat Enigma shortened the war in Europe by 2-4 years.

                        <br /><br />
                        If the U-Boat positions in the North Atlantic haven't been found,
                        the Allies wouldn't be able to counter the U-boats as effectively.

                    </p>
                    <div>

                        <img
                            src={dday}
                            className="flex h-auto history-img page-img rounded-2xl fadeInUp text-center 
                        text-2xl font-bold text-white w-150 overflow-hidden box-border "
                            alt="loading..."
                        />
                        <p className="text-white history-img mt-5 text-center text-3xl font-bold  p-5 desc rounded-xl fadeInUp">
                            D-Day
                            {/* (Normandy Landings) */}
                        </p>
                    </div>

                    <p
                        className=" flex mt-10 m-auto ml-30 mr-30 desc border-white border-4 rounded-xl p-8 text-2xl 
                    tracking-wide text-shadow-sm/45 history-img text-white text-center "
                    >

                        The D-Day attack could've also have been delayed by a year or more
                        since one of the primary uses of the North Atlantic were the trade routes
                        carrying resources. Each year in Europe, there would be an average of 7 million
                        The war could've also lasted 2-3 more years taking the lives
                        of about 14-21 million more people.

                        Breaking the Enigma messages were also crucial in planning invasions like D-Day.
                        To get to Berlin from the French coast, it took the Allied armies about a year
                        to fight their way through that path.
                        If that invasion were to have been delayed, it would've allowed Hitler to
                        prepare defenses and the struggle to get to Berlin would be twice as long.

                    </p>

                </div>
            </div>

        </>
    );
}