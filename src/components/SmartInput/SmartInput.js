import React from "react";
import "./SmartInput.css";

export function SmartInput({
  label,
  value,
  onChange,
  hints,
  min,
  max,
  measurementUnit
}) {
    
    function handleChange(event) {
      const {value} = event.target;
      if (/^\d*$/.test(value)) {
        onChange(+value)
      }
    }   
    return (
    <div className="smartInput">
        <div className="smartInputLabel">{label}</div>
        <div className="smartInputField">
            <input
                className="smartInputValue"
                type="text"
                value={value}
                onChange={handleChange}
                style={{ outline: value > max ? "2px solid red" : undefined}}
            />
            <div className="measurementValue">
                {measurementUnit}
            </div>
        </div>
        <input
            className="smartInputValueRange"
            type="range"
            value={value}
            onChange={handleChange}
            min={min}
            max={max}
            step={1}
        />
        <div className="popValuesBtn">
            {hints.map(hint => {
                return (
                    <button 
                        className="hint" 
                        onClick={() => onChange(hint)}
                    >
                        {hint}
                        {measurementUnit}
                    </button>
                )
            })}
        </div>
    </div>
  )
}

// The value won't be less than min. The default is 0.
// The value won't be greater than max. The default is 100.
// The value will be a multiple of step. The default is 1.


// label="Первоначальный взнос"
// value={initPaymentValue}
// onChange={initPaymentHandleChange}
// min={0}
// max={100}
// hints=[0, 10, 20, 50, 80]
// measurementUnit="%" или "лет"  // ["год", "года", "лет"]