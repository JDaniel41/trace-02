import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

function App() {
	let sectionNames = ["Hero", "About Me"];
	let buttonData = [
		[
			"https://www.linkedin.com/in/jonathandaniel23/",
			"Connect on LinkedIn!",
		],
		["https://www.github.com/jdaniel41/", "Connect on GitHub!"],
	];

	return (
		<div>
			<NavBar title="Jonathan Daniel" sectionNames={sectionNames} />
			<Hero
				name="Jonathan Daniel"
				subHeading="Computer Science - National Scholars Program"
				buttonData={buttonData}
			/>
		</div>
	);
}

export default App;
