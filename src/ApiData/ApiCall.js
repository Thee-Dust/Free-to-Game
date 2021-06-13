export default async function fetchGameData(query) {
  const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/${query}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": '67f1bd6b87mshb743c6ea9a6cbacp1d3c85jsn3fc5852b98ce',
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
	}
})
  return response.json()
}
