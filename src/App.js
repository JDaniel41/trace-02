import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Hobbies from "./components/Hobbies";
import AboutMe from "./components/AboutMe";

import villagerImg from "./img/villager.jpg";
import basketballImg from "./img/basketball.jpeg";
import spotifyImg from "./img/spotify-logo.jpg";
import soccerJonathan from "./img/soccer-jon.jpg";

const sectionData = [
    {
        link: "#hero",
        title: "Hero",
    },
    {
        link: "#hobbies",
        title: "My Hobbies",
    },
    {
        link: "#about",
        title: "About Me",
    },
];
const buttonData = [
    {
        link: "https://www.linkedin.com/in/jonathandaniel23/",
        title: "Connect on LinkedIn!",
    },
    {
        link: "https://www.github.com/jdaniel41/",
        title: "Connect on GitHub!",
    },
];
const hobbyData = [
    {
        src: villagerImg,
        altText: "An image of the Villager from Super Smash Bros. Ultimate",
        title: "Video Games",
        description:
            "I love playing Video Games, especially FIFA and Rocket League! When I'm not playing on my PC, you can also catch me playing Smash as the Villager!",
    },
    {
        src: spotifyImg,
        altText: "The Spotify Logo",
        title: "Music",
        description:
            "I love listening to music on Spotify! My favorite genres are Hip-Hop, Gospel and EDM. I also love listening to soundtracks from shows like Steven Universe.",
    },
    {
        src: basketballImg,
        altText: "A basketball resting on the court",
        title: "Basketball",
        description:
            "I love playing basketball to relax! I never played on a team in High School, but you can catch me at Clemson playing 3v3 or 5v5 basketball all the time!",
    },
];
const aboutMeDetails = [
    {
        heading: "Mr. Robot",
        description:
            "In High School, I competed in FIRST Robotics on a team called Toaster Tech! We were bready to toast the competition!",
    },
    {
        heading: "My Hometown",
        description:
            "Originally, I am from Stonecrest, Georgia, just outside of Atlanta, Georgia!",
    },
];

function App() {
    return (
        <div>
            <NavBar title="Jonathan Daniel" sectionData={sectionData} />
            <Hero
                name="Jonathan Daniel"
                subheading="Computer Science - National Scholars Program"
                buttonData={buttonData}
            />
            <Hobbies hobbyData={hobbyData} />
            <AboutMe personPhoto={soccerJonathan} details={aboutMeDetails} />
        </div>
    );
}

export default App;
