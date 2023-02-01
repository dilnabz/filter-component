import React from "react";
import "./CreditBody.css";
import iconRuble from "./iconRuble.png";

export function CreditBody({
    label,
    value,
    onChange
}) {
    function handleChange(event) {
        const {value} = event.target;
        if (/^\d*$/.test(value)) {
          onChange(+value)
        }
      }   
    return (
        <div className="creditBody">
            <div className="creditLabel">{label}</div> 
            <div className="inputField">
                <input 
                    className="creditValue" 
                    type="text" 
                    value={value}
                    onChange={handleChange} 
                />
                <div className="iconRuble">
                    <img src={iconRuble} />
                </div>
            </div>
        </div>
    )
}