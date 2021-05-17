const taskReducer = (state={}, action) => {
    switch (action.type) {
        case "ADD_TASK": {
            console.log("added a Task");
            return state;
        }
        case "ADD_TASK_ERR": {
            console.log("ERROR");
            return state;
        }
        case "REMOVE_TASK": {
            console.log("task removed");
            return state;
        }
        case "REMOVE_TASK_ERR" : {
            console.log("error in removing");
            return state;
        }
        case "TOGGLE_CHECKED" : {
            console.log("checked");
            return state;
        }
        case "TOGGLE_CHECKED_ERR" : {
            console.log("checking error has occured");
            return state;
        }
        default:
            return state;
    }
}

export default taskReducer;