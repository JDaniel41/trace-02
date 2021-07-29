import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Hobbies from "./components/Hobbies";
import AboutMe from "./components/AboutMe";

import villagerImg from "./img/villager.jpg";
import basketballImg from "./img/basketball.jpeg";
import spotifyImg from "./img/spotify-logo.jpg";

const sectionNames = ["Hero", "About Me"];
const buttonData = [
	["https://www.linkedin.com/in/jonathandaniel23/", "Connect on LinkedIn!"],
	["https://www.github.com/jdaniel41/", "Connect on GitHub!"],
];
const hobbyData = [
	{
		src: villagerImg,
		title: "Video Games",
		description:
			"I love playing Video Games, especially FIFA and Rocket League! When I'm not playing on my PC, you can also catch me playing Smash as the Villager!",
	},
	{
		src: spotifyImg,
		title: "Music",
		description:
			"I love listening to music on Spotify! My favorite genres are Hip-Hop, Gospel and EDM. I also love listening to soundtracks from shows like Steven Universe.",
	},
	{
		src: basketballImg,
		title: "Basketball",
		description:
			"I love playing basketball to relax! I never played on a team in High School, but you can catch me at Clemson playing 3v3 or 5v5 basketball all the time!",
	},
];

function App() {
	return (
		<div>
			<NavBar title="Jonathan Daniel" sectionNames={sectionNames} />
			<Hero
				name="Jonathan Daniel"
				subHeading="Computer Science - National Scholars Program"
				buttonData={buttonData}
			/>
			<Hobbies hobbyData={hobbyData} />
			<AboutMe />
		</div>
	);
}

export default App;
