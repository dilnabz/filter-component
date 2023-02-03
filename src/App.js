import React, {useState} from "react";
import "./App.css";
import { SmartInput } from "./components/SmartInput/SmartInput";
import { CreditBody } from "./components/CreditBody/CreditBody";
import { Banks } from "./components/Banks/Banks";
import { SmartSelect } from "./components/SmartSelect/SmartSelect";
import closeBtn from "./components/Logos/close.png";
import vtbIcon from "./components/Logos/VTB.png";
import sovcombankIcon from "./components/Logos/Sovcombank.png";
import rosbankIcon from "./components/Logos/Rosbank-dom.png";
import gazpromIcon from "./components/Logos/Gazprom.png";
import otkritieIcon from "./components/Logos/Otkritie.png";
import psbIcon from "./components/Logos/PSB.png";
import raiffaizenIcon from "./components/Logos/Raiffaizen.png";

const buildingTypes = ["all", "new", "secondary"];
const buildingType2Translation = {
    "all": "Все",
    "new":  "Новостройка",
    "secondary": "Вторичка"
};
const housingTypes = ["house", "flat", "apartment"];
const housingType2Translation = {
    "house": "Дом",
    "flat":  "Квартира",
    "apartment": "Апартаменты"
};
const percentages = [10, 15, 20, 25, 30];
const mortgageTerms = [5, 10, 15, 20];
const subBanks = [
    ["vtb","ВТБ", vtbIcon],
    ["sovcom","Совкомбанк", sovcombankIcon],
    ["rosbank","Росбанк Дом", rosbankIcon],
    ["gpb","Газпромбанк", gazpromIcon],
    ["open","Открытие", otkritieIcon],
    ["psb","ПСБ", psbIcon],
    ["raif","Райффайзенбанк", raiffaizenIcon]
]

export function App() {
    const [creditValue, setCreditValue] = useState(1000000);
    const [initPaymentValue, setInitPaymentValue] = useState(10);
    const [mortgageTermValue, setMortgageTermValue] = useState(5);
    const [buildingType, setBuildingType] = useState("secondary");
    const [housingType, setHousingType] = useState("house");
    const [selectedBanks, setSelectedBanks] = useState([]);
    return (
    <div className="container">
        <div className="header">
            <div className="headerTitle">
                <h2>Настройка ипотеки</h2>
            </div>
            <div className="closeBtn">
                <img src={closeBtn} />
            </div>
       </div>
       <div className="creditSettings">
            <CreditBody 
                label={"Кредит"}
                value={creditValue}
                onChange={setCreditValue}
            />
            <SmartInput 
                label={"Первоначальный взнос"} 
                value={initPaymentValue} 
                onChange={setInitPaymentValue}
                min={0}
                max={80} 
                hints={percentages}
                measurementUnit = {"%"} 
            />
            <SmartInput 
                label={"Срок кредита"}
                value={mortgageTermValue}
                onChange={setMortgageTermValue}
                min={1}
                max={30}
                hints={mortgageTerms}
                measurementUnit={" лет"}
            />
            <Banks 
                label={"Банк"}
                banks={subBanks}
                selectedBanks={selectedBanks}
                onChange={setSelectedBanks}
            />
            <SmartSelect 
                label={"Тип объекта"}
                types={buildingTypes}
                translations={buildingType2Translation}
                onChange={setBuildingType}
                value={buildingType}
            />
            <SmartSelect 
                label={"Тип жилья"}
                types={housingTypes}
                translations={housingType2Translation}
                onChange={setHousingType}
                value={housingType}
            />
            <div className="insurance">
                <p>
                    <input 
                        type='checkbox' 
                    />
                    Со страховкой
                </p>
            </div>
       </div>
    </div>
  )
}


