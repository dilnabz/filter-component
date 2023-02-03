import React, {useState} from "react";
import "./SmartSelect.css";

export function SmartSelect({
    label,
    types,
    translations,
    onChange,
    value
}) {
    return(
        <div className="building">
                <div className="buildingLabel">{label}</div>
                <div className="radioGroup">
                    {types.map(type => {
                        return <label className="buildingType">
                            <input
                                type="radio" 
                                name="buildingType"
                                value={type}
                                checked={type === value}
                                onChange={(e) => onChange(e.target.value)}
                            />
                            <span 
                                className={type === value ? "buildingSpanClick" : "buildingSpan"} 
                            >
                            </span>
                            {translations[type]}
                        </label>
                    })}
                </div>
                
            </div>
    )
}