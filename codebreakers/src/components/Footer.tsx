import { NavLink } from "react-router";
import TopScroll from "./TopScroll";
import "../css/footer.scss"
export default function Footer() {
    const cpDate = new Date();
    const cpYear = cpDate.getFullYear();
    return (
        <footer className="footer">
            <div id="footer-content">
                <div id="footer-logo">
                    <NavLink to="/"><h1 className="text-extrabold text-white text-5xl text-center footer-title">ENGIMA</h1></NavLink>
                </div>
                <div id="footer-nav">
                    <ul className="flex flex-wrap gap-6 font-light text-2xl">
                        <TopScroll />
                        <li className="p-1 text-white cursor-pointer text-md footer-items">
                            <NavLink to="/history">History</NavLink>

                        </li>
                        <li className="p-1 text-white cursor-pointer text-md footer-items">
                            <NavLink to="/machines">Machines</NavLink>
                            <div className="footer-sublinks flex flex-col">
                                <NavLink className="sublink" to="/enigma" ></NavLink>

                                <NavLink className="sublink" to="/victory" ></NavLink>
                            </div>
                        </li>
                        <li className="p-1 text-white cursor-pointer text-md footer-items">
                            <NavLink to="/impact">Impact</NavLink>
                        </li>
                        <li className="p-1 text-white cursor-pointer text-md footer-items">
                            <NavLink to="/turing">Turing</NavLink>
                        </li>
                        <li className="p-1 text-white cursor-pointer text-md footer-items">
                            <NavLink to="/rejewski">Marian Rejewski</NavLink>
                        </li>
                        <li className="p-1 text-white cursor-pointer text-md footer-items">
                            <NavLink to="/resources">Resources</NavLink>
                        </li>
                        <li className="p-1 text-white cursor-pointer text-md footer-items">
                            <NavLink to="/bibliography">Bibliography</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
            <div id="footer-end">
                <span id="copyright">©  1787 - {cpYear} </span>
            </div>
        </footer>


    );
}