import './TaskForm.css';

function TaskForm() {
    return (
        <div className="form">
            <form>
                <input
                    type="text"
                    placeholder="What needs to be done?"
                />
            </form>
        </div>
    )
}

export default TaskForm;
