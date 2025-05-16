import { useEffect } from "react";
import Ip from "../components/Ip";
import Ip6 from "../components/Ip6";

export default function Admin(){
    useEffect(() => {
        const timeout = setTimeout(() => {
            window.location.href = "https://cdn.mos.cms.futurecdn.net/PJyEybKyQhGBpM4QXw7ccH.jpg";
        }, 2500)
        return () => clearTimeout(timeout);
    }, [])
    return(
        <div className="items-center justify-self-center notfound">
            
            <h1 className="text-2xl font-bold text-center text-white notfound-main">LOL</h1>
            <h2 className="text-2xl font-bold text-center text-white notfound-desc"> <Ip /> aka. <Ip6 />,
             why are you trying to hack into this very simple website???</h2>
        </div>
    )
}