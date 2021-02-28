const initialState = {
    popularGames : [],
    newGames : [],
    upComingGames : []
};
const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "b":
            return state;
    
        default:
            return state;
    }
};

export default gamesReducer;
