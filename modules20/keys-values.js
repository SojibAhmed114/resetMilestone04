// keys
let bookList = {
    names : 'bangal book',
    price: 145,
    library : 'shaghata,',
    'full addres' : ['mortorpara', 'shaghata02', 'gaibandha'] 
}

let checkKeys = Object.keys(bookList);
console.log(checkKeys); //[ 'names', 'price', 'library', 'full addres' ]

let checkValues = Object.values(bookList);
console.log(checkValues); //[ 'bangal book', 145, 'shaghata,', [ 'mortorpara', 'shaghata02', 'gaibandha' ] ]