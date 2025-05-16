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

               <img src={Marian} className="flex  templates rounded-2xl fadeInUp" />
               <p className="flex templates desc border-white border-4 rounded-xl p-8 text-2xl tracking-wide text-shadow-sm/45 text-white fadeInUp">
                     Marian Rejewski was a Polish mathematician and the first person to break Enigma.
                     Starting 1932, Marian Rejewski led a small team of Polish mathematician-cryptanalysts
                     had succeeded in deducing the internal wiring in Enigma and created the Bomba machine in 1938. 
                     The machine was rendered useless in May 1940 following changes in the German operating procedures
                     it depeneded on.
               </p>

            </div>
         </div>
      </>
   );
}