import React from "react";

export function SmartSelect({
    label,
    types
}) {
    return(
        <div className="building">
                <h3>{label}</h3>
                {types.map(type => {
                   return ( 
                        <p>
                            <input
                                type="radio" 
                                name="buildingType"
                            />
                            {type}
                        </p>
                    )
                })}
            </div>
    )
}