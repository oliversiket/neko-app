export const updateChosenBreed = ( id, name ) => {
    return { type: "update", id, name}
}
export const saveHistory = ( id, name ) => {
    return { type: "save", id, name}
}
export const reset = () => {
    return { type: "reset" }; 
};