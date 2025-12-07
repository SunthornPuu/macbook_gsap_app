import { useEffect, useRef } from "react";

export default function Hero() {

    const videoRef = useRef();
    useEffect(() => {
        videoRef.current.playbackRate = 2;
    })

    return (
        <section className="heroSection">
            <h1 className="text-4xl font-bold text-white">MacBook Pro</h1>
            <img className="w-1/2 border-2 border-black" src="/title.png" alt="title" />
            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted />
            <button className="buyBut">Buy</button>
            <br />
            <p className="text-xs md:text-xl">From $1599 ot $$133/mo for the first 12 months</p>
            <div className="h-6 md:h-30"></div>
        </section>
    );
}