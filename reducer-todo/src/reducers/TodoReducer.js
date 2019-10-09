export const initialState = 
    [
    {item: "Reducer Todo Item",
    completed: false,
    id: 1
    }
]


export const reducer = (state, action) => {

    switch (action.type){
        case "ADD_ITEM":
            const itemToAdd = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return [...state, itemToAdd]
            
        case "TOGGLE_COMPLETE":
            const newState = state.map(item => item.id.toString() === action.payload.toString() ? {...item, completed:!item.completed} : item)
            return [...newState]

        case "CLEAR_COMPLETED":
            const clearState = state.filter(item => !item.completed)
            return [...clearState]

        default:
            return state;
    }
}