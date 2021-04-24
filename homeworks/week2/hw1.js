function printStars(n) {
    if( typeof n !== 'number') {
        console.error('n必須為數字')
        return 
    } else {
        if ( 1 <= n && n <= 30 ) {
            for ( let i = 0; i < n; i++ ) {
                console.log('*')
            }
        }
    }
}

printStars(1)
printStars(3)
printStars(6)