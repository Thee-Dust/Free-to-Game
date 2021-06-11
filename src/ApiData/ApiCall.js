export default async function fetchGameData(query) {
  const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/${query}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": process.env.FREE_TO_GAME_API_KEY,
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
	}
})
  return response.json()
}
