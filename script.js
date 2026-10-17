let nama = "";
let arrayPilihan = [];
let pilihanTerpilih = "";
let email = "";
let jml = 0;

// Tahap1 ke Tahap 2
document.getElementById('btnOk1').addEventListener('click', function() {
    nama = document.getElementById('inputNama').value.trim();
    jml = Number(document.getElementById('inputJml').value);

    if (nama === "") {
        document.getElementById('error1').innerText = "Nama tidak boleh kosong!";
        return;
    }
    if (!Number.isInteger(jml) || jml <= 0) {
        document.getElementById('error1').innerText = "Jumlah pilihan harus berupa angka lebih dari 0!";
        return;
    }

    document.getElementById('error1').innerText = ""; // Hapus error jika lolos
    document.getElementById('inputJml').disabled = true;
    document.getElementById('inputNama').disabled = true; // Kunci inputan agar tidak diubah lagi
    this.disabled = true; // Kunci tombol OK

    // Membuat form input pilihan menggunakan for
    let container = document.getElementById('containerPilihan');
    container.innerHTML = ""; // Kosongkan dulu
    for (let i = 1; i <= jml; i++) {
        container.innerHTML += `
    <label>Pilihan ${i} : <br>
    <input type="text" id="inputPilihan${i}" class="teks-pilihan">
    </label><br><br>
    `;
    }

    // Menampilkan Tahap 2
    document.getElementById('tahap2').classList.add('aktif');
});
// Tahap 2 ke Tahap 3
document.getElementById('btnOk2').addEventListener('click', function() {
    arrayPilihan = []; // Kosongkan array sebelum diisi ulang
    let adaError = false;

    // Loop untuk mengecek setiap input pilihan
    for (let i = 1; i <= jml; i++) {
        let teksVal = document.getElementById(`inputPilihan${i}`).value.trim();
        if (teksVal === "") {
            adaError = true;
            break;
        }
        arrayPilihan.push(teksVal); // Memasukkan ke dalam Array
    }

    // Error Validasi
    if (adaError) {
        document.getElementById('error2').innerText = "Seluruh Teks Pilihan harus diisi!";
        return;
    }

    document.getElementById('error2').innerText = "";
    let inputs = document.querySelectorAll('.teks-pilihan');
    inputs.forEach(input => input.disabled = true); // Kunci semua input pilihan
    this.disabled = true;

    // Membuat Radio Button
    let radioContainer = document.getElementById('containerRadio');
    radioContainer.innerHTML = "";
    arrayPilihan.forEach(function(teks) {
        let label = document.createElement('label');
        let radio = document.createElement('input');
        radio.type = "radio";
        radio.name = "pilihanRadio";
        radio.value = teks;

        label.appendChild(radio);
        label.appendChild(document.createTextNode(" " + teks));

        radioContainer.appendChild(label);
        radioContainer.appendChild(document.createElement('br'));
        radioContainer.appendChild(document.createElement('br'));
    });

    // Menampilkan Tahap 3
    document.getElementById('tahap3').classList.add('aktif');
});
// Tahap ke Tahap 4
document.getElementById('btnOk3').addEventListener('click', function() {
    // Mencari radio button yang dicek
    let radioDipilih = document.querySelector('input[name="pilihanRadio"]:checked');

    // Error Trapping
    if (!radioDipilih) {
        document.getElementById('error3').innerText = "Anda harus memilih salah satu!";
        return;
    }

    pilihanTerpilih = radioDipilih.value;
    document.getElementById('error3').innerText = "";

    // Mengunci semua radio button
    let radios = document.querySelectorAll('input[name="pilihanRadio"]');
    radios.forEach(radio => radio.disabled = true);
    this.disabled = true;

    // Menampilkan Tahap 4
    document.getElementById('tahap4').classList.add('aktif');
});
// Tahap 4 ke Tahap 5
document.getElementById('btnOk4').addEventListener('click', function() {
    email = document.getElementById('inputEmail').value.trim();

    let emailFormat = /^[A-Za-z0-9]+([._%+-][A-Za-z0-9]+)*@[A-Za-z0-9]+([.-][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;

    if (!emailFormat.test(email)) {
        document.getElementById('error4').innerText = "Format email salah! Gunakan format email@domain.com";
        return;
    }

    document.getElementById('error4').innerText = "";
    document.getElementById('inputEmail').disabled = true;
    this.disabled = true;

    // Menggabungkan array menjadi 1 teks dipisah koma
    // Tahap 5
    let teksPilihanGabungan = arrayPilihan.join(", ");

    let kalimatAkhir = `Hallo, nama saya <strong>${nama}</strong>, email <strong>${email}</strong>,
    saya mempunyai sejumlah <strong>${jml}</strong> pilihan yaitu <strong>${teksPilihanGabungan}</strong>,
    dan saya memilih <strong>${pilihanTerpilih}</strong>.`;

    document.getElementById('hasilAkhir').innerHTML = kalimatAkhir;
    document.getElementById('tahap5').classList.add('aktif');
});