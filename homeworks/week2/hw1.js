function printStars(n) {
    if( typeof n !== 'number') {
        console.error('n必須為數字')
        return 
    } else {
        for ( let i = 0; i < n; i++ ) {
            console.log('*')
        }
    }
}

printStars(1)
printStars(3)
printStars(6)