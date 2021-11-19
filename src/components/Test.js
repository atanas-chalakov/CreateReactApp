import { useState } from "react";

function Todo(props) {

    const [isOpen, setIsOpen] = useState(false);

    function log() {
        console.log('click');
        console.log(props.text);
    }
    function changeIsOpen() {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <div className="test">{props.text}</div>
            <button onClick={log}>BUTTON</button>
            <button onClick={changeIsOpen}>BUTTON</button>
        </div>
    )
}
export default Todo;