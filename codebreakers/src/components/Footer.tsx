import { NavLink } from "react-router-dom";
import TopScroll from "./TopScroll";
import "../css/footer.scss"
export default function Footer() {
    const cpDate = new Date();
    const cpYear = cpDate.getFullYear();
    return (
        <footer className="footer">
            <div id="footer-content">
                <div id="footer-logo">
                    <NavLink to="/">
                        <h1 className="text-extrabold text-white text-5xl text-center footer-title">
                            ENGIMA
                        </h1>
                    </NavLink>
                </div>
                <div id="footer-nav">
                    <ul className="flex flex-wrap gap-6 font-light text-2xl">
                        <TopScroll />
                        <li className="p-1 text-white cursor-pointer text-md footer-items">
                            <NavLink
                                className="main-link"
                                to="/history"
                            >
                                History
                            </NavLink>
                            <div className="footer-sublinks flex flex-col">
                                <NavLink
                                    className="sublink"
                                    to="/history"
                                    state={{ targetId: 'ultra' }}
                                >
                                    Project Ultra

                                </NavLink>
                                <NavLink
                                    className="sublink"
                                    to="/history"
                                    state={{ targetId: 'enigma-history' }}
                                >
                                    Enigma

                                </NavLink>
                                <NavLink
                                    className="sublink"
                                    to="/history"
                                    state={{ targetId: 'bombe' }}
                                >
                                    The Bombe

                                </NavLink>
                            </div>

                        </li>
                        <li className="p-1 text-white cursor-pointer text-md footer-items">
                            <NavLink
                                className="main-link"
                                to="/machines"
                            >
                                Machines
                            </NavLink>
                            <div className="footer-sublinks flex flex-col">
                                <NavLink
                                    className="sublink"
                                    to="/machines"
                                    state={{targetId: 'enigma-machine'}}
                                >Enigma
                                </NavLink>
                                <NavLink className="sublink"
                                    to="/machines"
                                    state={{targetId: 'bombe-machine'}}
                                >
                                    The Bombe
                                </NavLink>
                            </div>
                        </li>
                        <li className="p-1 text-white cursor-pointer text-md footer-items">
                            <NavLink
                                className="main-link"
                                to="/impact"
                            >
                                Impact

                            </NavLink>
                        </li>
                        <li className="p-1 text-white cursor-pointer text-md footer-items">
                            <NavLink
                                className="main-link"
                                to="/turing"
                            >
                                Key People

                            </NavLink>
                            <div className="footer-sublinks flex flex-col">
                                <NavLink
                                    className="sublink"
                                    to="/turing"
                                >
                                    Alan Turing

                                </NavLink>
                                <NavLink
                                    className="sublink"
                                    to="/rejewski"
                                >
                                    Marian Rejewski

                                </NavLink>
                            </div>
                        </li>

                        <li className="p-1 text-white cursor-pointer text-md footer-items">
                            <NavLink
                                className="main-link"
                                to="/resources"
                            >
                                Resources
                            </NavLink>
                            <div className="footer-sublinks flex flex-col">
                                <a className="sublink"
                                    href="https://www.youtube.com/embed/9kvYlEFDuSc?si=Vw9isuTrjDCPmzyr&amp;controls=0&amp;start=49"
                                    target="_blank"
                                >
                                    Live Demo
                                </a>
                                <a
                                    className="sublink"
                                    href="https://cryptii.com/pipes/enigma-machine"
                                    target="_blank"
                                >
                                    Cipher Demo
                                </a>
                            </div>

                        </li>
                        <li className="p-1 text-white cursor-pointer text-md footer-items">
                            <NavLink
                                className="main-link"
                                to="/bibliography"
                            >
                                Bibliography

                            </NavLink>
                            <div className="footer-sublinks flex flex-col">
                                <a className="sublink"
                                    href="https://docs.google.com/document/d/1esSsb_jnb6IwQw-54lqvD3F4B4cXEJiaDDAk3_igbXM/edit?tab=t.0"
                                    target="_blank"
                                >
                                    Document
                                </a>
                                <a
                                    className="sublink"
                                    href="https://github.com/Sean-L64/enigma"
                                    target="_blank"
                                >
                                    Source Code
                                </a>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
            <div id="footer-end">
                <span id="copyright">© 1939 - {cpYear} </span>
            </div>
        </footer>


    );
}