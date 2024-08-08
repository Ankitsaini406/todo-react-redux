
import { useState } from "react";
import "../styles/todo.css";
import { BsPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo } from "../state/actions/actions"

function Todo() {

    const dispatch = useDispatch();
    const [newTodoText, setNewTodoText] = useState("");

    const handleAddTodo = (text) => {
        dispatch(addTodo(text));
    }

    const handleAddTodoClick = () => {
        if (newTodoText.trim() !== "") {
            handleAddTodo(newTodoText.trim());
            setNewTodoText("");
        }
    }

    return(
        <div className="todo">
            <h2 className="todo-heading">Todo App</h2>

            {/* Input Text and Button */}
            <div className="todo-input-box">
                <input value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} type="text" name="addTodoInput" id="addTodoInput" placeholder="Add Todo" className="todo-input"/>
                <button onClick={handleAddTodoClick} className="todo-add-button"><BsPlus /></button>
            </div>

            {/* Filter and Search option */}
        </div>
    )
}

export default Todo;