const updateChosenBreed = (state, { id, name }) => {
    return {
        ...state,
        chosenBreedID: id,
        chosenBreedName: name
    };
};

const saveHistory = (state, { id, name}) => {
    return {
        ...state,
        history: [
            ...state.history, 
            {
                id, 
                name
            }
        ]
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