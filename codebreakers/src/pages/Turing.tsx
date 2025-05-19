import ScrambledText from "../components/Scramble";
import "../css/turing.scss"
import Alan from "../media/turing.jpg"


export default function Turing() {
    return (
        <>
            <div className="turing-page">
                <div className="header-bg mb-20">
                    <ScrambledText
                        text="Alan Turing"
                        className="text-center text-white text-6xl font-bold text-shadow-md/90 fadeInUp"
                        speed={20}
                    />

                    <hr className="w-70 h-2 bg-white rounded-2xl m-auto mt-10 fadeInUp line" />

                </div>
                <div className="flex template-layout justify-center flex-wrap ">

                    <div>

                        <img src={Alan}
                            className="flex w-120 rounded-2xl history-img fadeInUp text-center text-2xl font-bold text-white"
                            alt="loading..."
                            loading="lazy"
                        />
                        <p className="text-white mt-5 text-center text-3xl font-bold  p-5 desc rounded-xl fadeInUp">
                            Alan Turing (41 years old)
                            <br />
                            June 23, 1912 - June 7, 1954
                        </p>
                    </div>

                    <p className="flex  templates desc border-white border-4 rounded-xl p-8 text-2xl tracking-wide text-shadow-sm/45 text-white fadeInUp">
                        Alan Turing was a British mathematician who played a crucial role into breaking the Enigma
                        code for the Allies in order to read military messages. Before joining Project Ultra, 
                        Alan Turing recently joined the Government Code and Cypher School following his fellowship from King's College in the summer of 1938.
                        After moving to Bletchley Park in September 1939, he and Gordon Welchman lead a small team that
                        developed the Bombe machine to help supply the allies with military intelligence.
                        His work had a lasting influence on modern computer science and cryptography. In March 1951, he
                        was elected as a fellow of the Royal Society of London.


                    </p>
                    <p
                        className=" flex mt-10 m-auto ml-30 mr-30 desc border-white border-4 rounded-xl p-8 text-2xl 
                    tracking-wide text-shadow-sm/45 text-white text-center  "
                    >

                        However soon after March 1952, he was convicted of
                        "gross indecency" or homosexuality which was considered a crime in Britain at the time and was sentenced to
                        12 months of "hormone therapy". Because of this, he wasn't allowed to Britain's Government postwar code-breaking
                        center known as (GCHQ) due to the criminal record. Turing was discovered dead in his bed in June 1954
                        posioned by cyanide. While the final conclusion was suicide, there was no clear motive and it still
                        remains a debate and mystery to this day. Another possibility was that it was an accident due
                        a mini lab being in his house containing cyanaide experiments. In 2009, British Prime Minister Gordon
                        Brown publically apologized for Turing's "utterly unfair" treatement after Turing's death had become infamous.
                        Queen Elizabeth II granted turng a royal pardon 4 years later.
                    </p>

                </div>
            </div>
        </>
    );
}