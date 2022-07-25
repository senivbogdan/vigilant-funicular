import React, {useState} from 'react';
import ErrorComp from "./ErrorComp";

const Input = ({ setEmailForm, emailForm, id }) => {
    const [value, setValue] = useState("")
    const [valid, setValid] = useState(true)

    const handleInput = (e) => {
        setValue(e.target.value)
        const reg = /^\S+@\S+$/i
        if (reg.test(e.target.value)) {
            setValid(true)
        } else {
            setValid(false)
        }
    }

    const removeField = (id) => {
        // console.log(value, "value")
         setEmailForm(emailForm.filter(i => {
             return i.id !== id
         }))
    }

    console.log(value, "value")

    return (
        <div className={"wrapper"}>
            <div>
                <input
                    className={"input-text"}
                    type={"text"}
                    value={value}
                    onChange={event => handleInput(event)}
                />
                <button
                    className={"delete-button"}
                    onClick={() => removeField(id)}>
                    DELETE FIELD
                </button>
            </div>
            {valid ? "" : <ErrorComp/>}
        </div>

    );
};

export default Input;