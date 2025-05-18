import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SectionScroll(){ 
    const location = useLocation();
    const targetId = location.state?.targetId;
    const hash = location.hash;

    useEffect(() => {
        const scrollToElement = (selector) => {
            const targetElement = document.querySelector(selector);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        };

        if (targetId) {
            scrollToElement(`#${targetId}`);
        } else if (hash) {
            scrollToElement(hash);
        }
    }, [targetId, hash]);

    return null; // This component doesn't render anything
};

