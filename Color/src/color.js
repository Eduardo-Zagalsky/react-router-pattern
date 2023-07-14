import { useParams } from "react-router-dom";
import { useState } from "react";

const Color = ({ colors }) => {
    const { color } = useParams();
    const [currColor, setCurrColor] = useState("");
    setCurrColor(colors[[color]])
    return (
        <div style={{ backgroundColor: currColor }}>
            <h1>Do you like the color {color}</h1>
        </div>
    )
}
export default Color;