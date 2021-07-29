import React from "react";

function NavButton(props) {
    return (
        <li>
            <a class="px-8 py-4  hover:bg-red-700 block" href={props.link}>
                {props.title}
            </a>
        </li>
    );
}

export default NavButton;
