// Kuis 1
// Judul : Function Penghitung Jumlah Kata

// Buatlah sebuah function dengan nama jumlah_kata() yang menerima sebuah kalimat (string), dan mengembalikan nilai jumlah kata dalam kalimat tersebut.

// Contoh

var kalimat_1 = " Halo nama saya Muhammad Iqbal Mubarok "
var kalimat_2 = "Saya Iqbal"

// jumlah_kata(kalimat_1) // 6
// jumlah_kata(kalimat_2) // 2

// Jawaban Kuis 1
function jumlah_kata(string){
    var splitted = string.split(' ').filter((word) => { if (word !== '') return word;  })
    return splitted.length;
}

var result = jumlah_kata(kalimat_1) // 6
console.log('JAWABAN KUIS 1 : ' + kalimat_1 + '= ' + result + '\n');


