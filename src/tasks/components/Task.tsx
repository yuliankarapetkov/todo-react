import './Task.css';

function Task({ task }: { task: any; }) {
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
                        <button>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            }

            {!isEditing &&
                <div className="task">
                    <div className="col">
                        <button>
                            <i className="fas fa-check"></i>
                        </button>
                    </div>

                    <div className="col">
                        <div className="description">
                            {task.description}
                        </div>
                    </div>

                    <div className="col">
                        <button>
                            <i className="fas fa-trash"></i>
                        </button>

                        <button>
                            <i className="fas fa-pen"></i>
                        </button>
                    </div>
                </div>
            }
        </>
    );
}

export default Task;
