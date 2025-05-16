import Ip from "./components/Ip";
import Ip6 from "./components/Ip6";
import "./css/notfound.scss"

export default function NotFound() {

    return (
        <div className="items-center justify-self-center notfound">
            <h1 className="text-3xl font-bold text-center text-white notfound-main">404</h1>
            <h2 className="text-2xl font-bold text-center text-white notfound-desc">
                Dear <Ip /> aka. <Ip6 />,
                This page doesn't exist
            </h2>
        </div>
    );
}