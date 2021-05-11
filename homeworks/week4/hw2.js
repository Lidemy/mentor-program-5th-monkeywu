const request = require('request')

const process = require('process')

const input = process.argv[2]
const baseUrl = 'https://lidemy-book-store.herokuapp.com'
const path = 'books'

switch (input) {
  case 'list':
    listBook(20)
    break
  case 'read':
    readBook(process.argv[3])
    break
  case 'delete':
    deleteBook(process.argv[3])
    break
  case 'create':
    createBook(process.argv[3])
    break
  case 'update':
    updateBook(process.argv[3], process.argv[4])
    break
  default :
    console.log('參數錯誤或未輸入，無法確定該執行哪種動作')
}

function listBook(listNum) {
  request(
    `${baseUrl}/${path}?_limit=${listNum}`,
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
        console.log(books[i].id, books[i].name)
      }
    }
  )
}

function readBook(id) {
  request(
    `${baseUrl}/${path}/${id}`,
    (err, res, body) => {
      if (err) {
        console.log(err)
        return
      }

      if (res.statusCode >= 400) {
        console.log('statusCode error', res.statusCode)
        return
      }

      let book
      try {
        book = JSON.parse(body)
      } catch (err) {
        console.log(err)
        return
      }
      console.log(book.id, book.name)
    }
  )
}

function deleteBook(id) {
  request.delete(
    `${baseUrl}/${path}/${id}`,
    (err, res, body) => {
      if (err) {
        console.log(err)
        return
      }

      if (res.statusCode >= 400) {
        console.log('statusCode error', res.statusCode)
        return
      }

      console.log('刪除成功')
    }
  )
}

function createBook(bookName) {
  request.post(
    {
      url: `${baseUrl}/${path}`,
      form: { name: bookName }
    },
    (err, res, body) => {
      if (err) {
        console.log(err)
        return
      }

      if (res.statusCode >= 400) {
        console.log('statusCode error', res.statusCode)
        return
      }

      let book
      try {
        book = JSON.parse(body)
      } catch (err) {
        console.log(err)
        return
      }
      console.log(book.id, book.name)
    }
  )
}

function updateBook(id, bookName) {
  request.patch(
    {
      url: `${baseUrl}/${path}/${id}`,
      form: { name: bookName }
    },
    (err, res, body) => {
      if (err) {
        console.log(err)
        return
      }

      if (res.statusCode >= 400) {
        console.log('statusCode error', res.statusCode)
        return
      }

      let book
      try {
        book = JSON.parse(body)
      } catch (err) {
        console.log(err)
        return
      }
      console.log(book.id, book.name)
    }
  )
}
