const initState = {
  popularGames: [],
  newGames: [],
  upComingGames: [],
};
const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state,
         popularGames: action.payload.popularGames,
         upComingGames: action.payload.upComingGames,
         newGames: action.payload.newGames};
    default:
      return { ...state };
  }
};

export default gamesReducer;
