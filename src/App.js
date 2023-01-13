import React from "react";
import './App.css';

export function App() {
  return (
    <div className="container">
        <div className="header">
            <h2>Настройка ипотеки</h2>
            <a>&#10006;</a>
       </div>
       <div className="credit">
            <div className="creditBody">
                <h4>Кредит</h4>
                <input className="creditSum"></input>
            </div>
            <div className="initPayment">
                <h4>Первоначальный взнос</h4>
                <input className="initPaymentSum"></input>
                <div className="percentageBtn">
                    <a>10%</a>
                    <a>15%</a>
                    <a>20%</a>
                    <a>25%</a>
                    <a>30%</a>
                </div>
            </div>
            <div className="loanTerm">
                <h4>Срок кредита</h4>
                <input className="loanTermAmount"></input>
                <div className="yearsBtn">
                    <a>5 лет</a>
                    <a>10 лет</a>
                    <a>15 лет</a>
                    <a>20 лет</a>
                </div>
            </div>
            <div className="bank">
                <h3>Банк</h3>
                <a className="bank-item">ВТБ</a>
                <a className="bank-item">Совкомбанк</a>
                <a className="bank-item">Росбанк Дом</a>
                <a className="bank-item">Газпромбанк</a>
                <a className="bank-item">Открытие</a>
                <a className="bank-item">ПСБ</a>
                <a className="bank-item">Райффайзенбанк</a>
            </div>
            <div className="building">
                <h3>Тип объекта</h3>
                <p><input className="all" type='radio' />Все</p>
                <p><input className="secondary" type='radio' />Вторичка</p>
                <p><input className="newBuilding" type='radio' />Новостройка</p>
            </div>
            <div className="housing">
                <h3>Тип жилья</h3>
                <p><input className="house" type='radio' />Дом</p>
                <p><input className="flat" type='radio' />Квартира</p>
                <p><input className="apartment" type='radio' />Апартаменты</p>
            </div>
            <div className="insurance">
                <p><input type='checkbox'></input>Со страховкой</p>
            </div>
       </div>
    </div>
  )
}


