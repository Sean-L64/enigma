import ScrambledText from "../components/Scramble";
import "../css/marian.scss"
import Marian from "../media/rejewski.jpg"

export default function Rejewski() {
   return (
      <>
         <div className="marian-page">
            <div className="header-bg mb-20">
               <h1 className="text-center text-white text-6xl mb-10 font-bold text-shadow-md/90 fadeInUp">
                  <ScrambledText text="Marian Rejewski" className="text-center text-white text-6xl font-bold text-shadow-md/90 fadeInUp" speed={20} />
               </h1>
               <hr className="w-70 h-2 bg-white rounded-2xl m-auto mb-10 fadeInUp line" />

            </div>
            <div className="flex template-layout justify-center flex-wrap ">
               {/* more clarification needed */}
               <div>

                  <img 
                  src={Marian}
                   className="flex w-140 rounded-2xl history-img fadeInUp text-center text-2xl font-bold text-white"
                   loading="lazy"
                   alt="loading..."
                   />
                  <p className="text-white mt-5 text-center text-3xl font-bold  p-5 desc rounded-xl fadeInUp">
                     Marian Rejewski (74 years)
                     <br />
                     August 16, 1905 -  February 13, 1980
                  </p>
               </div>
               <p className="flex templates desc border-white border-4 rounded-xl p-8 text-2xl tracking-wide text-shadow-sm/45 text-white fadeInUp">
                  Marian Rejewski was a Polish mathematician and the first person to break Enigma.
                  He and other mathematicians were able to identify patterns in the Enigma Machine which reduced the day
                  key combinations from about 10 quadrillion to 105,456 more specifically: 17,576 scramber settings
                  by 6 possible scrambler arrangements. Thanks to the replica Enigma machines from Polish Intelligence,
                  he and his team spent a year
                  creating a catalog that simplified the decryption process and settings.
                  Starting 1932, Marian Rejewski led a small team of Polish mathematician-cryptanalysts
                  had succeeded in deducing the internal wiring in Enigma or in other words.
                  That same year, the Poles cracked Enigma leading him and his team to create the Bomba machine in 1938.

               </p>

            </div>
         </div>
      </>
   );
}