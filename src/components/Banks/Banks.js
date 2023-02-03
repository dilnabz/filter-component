import React from "react";
import "./Banks.css"

export function Banks({
    label,
    banks,
    value,
    onChange
}) {
    return(
        <div className="bankContainer">
                <div className="bankLabel">{label}</div>
                <div className="bankField">
                    {banks.map(bank => {
                        return(
                            <label className={value.includes(bank[0]) ? "bankItemClick" : "bankItem"}>
                                <input 
                                    type="checkbox" 
                                    name="checkbox" 
                                    checked={value.includes(bank[0])}
                                    onChange={(e) => onChange(e.target.value)}
                                />
                                <div className="bankIcon"><img src={bank[2]} /></div>
                                <div className="bankName">{bank[1]}</div>
                            </label>
                        )
                    })}
                </div>
        </div>
    )
}