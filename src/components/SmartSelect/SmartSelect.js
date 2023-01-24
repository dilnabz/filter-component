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
                {/* <p>
                    <input 
                    className="all" 
                    type='radio' 
                    name="buildingType" 
                    value='all' />
                        Все
                </p>
                <p>
                    <input 
                    className="secondary" 
                    type='radio' 
                    name="buildingType" 
                    value='secondary'/>
                        Вторичка
                </p>
                <p>
                    <input 
                    className="newBuilding" 
                    type='radio' 
                    name="buildingType" 
                    value='newBuilding' />
                        Новостройка
                </p> */}
            </div>
    )
}