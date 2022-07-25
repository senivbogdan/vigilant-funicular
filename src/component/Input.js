import React, {useState} from "react";
import ErrorComp from "./ErrorComp";

const Input = ({ setEmailInput, emailInput, id }) => {
    const [value, setValue] = useState("")
    const [valid, setValid] = useState(true)

    const handleInput = (e) => {
        setValue(e.target.value)
        const reg = /^\S+@\S+$/i

        return reg.test(e.target.value) ? setValid(true) : setValid(false)
    }

    const removeField = (id) => {
        setEmailInput(emailInput.filter(i => i.id !== id))
    }

    return (
        <div className={"wrapper"}>
                <input
                    className="input-text"
                    type={"text"}
                    value={value}
                    onChange={event => handleInput(event)}
                />
                <button
                    className="delete-button"
                    onClick={() => removeField(id)}
                  >
                    DELETE FIELD
                </button>
            {!valid && <ErrorComp/>}
        </div>

    );
};

export default Input;