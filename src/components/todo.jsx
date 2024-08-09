
import { useState } from "react";
import "../styles/todo.css";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchTerm } from "../state/actions/actions"
import FilterButton from "./filterbutton";
import TodoList from "./todolist";

function Todo() {

    const dispatch = useDispatch();
    const [newTodoText, setNewTodoText] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const handleAddTodo = (text) => {
        dispatch(addTodo(text));
    }

    const handleAddTodoClick = () => {
        if (newTodoText.trim() !== "") {
            handleAddTodo(newTodoText.trim());
            setNewTodoText("");
        }
    }

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        dispatch(updateSearchTerm(value));
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
            <div className="todo-option-box">
                <FilterButton />
                <input value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)} type="text" name="addSearch" id="addSearch" placeholder="Search Todo" className="todo-search"/>
                <button className="todo-add-button"><BsSearch /></button>
            </div>

            <TodoList />
        </div>
    )
}

export default Todo;