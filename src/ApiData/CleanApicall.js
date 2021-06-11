export default function cleanGameData(gameData) {
  const cleanData = gameData.map(game =>{
    const {id, title, thumbnail, short_description, game_url, genre, developer, release_date} = game
    return {
      id: id,
      title: title,
      thumbnail: thumbnail,
      description: short_description,
      url: game_url,
      genre: genre,
      developer: developer,
      releaseDate: release_date
    }
  })
  return cleanData
}

