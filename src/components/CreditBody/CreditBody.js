import React from "react";
import "./CreditBody.css";

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
            <h4 className="label">{label}</h4>
            <input 
                className="creditSum" 
                type="text" 
                value={value}
                onChange={handleChange} 
            />
            <h4 className="ruble">₽</h4>
        </div>
    )
}