// Base url of the api
const base_url = "https://api.rawg.io/api/";

const date = new Date();

const getCurrentMonth = () => {
  const month = date.getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  }
  return month;
};

const getCurrentDay = () => {
  const day = date.getDate();
  if (day < 10) {
    return `0${day}`;
  }
  return day;
};

const currentYear = date.getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newgGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popularGames}`;
export const upcomingGamesUrl = () => `${base_url}${upcomingGames}`;
export const newGamesUrl = () => `${base_url}${newgGames}`;
