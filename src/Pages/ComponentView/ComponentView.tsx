import React from "react";
import s from './ComponentView.module.css'
import SuperButton from "../../Components/SuperButton/SuperButton";
import SuperInputText from "../../Components/SuperInputText/SuperInputText";
import SuperCheckbox from "../../Components/SuperCheckbox/SuperCheckbox";

const ComponentView = () => {
    return (
        <div>
            <h1>Component preview</h1>
            <div>
                <h3>Button</h3>
                    <SuperButton>Button</SuperButton>
            </div>
            <div>
                <h3>Input</h3>
                <SuperInputText/>
            </div>
            <div>
                <h3>Checkbox</h3>
                <SuperCheckbox/>
            </div>
            <hr/>
            <hr/>
        </div>
    )
}

export default ComponentView;