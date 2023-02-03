import React from "react";
import "./Banks.css"

export function Banks({
    label,
    banks,
    selectedBanks,
    onChange
}) {
    function handleChange(event) {
        const {value} = event.target;
        if (selectedBanks.includes(value)) {
            onChange(selectedBanks.filter(elem => elem !== value));
        } else {onChange([...selectedBanks, value]);}
    }
    return(
        <div className="bankContainer">
                <div className="bankLabel">{label}</div>
                <div className="bankField">
                    {banks.map(bank => {
                        return(
                            <label className={selectedBanks.includes(bank[0]) ? "bankItemClick" : "bankItem"}>
                                <input 
                                    type="checkbox" 
                                    name="checkbox"
                                    value={bank[0]}
                                    checked={selectedBanks.includes(bank[0])}
                                    onChange={handleChange}
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