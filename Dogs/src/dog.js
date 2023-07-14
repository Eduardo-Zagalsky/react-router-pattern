import { useParams } from "react-router-dom";
import { useState } from "react";

const Dog = ({ dogs }) => {
    const { name } = useParams();
    const [dog, setDog] = useState(null);
    setDog(dogs[name]);
    return (
        <div>
            <img src={dog.src} alt={dog.name} style={{ height: "500px" }} />
            <h1>{dog.name}</h1>
            <ul>
                {dog.facts.map((fact) => { return (<li>{fact}</li>) })}
            </ul>
        </div>
    )
}

export default Dog;