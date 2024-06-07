const initState = {
    todoList: [
        {
            id: 1,
            content: 'Học React'
        }, {
            id: 2,
            content: 'Học Redux'
        }, {
            id: 3,
            content: 'Call API'
        }
    ]
}

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        case 'REMOVE_TODO':
            return {
                ...state,
                todoList: action.payload
            }
        default:
            return state
    }
}

export default todoReducer;