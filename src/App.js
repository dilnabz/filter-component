import React, {useState} from "react";
import './App.css';
import { SmartInput } from "./components/SmartInput/SmartInput";
import { CreditBody } from "./components/CreditBody/CreditBody";
import { Banks } from "./components/Banks/Banks";
import { SmartSelect } from "./components/SmartSelect/SmartSelect";
export function App() {
    const [creditValue, setCreditValue] = useState(1000000);
    const [initPaymentValue, setInitPaymentValue] = useState(10);
    const [mortgageTermValue, setMortgageTermValue] = useState(5);
    const percentages = [10, 15, 20, 25, 30];
    const mortgageTerms = [5, 10, 15, 20];
    const banks = ["ВТБ", "Совкомбанк", "Росбанк Дом", "Газпромбанк", "Открытие", "ПСБ", "Райффайзенбанк"];
    const buildingTypes = ["Все", "Вторичка", "Новостройка"];
    const housingTypes = ["Дом", "Квартира", "Апартаменты"];
    console.log({initPaymentValue})
    return (
    <div className="container">
        <div className="header">
            <h2>Настройка ипотеки</h2>
            <a>&#10006;</a>
       </div>
       <div className="credit">
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
                measurementUnit={"лет"}
            />
            <Banks 
                label={"Банк"}
                banks={banks}
            />
            <SmartSelect 
                label={"Тип объекта"}
                types={buildingTypes}
            />
            <SmartSelect 
                label={"Тип жилья"}
                types={housingTypes}
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


