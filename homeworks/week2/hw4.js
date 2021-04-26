function printFactor(n) {
    if( typeof n !== 'number' ) {
        console.error('參數必須為數字')
        return 
    } else {
        let halfOfParam = n >> 1
    for( let i= 1; i<= halfOfParam; i++ ){
            if( n%i === 0 )
                console.log(i);
        }
        console.log(n);
    }
}

printFactor(10);
printFactor(7)