function capitalize(str) {
  if ( typeof str === 'string' && str.length > 0 ) {
      if( /^[a-zA-Z]+$/.test(str[0]) ) {
          if ( /^[a-z]+$/.test(str[0]) ) {
              str = str[0].toUpperCase() + str.slice(1)
          }
          return str 
      }
  } else {
      console.error('參數必須為字串且不得為空')
  }
}

capitalize('nick')
capitalize('Nick')
capitalize(',hello')