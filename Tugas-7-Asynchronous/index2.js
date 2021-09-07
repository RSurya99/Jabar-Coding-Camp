var readBooksPromise = require('./promise.js')

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// JAWABAN SOAL 2
const janji = () => {return readBooksPromise(10000, books[0])
    .then(t=>{return readBooksPromise(t, books[1])
        .then(t=>{return readBooksPromise(t, books[2])
            .then(t=>{return readBooksPromise(t, books[3])
                .catch(t=>{return t})
                }
            )}
        )}
    )}

janji()