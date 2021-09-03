// soal 1
// buatlah variabel seperti di bawah ini
// var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
// urutkan array di atas dan tampilkan data 

// Jawaban Soal No 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];

for (var i = 1; i < daftarHewan.length; i++){
    for (var j = 0; j < i; j++){
        if (daftarHewan[i] < daftarHewan[j]) {
          var x = daftarHewan[i];
          daftarHewan[i] = daftarHewan[j];
          daftarHewan[j] = x;
        }
    }
}

console.log('JAWABAN SOAL NO 1 : ');
for (var e = 0; e < daftarHewan.length; e++) console.log(daftarHewan[e]);
console.log('\n')


// soal 2
// Tulislah sebuah function dengan nama introduce() yang memproses paramater yang dikirim menjadi sebuah kalimat perkenalan seperti berikut: "Nama saya [name], umur saya [age] tahun, alamat saya di [address], dan saya punya hobby yaitu [hobby]!"

// Jawaban Soal No 2
function introduce(data){
    return 'Nama saya ' + data['name'] + ', umur saya ' + data['age'] + ' tahun, alamat saya di ' + data['address'] + ', dan saya punya hobby yaitu ' + data['hobby'] + '!'
}
 
var data = {name : "John" , age : 30 , address : "Jalan Pelesiran" , hobby : "Gaming" }
 
var perkenalan = introduce(data)
console.log('JAWABAN SOAL NO 2 : \n', perkenalan, '\n') // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di Jalan Pelesiran, dan saya punya hobby yaitu Gaming" 


// soal 3
// Tulislah sebuah function dengan nama hitung_huruf_vokal() yang menerima parameter sebuah string, kemudian memproses tersebut sehingga menghasilkan total jumlah huruf vokal dalam string tersebut.

// Jawaban Soal No 3
function hitung_huruf_vokal(data){
    var count = 0;
    var splitted = data.toLowerCase().split('');
    for(var i = 0; i < splitted.length; i++){
        if(splitted[i] == 'a' || splitted[i] == 'i' || splitted[i] == 'u' || splitted[i] == 'e' || splitted[i] == 'o'){
            count += 1;
        }
    }
    return count;
}

var hitung_1 = hitung_huruf_vokal("Muhammad")
var hitung_2 = hitung_huruf_vokal("Iqbal")
console.log('JAWABAN SOAL NO 3 : \n ', hitung_1 , hitung_2, '\n') // 3 2


// soal 4
// Buatlah sebuah function dengan nama hitung() yang menerima parameter sebuah integer dan mengembalikan nilai sebuah integer, dengan contoh input dan otput sebagai berikut.

// Jawaban Soal No 4
function hitung(data){
    var u1 = -2;
    var b = 2;
    data += 1;
    result = u1 + (data-1) * b;
    return result;
}

console.log('JAWABAN SOAL NO 4 :');
console.log('0 = ', hitung(0) ) // -2
console.log('1 = ', hitung(1) ) // 0
console.log('2 = ', hitung(2) ) // 2
console.log('3 = ', hitung(3) ) // 4
console.log('5 = ', hitung(5) ) // 8
console.log('6 = ', hitung(6) ) // 10