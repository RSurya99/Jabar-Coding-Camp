// soal no 1
// gabungkan variabel-variabel tersebut agar menghasilkan output :
// saya senang belajar JAVASCRIPT
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

// jawaban soal no.1
var getFirstCombine = pertama.replace('sangat ', '').split(' ').slice(0,2).join(' ');
var getSecondCombine = kedua.split(' ').slice(0,2);
var combined = getFirstCombine.concat(' ', getSecondCombine[0], ' ', getSecondCombine[1].toUpperCase());
console.log('JAWABAN SOAL NO.1: \n '+ combined + '\n');


// soal no 2
// ubahlah variabel berikut ke dalam integer dan lakukan operasi matematika semua variabel agar menghasilkan output 24 (integer).
// *catatan :
// 1. gunakan 3 operasi, tidak boleh  lebih atau kurang. contoh : 10 + 2 * 4 + 6
// 2. Boleh menggunakan tanda kurung . contoh : (10 + 2 ) * (4 + 6)
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

// jawaban  soal no.2
var result = Number(kataPertama) + Number(kataKedua) * Number(kataKetiga) + Number(kataKeempat);
console.log('JAWABAN SOAL NO.2: \n' + result + '\n');


// soal no 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); // Kata Pertama: wah
var kataKedua; // do your own! 
var kataKetiga; // do your own! 
var kataKeempat; // do your own! 
var kataKelima; // do your own! 
// selesaikan variabel yang belum diisi dan hasilkan output seperti berikut:
// Kata Pertama: wah
// Kata Kedua: javascript
// Kata Ketiga: itu
// Kata Keempat: keren
// Kata Kelima: sekali

// jawaban soal no.3
var splittedKalimat = kalimat.split(' ');
kataKedua = splittedKalimat[1]; // Kata Kedua: javascript
kataKetiga = splittedKalimat[2]; // Kata Ketiga: itu
kataKeempat = splittedKalimat[3]; // Kata Keempat: keren
kataKelima = splittedKalimat[4]; // Kata Kelima: sekali
console.log('JAWABAN SOAL NO.3: \n kataPertama: ' + kataPertama + '\n kataKedua: ' + kataKedua + '\n kataKetiga: ' + kataKetiga + '\n kataKeempat: ' + kataKeempat + '\n kataKelima: ' + kataKelima);