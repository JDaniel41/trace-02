import React from "react";

function ConnectButton(props) {
    return (
        <a
            href={props.url}
            rel="noopener noreferrer"
            target="_blank"
            className="mt-10 bg-white rounded-lg px-8 py-4 m-8 text-black inline-block justify-between"
        >
            {props.text}
        </a>
    );
}

export default ConnectButton;
