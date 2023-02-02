import React, {useState} from "react";
import "./SmartSelect.css";
import { SmartRadio } from "./SmartRadio/SmartRadio";

export function SmartSelect({
    label,
    types
}) {
    return(
        <div className="building">
                <div className="buildingLabel">{label}</div>
                <div className="radioGroup">
                    {types.map(type => {
                        return ( 
                            <SmartRadio option={type}/>
                        )
                    })}
                </div>
                
            </div>
    )
}