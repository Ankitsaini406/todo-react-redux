import { ADD_TODO, FILTER_TODO, MARK_ALL_COMPLETED, MARK_COMPLETED, MARK_INCOMPLETE, REMOVE_TODO, TOGGLE_TODO, UPDATE_SERACH_TERM } from "../actions/actionTypes";


const initialState = {
    todos: [],
    filter: "ALL",
    searchTerm: "",
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, { text: action.payload.text, completed: false }],
                filter: state.filter,
                searchTerm: state.searchTerm
            }

        case TOGGLE_TODO:
            return {
                todo: state.map((todo, index) => index === action.payload.id ? { ...todo, completed: !todo.completed } : todo),
                filter: state.filter,
                searchTerm: state.searchTerm
            }

        case REMOVE_TODO:
            return {
                todo: state.map((index) => index !== action.payload.id),
                filter: state.filter,
                searchTerm: state.searchTerm
            }

        case MARK_COMPLETED:
            return {
                todo: state.map((todo, index) => index === action.payload.id ? { ...todo, completed: true } : todo),
                filter: state.filter,
                searchTerm: state.searchTerm
            }

        case MARK_INCOMPLETE:
            return {
                todo: state.map((todo, index) => index === action.payload.id ? { ...todo, completed: false } : todo),
                filter: state.filter,
                searchTerm: state.searchTerm
            }

        case FILTER_TODO:
            return {
                todos: state.todos,
                filter: action.payload.filter,
                searchTerm: state.searchTerm
            }

        case UPDATE_SERACH_TERM:
            return {
                todos: state.todos,
                filter: state.filter,
                searchTerm: action.payload.searchTerm
            }

        case MARK_ALL_COMPLETED:
            return {
                todos: state.todos.map((todo) => ({ todo, completed: true })),
                filter: state.filter,
                searchTerm: state.searchTerm
            }

        default:
            return state;
    }
}

export default todoReducer;