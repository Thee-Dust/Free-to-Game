export default async function fetchGameData(query) {
  const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/${query}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": process.env.FREE_TO_GAME_API_KEY,
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
	}
})
  const data = errorHandler(response);
  return data
}

const errorHandler = (response) => {
  if (!response.ok) {
    throw new Error(response.message);
  } else {
    return response.json();
  }
}
