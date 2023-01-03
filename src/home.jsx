import React from "react";

function Button() {
    function handleClick() {
        console.log('button got clicked');
    }

    return (
        <button onClick={handleClick}>
            Click Me!
        </button>
    )
}
export default home.jsx;