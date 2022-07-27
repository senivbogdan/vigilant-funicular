import React, { useState } from "react";

const Input = ({ removeField, id }) => {
    const [value, setValue] = useState("")
    const [isValid, setIsValid] = useState(true)

    const handleInput = (e) => {
        setValue(e.target.value)
        const reg = /^\S+@\S+$/i

        return reg.test(e.target.value) ? setIsValid(true) : setIsValid(false)
    }

    return (
        <div className={"input-div"}>
                <input
                    className="input-text"
                    value={value}
                    onChange={handleInput}
                />
                <button
                    className="delete-button"
                    onClick={() => removeField(id)}
                  >
                    X
                </button>
                <p className={isValid ? "hidden" : "error"}>Поле непроходит валидацию</p>
        </div>

    );
};

export default Input

