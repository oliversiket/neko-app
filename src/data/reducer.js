const updateChosenBreed = (state, { breed }) => {
    return {
        ...state,
        chosenBreed: breed, 
    };
};

const saveHistory = (state, { id }) => {
    return {
        ...state,
        history: [...state.history, id ]
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case "update": return updateChosenBreed(state, action); 
        case "save": return saveHistory(state, action);
        default: return state;
        } 
};

export default reducer;