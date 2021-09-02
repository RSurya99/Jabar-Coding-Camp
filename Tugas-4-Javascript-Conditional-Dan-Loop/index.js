// soal 1

// buatlah variabel seperti di bawah ini:
// var nilai;
// pilih angka dari 0 sampai 100, misal 75. lalu isi variabel tersebut dengan angka tersebut. lalu buat lah pengkondisian dengan if-elseif dengan kondisi

// nilai >= 85 indeksnya A
// nilai >= 75 dan nilai < 85 indeksnya B
// nilai >= 65 dan nilai < 75 indeksnya c
// nilai >= 55 dan nilai < 65 indeksnya D
// nilai < 55 indeksnya E

// Jawaban soal no 1
var nilai = 66;
var index;

if(nilai >= 85){
    index = 'A';
}else if(nilai >= 75 && nilai < 85){
    index = 'B';
}else if(nilai >= 65 && nilai < 75){
    index = 'C';
}else if(nilai >= 55 && nilai < 65){
    index = 'D';
}else if(nilai < 55){
    index = 'E';
}

console.log('JAWABAN SOAL NO 1 : \n Nilai : ' + nilai + ', memiliki indeks: ' + index + '\n');


// soal 2

// buatlah variabel seperti di bawah ini
// var tanggal = 22;
// var bulan = 7;
// var tahun = 2020;
// ganti tanggal ,bulan, dan tahun sesuai dengan tanggal lahir anda dan buatlah switch case pada bulan, lalu muncul kan string nya dengan output seperti ini 22 Juli 2020 (isi di sesuaikan dengan tanggal lahir masing-masing)

// Jawaban soal no 2
var tanggal = 5;
var bulan = 12;
var tahun = 2003;

switch(bulan){
    case 1:
        bulan = 'Januari';
        break;
    case 2:
        bulan = 'Februari';
        break;
    case 3:
        bulan = 'Maret';
        break;
    case 4:
        bulan = 'April';
        break;
    case 5:
        bulan = 'Mei';
        break;
    case 6:
        bulan = 'Juni';
        break;
    case 7:
        bulan = 'Juli';
        break;
    case 8:
        bulan = 'Agustus';
        break;
    case 9:
        bulan = 'September';
        break;
    case 10:
        bulan = 'Oktober';
        break;
    case 11:
        bulan = 'November';
        break;
    case 12:
        bulan = 'Desember';
        break;
    default:
        console.log('Tidak ada bulan ke : ' + bulan);
}

console.log('JAWABAN SOAL NO 2 : \n ' + tanggal + ' ' + bulan + ' ' + tahun + '\n');


// soal 3
// Kali ini kamu diminta untuk menampilkan sebuah segitiga dengan tanda pagar (#) dengan dimensi tinggi n dan alas n. Looping boleh menggunakan syntax apa pun (while, for, do while).

// Output untuk n=3 :
// #
// ##
// ###

// Jawaban soal no 3
var n = 5;
var result = '';
for(var i=1; i <= n; i++){
    for(var e=0; e<i; e++){
        result += '#';
    }
    result += '\n';
}

console.log('JAWABAN SOAL NO 3 : \n' + result + '\n');


// soal 4
// berilah suatu nilai m dengan tipe integer, dan buatlah pengulangan dari 1 sampai dengan m, dan berikan output sebagai berikut.
// contoh :

// Output untuk m = 3

// 1 - I love programming
// 2 - I love Javascript
// 3 - I love VueJS
// ===

// Jawaban soal no 4
var m = 4;
var e = 1;
var result4 = '';

for(var i=1; i <= m; i++){
    if(e > 3){
        e = 1;
    }

    switch(e){
        case 1:
            result4 += i + ' - I love programming \n';
            break;
        case 2:
            result4 += i + ' - I love Javascript \n';
            break;
        case 3:
            result4 += i + ' - I love VueJS \n === \n';
            break;
    }
    
    e++;
}

console.log('JAWABAN SOAL NO 4 : \n' + result4 + '\n');