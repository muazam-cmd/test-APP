import { useState } from "react";
const Home = () => {

    const [name, setName] = useState('Mzm');
    const [age, setAge] = useState('25');

    const handleClick = () => {
        setName('Muazam')
        setAge('26')
    }

    return (
        <div className="home">
            <h2>Homepage!</h2>
            <p>{name} age is {age} now, <br /> Click to know his age on april 23rd</p>
            <button onClick={handleClick}> Click to know the abbreviation of above word & Age</button>
        </div>
    );
}

export default Home