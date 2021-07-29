import react from "react";
import soccerJonathan from "../img/soccer-jon.jpg";
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
						src={soccerJonathan}
					/>
				</div>
				<div
					className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 
                lg:pl-12 lg:text-left text-center justify-center"
				>
					<AboutMeDetail
						heading="Mr. Robot"
						description="In High School, I competed in FIRST Robotics on a team called Toaster Tech! We were bready to toast the competition!"
					/>
					<AboutMeDetail
						heading="My Hometown"
						description="Originally, I am from Stonecrest, Georgia, just outside of Atlanta, Georgia!"
					/>
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
