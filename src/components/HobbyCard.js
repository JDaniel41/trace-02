import React from "react";

function HobbyCard(props) {
	return (
		<li class="bg-white shadow rounded-lg overflow-hidden">
			<img src={props.imgLink} class="w-full" />
			<div className="p-4">
				<h3 class="font-bold">{props.hobbyName}</h3>
				<p>{props.hobbyDescription}</p>
			</div>
		</li>
	);
}

export default HobbyCard;
