import { useState } from "react";
const INITIAL_VAL = { name: "", color: "" };

const NewColor = ({ addColor }) => {
    const [formData, setFormData] = useState(INITIAL_VAL);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }))
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({ ...formData });
        setFormData(INTIAL_VAL);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="colorName">Color Name: </label>
                <input type="text" name="colorName" value={formData.name} onChange={handleChange} />

                <label htmlFor="color">Color: </label>
                <input type="color" name="color" value={formData.name} onChange={handleChange} />

                <button>Make Color</button>
            </form>
        </div>
    )
}
export default NewColor;