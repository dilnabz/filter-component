import React, {useState} from "react";
import "./SmartRadio.css";

export function SmartRadio({
    option
}) {
    const [radioButtonStyle, setRadioButtonStyle] = useState(false);
    return ( 
        <label  className="buildingType">
            <input
                type="radio" 
                name="buildingType"
            />
            <span 
                className={radioButtonStyle ? "buildingSpanClick" : "buildingSpan"} 
                onClick={() => setRadioButtonStyle(!radioButtonStyle)}
            >
            </span>
            {option}
        </label>
    )
}