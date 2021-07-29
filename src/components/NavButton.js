import React from "react";
import ReactDOM from "react-dom";

function NavButton(props) {
	return (
		<li
			className="px-8 py-4 hover:bg-red-700 block"
			href={"#" + props.text}
		>
			{props.text}
		</li>
	);
}

export default NavButton;
