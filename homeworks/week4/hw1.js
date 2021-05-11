const request = require('request')

const baseUrl = 'https://lidemy-book-store.herokuapp.com'
const path = '/books?'
const query = '_limit=10'

request(
  baseUrl + path + query,
  (err, res, body) => {
    if (err) {
      console.log(err)
      return
    }

    if (res.statusCode >= 400) {
      console.log('statusCode error', res.statusCode)
      return
    }

    let books

    try {
      books = JSON.parse(body)
    } catch (err) {
      console.log(err)
      return
    }

    for (let i = 0; i < books.length; i++) {
      console.log(`${books[i].id} ${books[i].name}`)
    }
  }
)
