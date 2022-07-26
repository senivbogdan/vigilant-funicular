import React, { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";

export const Input = ({ removeField, id }) => {
    const [value, setValue] = useState("")
    const [valid, setValid] = useState(true)

    const handleInput = (e) => {
        setValue(e.target.value)
        const reg = /^\S+@\S+$/i

        return reg.test(e.target.value) ? setValid(true) : setValid(false)
    }

    return (
        <div className={"wrapper-second"}>
                <input
                    className="input-text"
                    value={value}
                    onChange={event => handleInput(event)}
                />
                <button
                    className="delete-button"
                    onClick={() => removeField(id)}
                  >
                    X
                </button>
                <ErrorMessage valid={valid}/>
        </div>

    );
};

