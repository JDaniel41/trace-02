function AboutMeDetail(props) {
	return (
		<div className="flex flex-col mb-10 lg:items-start items-center">
			<div className="flex-grow">
				<h2 className="text-gray-900 text-lg title-font font-medium mb-3">
					{props.heading}
				</h2>
				<p className="leading-relaxed text-base">{props.description}</p>
			</div>
		</div>
	);
}

export default AboutMeDetail;
