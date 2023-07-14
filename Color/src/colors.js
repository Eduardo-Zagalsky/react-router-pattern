import { Link } from "react-router-dom";
const Colors = ({ colors }) => {
    return (
        <div>
            {colors.map(c => {
                <div>
                    <Link to={`colors/${c.name}`}>{c.name}</Link>
                </div>
            })}
        </div>
    )
}
export default Colors;