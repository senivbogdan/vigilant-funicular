import React, { useState } from "react";
import { Input } from "./Input";
import "../App.css"

export const Form = () => {
    const [emailInput, setEmailInput] = useState([])
    const addField = () => {
        setEmailInput([...emailInput, {
            id: Date.now()
        }])
    }

    const removeField = (id) => {
        setEmailInput(emailInput.filter(i => i.id !== id))
    }

    return (
        <div className="wrapper-second">
            <div className="form-div">
                <form
                    className="form"
                    action={"/path"}
                    method={"post"}>
                        {emailInput.map(i => <Input
                            removeField={removeField}
                            key={i.id}
                            id={i.id}/>
                    )
                        }
                </form>
            </div>
            <div className="button-div">
                <button
                    className="add-button"
                    onClick={() => addField()}
                >
                    ADD FIELD
                </button>
                <input
                    className="submit-button"
                    type="submit"/>
            </div>
        </div>
    );
};

