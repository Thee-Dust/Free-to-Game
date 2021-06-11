export default function cleanGameData(gameData) {
  const cleanData = gameData.map(game =>{
    const {id, title, thumbnail, short_description, game_url, genre, publisher, release_date} = game
    return {
      id: id,
      title: title,
      thumbnail: thumbnail,
      description: short_description,
      url: game_url,
      gene: genre,
      publisher: publisher,
      releaseDate: release_date
    }
  })
  return cleanData
}

