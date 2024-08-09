import { useDispatch, useSelector } from "react-redux";
import { filterTodo, markAllCompleted } from "../state/actions/actions";

const FilterButton = () => {

    const dispatch = useDispatch();
    const currentFilter = useSelector((state) => state.filter);

    const handleFilter = (filter) => {
        dispatch(filterTodo(filter))
    }


    return (
        <div>
            <select value={currentFilter} onChange={(e) => handleFilter(e.target.value)}>
                <option value="ALL">Default</option>
                <option value="COMPLETED">Completed</option>
                <option value="INCOMPLET">InComplet</option>
            </select>

            <button onClick={() => markAllCompleted()}>Mark All Completed</button>
        </div>
    )
}

export default FilterButton;