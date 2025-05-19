import TopScroll from "../components/TopScroll";
import "../css/home.scss"
import { NavLink } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import bgvid from "../media/placeholder.mp4"
import Alan from "../media/turing.jpg"
import Clock from "../media/clock.jpg"
import WW2 from "../media/battle.webp"
import Enigma from "../media/enigma.webp"
import Bombe from "../media/bombe2.jpg"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css";
import ScrambledText from "../components/Scramble";
import { useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";


gsap.registerPlugin(ScrollTrigger); // register the ScrollTrigger plugin

export default function Home() {
    const headerRef = useRef<HTMLDivElement | null>(null); // useRef hook to store the element references
    const videoRef = useRef<HTMLVideoElement | null>(null);



    const applyVideoEffects = (progress: number) => {
        if (!videoRef.current) return;

        let maxOpacity = 1.2;
        let maxTransform = 90;
        let maxBlur = 5;
        let defaultBrightness = 0.7;

        videoRef.current.style.opacity = `${(maxOpacity - progress) / maxOpacity}`;
        videoRef.current.style.transform = `translateY(${progress * maxTransform}%`;
        videoRef.current.style.filter = `brightness(${defaultBrightness}) blur(${progress * maxBlur}px)`;
    }

    useEffect(() => { // this implements a parallax zeffect on the video, triggered by scroll position
        applyVideoEffects(0); // initial state

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: headerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                onUpdate: (self) => { applyVideoEffects(self.progress) }
            },

        });

        return () => { tl.kill() }; // return function to clean up when component unmounts
    }, []);
    return (
        <>
            {/* <div id="preloader">
                <div className="loader"></div>
            </div> */}
            <div className="home-page">

                <div className="pg-header" ref={headerRef}>
                    <video
                        id="pg-video"
                        src={bgvid}
                        loop
                        muted
                        playsInline
                        autoPlay
                        disablePictureInPicture
                        disableRemotePlayback
                        preload="auto"
                        ref={videoRef}
                        style={{
                            margin: "auto"
                        }}
                    >

                    </video>
                    <div className="content-overlay">
                        <ScrambledText text="ENIGMA" className="text-center text-white font-bold title header text-shadow-lg/45 fadeInUpLong" speed={30} />


                        <ScrambledText text="The cipher and bloodline that impacted millions of lives from World War II" className="text-center text-white font-bold subheader text-shadow-lg/45 fadeInUpLong" speed={30} />
                        <NavLink to="/history"><TopScroll />
                            <button className="hov-element flex m-auto p-3 pl-16 pr-16 border-2 border-solid border-white text-bold text-2xl font-bold rounded-md cursor-pointer hover:scale-110 transition-all text-white fadeInUpLong" id="home-button">
                                <ScrambledText text="Get Started" speed={30} />

                            </button>


                        </NavLink>


                    </div> {/* Thesis on homepage hould answer the research question and arguments, facts, resarch question*/}
                    <div className="content-overlay arrow">

                        <IoIosArrowDown className="text-white m-auto flex text-center text-shadow-lg/45 animate-bounce down" />
                    </div>
                </div>



                <div className="main-content">
                    <ScrollAnimation
                        offset={0}
                        animateOnce
                        animateIn="backInUp"
                        duration={0.5}
                        delay={0.5}
                    >


                        <div className="side-images">
                            <NavLink
                                to="/turing"
                                className="hov-element cursor-pointer hover:scale-110 rounded-2xl transition-all"
                            >
                                <img
                                    className="side-image font-bold text-2xl text-center text-white"
                                    alt="loading..."
                                    loading="lazy"
                                    src={Alan}
                                />
                            </NavLink>
                            <NavLink
                                to="/machines"
                                className="hov-element  hov-element cursor-pointer rounded-2xl hover:scale-110 transition-all"
                            >
                                <img
                                    className="side-image font-bold text-2xl text-center text-white"
                                    alt="loading..."
                                    loading="lazy"
                                    src={Bombe}
                                />
                            </NavLink>
                        </div>
                    </ScrollAnimation>

                    <div className="center-section">
                        <ScrollAnimation
                            offset={0}
                            animateOnce
                            animateIn="backInUp"
                            duration={0.5}
                            delay={0.5}>

                            <div className="text-center center-section  p-10 border-white border-3 text-white 
                            font-semibold xl:text-xl lg:text-lg items-center
                            history-img">

                                <p className="font-extrabold xl:text-2xl lg:text-xl pb-10">

                                    To what extent did deciphering the Enigma code
                                    impact the outocme of World War II?

                                </p>
                                <br />
                                <p>

                                    Breaking the Enigma code helped bring
                                    victory for the Allied Powers, allowing them to end the war quickly and save
                                    countless lives.
                                </p>

                            </div>
                        </ScrollAnimation>
                    </div>

                    <ScrollAnimation
                        offset={-20}
                        animateIn="backInUp"
                        animateOnce
                        duration={0.5}
                        className="side-images"
                        delay={0.5}>

                        <NavLink
                            to="/impact"
                            className="cursor-pointer hov-element rounded-2xl hover:scale-110 transition-all"
                        >
                            <img
                                className="text-center text-white font-bold text-2xl right-img"
                                src={WW2}
                                loading="lazy"
                                alt="loading..."
                            />
                        </NavLink>
                        <NavLink
                            to="/history"
                            className="cursor-pointer hov-element rounded-2xl hover:scale-110 transition-all"
                        >
                            <img
                                className="text-center text-white font-bold text-2xl right-img"
                                src={Clock}
                                loading="lazy"
                                alt="loading..."
                            />
                        </NavLink>
                    </ScrollAnimation>

                </div>
                <div className="header-bg mb-10">

                    <ScrollAnimation
                        offset={0}
                        animateIn="zoomInUp"
                        animateOnce
                        duration={1}
                        delay={1.5}>
                        <ScrambledText
                            text="What is Enigma?"
                            className="text-center text-white text-6xl mt-25 font-bold text-shadow-md/90 "
                            speed={30}
                        />

                        <hr className="w-70 h-2 bg-white rounded-2xl m-auto  mt-10 flex  line" />
                    </ScrollAnimation>
                </div>
                <div className="flex template-layout justify-center flex-wrap mb-20">

                    <ScrollAnimation
                        offset={0}
                        animateIn="fadeInUp"
                        animateOnce
                        className=" flex  ml-50 mr-50  desc border-gray-500 border-1 rounded-xl p-8 text-2xl mb-60 font-bold
                    tracking-wide text-shadow-sm/45 text-white text-center history-img"
                        duration={1}
                        delay={2}>

                        <p
                        >
                            Enigma was a cipher that was primariy used by Germany military to send encrypted messages
                            making it supposedly impossible for anyone else to intercept and read them.
                            <br /><br />
                            Click the image below to start learning
                            <IoIosArrowDown className="text-white m-auto flex text-center text-shadow-lg/45 mt-10 animate-bounce down" />


                    <NavLink
                        to="/history"
                        className="m-auto flex self-center justify-center"
                        state={{ targetId: "enigma-history" }}
                    >


                        <img
                            src={Enigma}
                            className="h-100 rounded-lg history-img hover:scale-110"
                        />
                    </NavLink>
                        </p>
                    </ScrollAnimation>



                </div>


            </div>

        </>
    );
}