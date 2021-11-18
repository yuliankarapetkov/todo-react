import './Task.css';

function Task() {
    const isEditing = false;

    return (
        <>
            {isEditing &&
                <div className="task">
                    <div className="col">
                    </div>

                    <div className="col">
                        <div className="description">
                            <form>
                                <input
                                    type="text" 
                                />
                            </form>
                        </div>
                    </div>

                    <div className="col">
                        <button className="todo-item__button">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            }

            {!isEditing &&
                <div className="task">
                    <div className="col">
                        <button
                            className="todo-item__button"
                        >
                            <i className="fas fa-check"></i>
                        </button>
                    </div>

                    <div className="col">
                        <div className="todo-item__description">
                            {/* {{ item.description }} */}
                        </div>
                    </div>

                    <div className="col">
                        <button className="todo-item__button">
                            <i className="fas fa-trash"></i>
                        </button>

                        <button className="todo-item__button">
                            <i className="fas fa-pen"></i>
                        </button>
                    </div>
                </div>
            }
        </>
    );
}

export default Task;
