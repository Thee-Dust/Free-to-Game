const fetchGameData = async () => {
  const response = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": process.env.REACT_APP_API_KEY,
		"x-rapidapi-host": process.env.REACT_APP_API_HOST
	}
})
  return response.json()
}

export default fetchGameData