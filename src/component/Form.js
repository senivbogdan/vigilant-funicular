import React, {useState} from 'react';
import Input from "./Input";
import "../App.css"

const Form = () => {
    const [emailForm, setEmailForm] = useState([])
    const addField = () => {
        setEmailForm([...emailForm, {
            id: Date.now()
        }])
    }

    return (
        <div className={"form-div"}>
            <div className="button-div">
                <button
                    className={"add-button"}
                    onClick={() => addField()}>
                    ADD FIELD
                </button>
                <input
                    className={"submit-button"}
                    type="submit"/>
            </div>
            <form action={"/path"} method={"post"}>
                {emailForm.map((i, index) => {
                    return <Input
                        setEmailForm={setEmailForm}
                        emailForm={emailForm}
                        key={i.id}
                        id={i.id}/>
                })}
            </form>
        </div>
    );
};

export default Form;