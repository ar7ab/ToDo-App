
import PropTypes from "prop-types";
import tick from "../assets/tick.png";
import notTick from "../assets/not_tick.png";
import deleteIcon from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
    return (
        <div className="flex items-center my-3 gap-2">
            <div
                onClick={() => toggle(id)}
                className="flex flex-1 items-center cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") toggle(id);
                }}
            >
                <img
                    src={isComplete ? tick : notTick}
                    alt={isComplete ? "Completed tick icon" : "Incomplete tick icon"}
                    className="w-7"
                />
                <p
                    className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""
                        }`}
                >
                    {text}
                </p>
            </div>

            <img
                onClick={() => deleteTodo(id)}
                src={deleteIcon}
                alt="Delete icon"
                className="w-3.5 cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") deleteTodo(id);
                }}
            />
        </div>
    );
};

TodoItems.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    isComplete: PropTypes.bool.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
};

export default TodoItems;
