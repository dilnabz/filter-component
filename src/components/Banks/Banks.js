import React from "react";

export function Banks({
    label,
    banks,
}) {
    return(
        <div className="bank">
                <h3>{label}</h3>
                {banks.map(bank => {
                    return(
                        <a className="bank-item">{bank}</a>
                    )
                })}
        </div>
    )
}