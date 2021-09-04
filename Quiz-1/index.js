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


// Kuis 2
// Judul : Function Penghasil Tanggal Hari Esok
// Buatlah sebuah function dengan nama next_date() yang menerima 3 parameter tanggal, bulan, tahun dan mengembalikan nilai tanggal hari esok dalam bentuk string, dengan contoh input dan otput sebagai berikut.

// contoh 1
// var tanggal = 29
// var bulan = 2
// var tahun = 2020

// next_date(tanggal , bulan , tahun ) // output : 1 Maret 2020

// contoh 2
// var tanggal = 28
// var bulan = 2
// var tahun = 2021

// next_date(tanggal , bulan , tahun ) // output : 1 Maret 2021

// contoh 3
// var tanggal = 31
// var bulan = 12
// var tahun = 2020

// next_date(tanggal , bulan , tahun ) // output : 1 Januari 2021

// Jawaban Kuis 2
function next_date(tanggal, bulan, tahun){
    var months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];
    var selectedMonthName = months[bulan-1];
    var combine = selectedMonthName + '/' + tanggal.toString() + '/' + tahun.toString();
    var d = new Date(combine);
    d.setDate(d.getDate() + 1);
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

var result2 = next_date(tanggal, bulan, tahun);
console.log('JAWABAN KUIS 2 : ' + result2);