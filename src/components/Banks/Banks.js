import React from "react";
import "./Banks.css"

export function Banks({
    label,
    banks
}) {
    return(
        <div className="bankContainer">
                <div className="bankLabel">{label}</div>
                <div className="bankField">
                    {banks.map(bank => {
                        return(
                            <div className="bankItem">
                                <div className="bankIcon"><img src={bank[1]} /></div>
                                <div className="bankName">{bank[0]}</div>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}