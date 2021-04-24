function join(arr, concatStr) {
  if ( !Array.isArray(arr) ) {
      console.error('參數arr必須為陣列')
      return
  } else {
      let str = ''
      arr.forEach((char,index) => {
        index !== arr.length -1 ? str += `${char}${concatStr}` : str += char
      })
      return str
  }
}

function repeat(str, times) {
  if ( typeof str !== 'string' ) {
      console.error('參數str必須為字串')
      return
  } else {
      let result = ''
      for ( let i = 0; i < times; i++ ) {
        result += str
      }
      return result
  }
}

join([1, 2, 3], '')
join(["a", "b", "c"], "!")
join(["a", 1, "b", 2, "c", 3], ',')

repeat('a', 5)
repeat('yoyo', 2)

