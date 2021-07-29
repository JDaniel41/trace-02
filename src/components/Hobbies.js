import React from "react";
import HobbyCard from "./HobbyCard";

function Hobbies(props) {
    return (
        <section id="hobbies" class="bg-gray-100 pt-10">
            <h3 className="text-2xl text-center font-bold">My Hobbies</h3>
            <ul className="grid p-10 gap-10 md:grid-cols-3">
                {props.hobbyData.map((hobby) => {
                    return (
                        <HobbyCard
                            imgLink={hobby.src}
                            altText={hobby.altText}
                            hobbyName={hobby.title}
                            hobbyDescription={hobby.description}
                        />
                    );
                })}
            </ul>
        </section>
    );
}

export default Hobbies;
