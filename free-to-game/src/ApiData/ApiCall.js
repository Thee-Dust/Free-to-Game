const fetchGameData = async () => {
  const response = await fetch("https://www.freetogame.com/api/games")
  return await response.json()
}

export default fetchGameData