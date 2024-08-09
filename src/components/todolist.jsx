import { useSelector } from "react-redux";

const TodoList = () => {

    const filterTodos = useSelector((state) => {
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm;

        return todos.filter((todo) => {
            const matchsFilter = (filter === "COMPLETED" && todo.completed) || (filter === "INCOMPLETE" && !todo.completed) || (filter === "ALL");
            const matchSearch = todo.text.toLowerCase().includes(searchTerm);

            return matchsFilter && matchSearch
        })
    })

    console.log('Filter todo: ', filterTodos);

    return (
        <div>Todo List</div>
    )
}

export default TodoList;