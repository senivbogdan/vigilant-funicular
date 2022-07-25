import React, {useState} from "react";
import Input from "./Input";
import "../App.css"

const Form = () => {
    const [emailInput, setEmailInput] = useState([])
    const addField = () => {
        setEmailInput([...emailInput, {
            id: Date.now()
        }])
    }

    return (
        <div className="wrapper-second">
            <div className="form-div">
                <form
                    className="form"
                    action={"/path"}
                    method={"post"}>
                        {emailInput.map((i, index) => {
                        return <Input
                            setEmailInput={setEmailInput}
                            emailInput={emailInput}
                            key={i.id}
                            id={i.id}/>
                    })}
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

export default Form;