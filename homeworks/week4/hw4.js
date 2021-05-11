const request = require('request')

const baseUrl = 'https://api.twitch.tv/kraken'
const clientID = 'faei9e3w0jnjfmxgonlxrcxkokxbid'

request({
  method: 'GET',
  url: `${baseUrl}/games/top`,
  headers: {
    'Client-ID': clientID,
    Accept: 'application/vnd.twitchtv.v5+json'
  }
}, (err, res, body) => {
  if (err) {
    console.log(err)
    return
  }

  if (res.statusCode >= 400) {
    console.log('statusCode error', res.statusCode)
    return
  }
  let data
  let games
  try {
    data = JSON.parse(body)
    games = data.top
    games.forEach((game) => {
      console.log(`${game.viewers} ${game.game.name}`)
    })
  } catch (err) {
    console.log(err)
  }
})
