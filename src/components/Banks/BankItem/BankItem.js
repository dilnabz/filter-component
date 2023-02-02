import React, {useState} from "react";
import "./Bank.css";

export function BankItem({
    icon,
    name
}) {
    const [bankItemStyle, setBankItemStyle] = useState(false);
    return(
        <div className={bankItemStyle ? "bankItemClick" : "bankItem"} onClick={() => setBankItemStyle(!bankItemStyle)}>
            <div className="bankIcon"><img src={icon} /></div>
            <div className="bankName">{name}</div>
        </div>
    )
}