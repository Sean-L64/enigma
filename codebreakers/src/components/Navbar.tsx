import { NavLink } from "react-router-dom";
import TopScroll from "./TopScroll";
import "../css/navbar.scss"
import ScrambledText from "./Scramble";

export default function Navbar() {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [isOpen, setOpen] = useState(false);


    // function linkClick() {
    //     setOpen(!isOpen);
    //     setIsMenuOpen(!isMenuOpen);
    // }

    return (

        <>
            <div className="w-full fixed text-shadow-lg/10  " id="navbar">
                <header className="flex justify-between items-center text-white py-8 px-8
        md:px-32  backdrop-blur-md drop-shadow-2xl fadeInDown" id="header">
                    <TopScroll />
                    <NavLink to="/">
                        <ScrambledText text="ENIGMA" speed={50} className="nav-title transition-all text-3xl font-extrabold fadeInDown" />
                    </NavLink>
                    <ul className="hidden lg:flex items-center
            gap-10 pl-10 pr-10 font-semibold text-base fadeInDown 
            " id="navlist"
                    >



                        <div className="relative group inline-block text-left " >
                            <button className=" text-white  inline-flex w-full justify-center gap-x-1.5 
                            rounded-md px-3 py-2 text-lg font-semibold shadow-xs cursor-pointer hover:scale-140 
                            transition-all nav-items ">
                                <NavLink
                                    to="/history"
                                >
                                    <ScrambledText text="History" speed={35} />

                                </NavLink>
                            </button>
                            <div className="dropdown absolute left-1/2 transform -translate-x-1/2
                             mt-2 w-42 text-center border border-gray-500 rounded-xl shadow-lg 
                            group-hover:opacity-100 backdrop-blur-md opacity-0 text-lg
                            invisible group-hover:visible transition duration-300 z-50 ease-out">
                                <NavLink
                                    to="/history"
                                    className="block px-4 py-6 hover:bg-gray-100 rounded-lg hover:text-black"
                                    state={{ targetId: 'ultra' }}
                                >
                                    Project Ultra
                                </NavLink>
                                <NavLink
                                    to="/history"
                                    className="block px-4 py-6 hover:bg-gray-100 rounded-lg hover:text-black"
                                    state={{ targetId: 'enigma-history' }}
                                >
                                    Enigma Machine
                                </NavLink>
                                <NavLink
                                    to="/history"
                                    className="block px-4 py-6 hover:bg-gray-100 rounded-lg hover:text-black"
                                    state={{ targetId: 'bombe' }}
                                >
                                    The Bombe
                                </NavLink>
                            </div>
                        </div>
                        <div className="relative group inline-block text-left " >
                            <button className=" text-white  inline-flex w-full justify-center gap-x-1.5 
                            rounded-md px-3 py-2 text-lg font-semibold shadow-xs cursor-pointer hover:scale-140 
                            transition-all nav-items ">
                                <NavLink to="/machines">
                                    <ScrambledText text="Machines" speed={35} />
                                </NavLink>
                            </button>
                            <div className="dropdown absolute left-1/2 transform -translate-x-1/2
                             mt-2 w-42 text-center border border-gray-500 rounded-xl shadow-lg 
                            group-hover:opacity-100 backdrop-blur-md opacity-0 text-lg
                            invisible group-hover:visible transition duration-300 z-50 ease-out">
                                <NavLink
                                    to="/machines"
                                    className="block px-4 py-6 hover:bg-gray-100 rounded-lg hover:text-black"
                                    state={{targetId: 'enigma-machine'}}
                                >
                                    Enigma
                                </NavLink>
                                <NavLink
                                    to="/machines"
                                    className="block px-4 py-6 hover:bg-gray-100 rounded-lg hover:text-black"
                                    state={{targetId: 'bombe-machine'}}
                                >
                                    The Bombe
                                </NavLink>
                            </div>
                        </div>



                        <NavLink
                            to="/impact"
                            className=" hover:text-white 
                rounded-md transition-all cursor-pointer text-lg text-center nav-items p-1 hover:scale-140">
                            <ScrambledText text="Impact" speed={35} />
                            {/* Possible alternative endings if Enigma wasn't broken */}
                        </NavLink>


                        <div className="relative group inline-block text-left " >
                            <button className=" text-white  inline-flex w-full justify-center gap-x-1.5 
                            rounded-md px-3 py-2 text-lg font-semibold shadow-xs cursor-pointer hover:scale-140 
                            transition-all nav-items ">
                                <NavLink to="/turing">
                                    <ScrambledText text="Key People" speed={35} />
                                </NavLink>
                            </button>
                            <div className="dropdown absolute left-1/2 transform -translate-x-1/2
                             mt-2 w-42 text-center border border-gray-500 rounded-xl shadow-lg 
                            group-hover:opacity-100 backdrop-blur-md opacity-0 text-lg
                            invisible group-hover:visible transition duration-300 z-50 ease-out">
                                <NavLink to="/turing"
                                    className="block px-4 py-6 hover:bg-gray-100 rounded-lg hover:text-black"
                                >
                                    Alan Turing
                                </NavLink>
                                <NavLink to="/rejewski"
                                    className="block px-4 py-6 hover:bg-gray-100 rounded-lg hover:text-black"
                                >
                                    Marian Rejewski
                                </NavLink>
                            </div>
                        </div>


                        <NavLink
                            to="/resources"
                            className="hover:text-white 
                rounded-md transition-all cursor-pointer text-lg  text-center nav-items p-1 hover:scale-140">
                            <ScrambledText text="Resources" speed={35} />

                        </NavLink>
                        <NavLink
                            to="/bibliography"
                            className="hover:text-white 
                rounded-md transition-all cursor-pointer text-lg  text-center nav-items p-1 hover:scale-140">
                            <ScrambledText text="Bibliography" speed={35} />

                        </NavLink>





                    </ul>



                </header>

            </div >
        </>
    );
}