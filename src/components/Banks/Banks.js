import React from "react";
import { BankItem } from "./BankItem/BankItem";
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
                            <BankItem icon ={bank[1]} name={bank[0]}/>
                        )
                    })}
                </div>
        </div>
    )
}