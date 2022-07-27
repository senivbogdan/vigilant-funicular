import React, { useState } from "react";
import Input from "./Input";
import "../App.css"

export const Form = () => {
    const [emailInput, setEmailInput] = useState([])

    const addField = () => {
        setEmailInput([...emailInput, {
            id: Date.now()
        }])
    }

    const removeField = (id) => {
        setEmailInput(prev => prev.filter(i => i.id !== id))
    }

    return (
        <div className="wrapper-second">
            <div className="form-div">
                <form
                    className="form"
                        >
                    <div className="button-form">
                        <input
                            className="submit-button"
                            type="submit"/>
                        <button
                            className="add-button"
                            onClick={addField}
                            type="button"
                        >
                            ADD FIELD
                        </button>
                    </div>
                        <div className="wrapper-inputs">
                            {emailInput.map(i => <Input
                                removeField={removeField}
                                key={i.id}
                                id={i.id}/>
                            )
                            }
                        </div>
                </form>

            </div>
        </div>
    );
};

