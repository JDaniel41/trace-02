import AboutMeDetail from "./AboutMeDetail";

function AboutMe(props) {
	return (
		<section id="about" className="text-gray-600 body-font pt-10">
			<h3 className="text-2xl text-center font-bold text-black">
				More About Me
			</h3>
			<div className="container px-5 py-10 mx-auto flex flex-wrap">
				<div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
					<img
						alt="feature"
						className="object-cover object-center h-full w-full"
						src={props.personPhoto}
					/>
				</div>
				<div
					className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 
                lg:pl-12 lg:text-left text-center justify-center"
				>
					{props.details.map((feature) => {
						return (
							<AboutMeDetail
								heading={feature.heading}
								description={feature.description}
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
