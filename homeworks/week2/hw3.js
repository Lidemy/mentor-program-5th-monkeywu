function reverse(str) {
  if ( typeof str === 'string' && str.length > 0 ) {
      let charIndex = str.length -1
      let result = ''
    for ( let i = charIndex; i >= 0 ; i-- ) {
        result += str[i]
    }
    return result
  } {
      console.error('參數必須為字串且不得為空')
  }
}

reverse('yoyoyo')
reverse('1abc2')
reverse('1,2,3,2,1')