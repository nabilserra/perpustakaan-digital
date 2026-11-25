
const kategori = ["Buku Akademik", "Jurnal", "Artikel", "Referensi Pembelajaran"];
const jumlah = [120, 45, 80, 60];

document.getElementById("dataKoleksi").innerHTML =
    kategori[0] + ": " + jumlah[0] + " koleksi<br>" +
    kategori[1] + ": " + jumlah[1] + " koleksi<br>" +
    kategori[2] + ": " + jumlah[2] + " koleksi<br>" +
    kategori[3] + ": " + jumlah[3] + " koleksi";

const total = jumlah[0] + jumlah[1] + jumlah[2] + jumlah[3];
 
document.getElementById("totalKoleksi").textContent = "Total koleksi: " + total;
 

const deskripsi = document.getElementById("deskripsi");
deskripsi.innerHTML = "Selamat datang di Perpustakaan Digital Teknologi Informasi! Temukan berbagai sumber ilmu dan referensi digital untuk mendukung pembelajaran, penelitian, serta menambah wawasan di bidang teknologi informasi. Selamat membaca dan semoga bermanfaat!";