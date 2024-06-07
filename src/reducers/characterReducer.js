//Reducer for character information Initialize State
const initState = {
    name: "Huỳnh Vĩnh Tiến",
    occupation: "Front-End Developer",
    age: 22,
    avatar: "https://img.freepik.com/free-vector/hand-drawn-asian-face-cartoon-illustration_52683-117201.jpg"

}

//Define Actions
const characterReducer = (state = initState, action) => {
    switch (action.type) {
            //Change character name
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.payload
            }

        case 'CHANGE_OCCUPATION':
            return {
                ...state,
                occupation: action.payload
            }
        case 'CHANGE_AGE':
            return {
                ...state,
                age: action.payload
            }
            case 'CHANGE_IMG':
            return {
                ...state,
                avatar: action.payload
            }
        default:
            return state
    }
}

export default characterReducer;