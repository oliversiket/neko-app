const updateChosenBreed = (state, { breed }) => {
    return {
        ...state,
        chosenBreed: breed, 
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case "update": updateChosenBreed(state, action) ; 

        default: return state;
        } 
};

export default reducer;