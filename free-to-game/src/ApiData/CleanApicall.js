const cleanGameData = (data) => {
  const {id, title, thumbnail, short_description, game_url, genre, publisher, release_date} = data
  return {
    id: id,
    title: title,
    thumbnail: thumbnail,
    description: short_description,
    url: game_url,
    genre: genre,
    publisher: publisher,
    releaseDate: release_date
  }
}