export const updateChosenBreed = ( breed ) => {
    return { type: "update", breed: breed}
}
export const saveHistory = ( id ) => {
    return { type: "save", id}
}