import React from "react";

function ConnectButton(props) {
	return (
		<div>
			<a
				href={props.url}
				rel="noopener noreferrer"
				target="_blank"
				className="mt-10 bg-white rounded-lg px-8 py-4 text-black inline-block justify-between"
			>
				{props.text}
			</a>
		</div>
	);
}

export default ConnectButton;
