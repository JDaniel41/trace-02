import React from "react";

import NavButton from "./NavButton";

function NavBar(props) {
    return (
        <header className="md:fixed w-full bg-red-800 text-white md:flex md:justify-between">
            <a className="font-bold block px-8 py-4" href="#top">
                {props.title}
            </a>
            <nav>
                <ul className="md:flex">
                    {props.sectionData.map((section) => {
                        return (
                            <NavButton
                                title={section.title}
                                link={section.link}
                            />
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
