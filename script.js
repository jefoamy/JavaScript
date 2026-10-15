// initial variabel
let nama = "";
let arrayPilihan = [];
let pilihanTerpilih = "";
let email = "";
let jml = 0;

// Tahap1 ke Tahap 2
document.getElementById('btnOk1').addEventListener('click', function () {
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