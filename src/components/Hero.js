import React from "react";
import ConnectButton from "./ConnectButton";

function Hero(props) {
    return (
        <section
            id="hero"
            className="h-screen bg-red-600 text-white text-center grid place-items-center"
        >
            <div>
                <h1 className="font-bold text-8xl leading-none">
                    {props.name}
                </h1>
                <p className="font-mono text-lg">{props.subheading}</p>
                {props.buttonData.map((currentLink) => {
                    return (
                        <ConnectButton
                            url={currentLink.link}
                            text={currentLink.title}
                        />
                    );
                })}
            </div>
        </section>
    );
}

export default Hero;
