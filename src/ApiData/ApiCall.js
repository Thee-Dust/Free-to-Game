export default async function fetchGameData() {
  const response = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": process.env.FREE_TO_GAME_API_KEY,
		"x-rapidapi-host": process.env.FREE_TO_GAME_API_HOST
	}
})
  return response.json()
}
