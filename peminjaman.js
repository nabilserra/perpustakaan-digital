// =====================================================
// 1. cekForm()   -> memeriksa isian (validasi)
// 2. pinjam()    -> dipanggil tombol "Pinjam Buku"
// 3. resetForm() -> dipanggil tombol "Reset"
// =====================================================

// ===== 1. VALIDASI =====
// Hasil "true" = semua terisi, "false" = ada yang kosong
function cekForm() {

  const nama = document.getElementById("nama").value;
  const buku = document.getElementById("buku").value;
  const tglPinjam = document.getElementById("tgl_pinjam").value;
  const tglKembali = document.getElementById("tgl_kembali").value;
  const kartu = document.getElementById("kartu").value;
  const lama = document.querySelector('input[name="lama"]:checked');

  // Catatan tidak dicek, karena sifatnya opsional

  if (nama == "") {
    alert("Nama tidak boleh kosong!");
    return false;
  }
  if (buku == "") {
    alert("Judul Buku harus dipilih!");
    return false;
  }
  if (tglPinjam == "") {
    alert("Tanggal Pinjam tidak boleh kosong!");
    return false;
  }
  if (tglKembali == "") {
    alert("Tanggal Kembali tidak boleh kosong!");
    return false;
  }
  if (tglKembali < tglPinjam) {
    alert("Tanggal Kembali tidak boleh sebelum Tanggal Pinjam!");
    return false;
  }
  if (lama == null) {
    alert("Lama Peminjaman harus dipilih!");
    return false;
  }
  if (kartu == "") {
    alert("Foto Kartu Member harus diunggah!");
    return false;
  }

  return true;
}

// ===== 2. TOMBOL PINJAM BUKU =====
function pinjam() {

  // Cek dulu. Kalau ada yang kosong, berhenti di sini.
  if (cekForm() == false) {
    return;
  }

  // Kumpulkan data untuk dikirim ke hasil-peminjaman.html
  const data = new URLSearchParams();
  data.append("nama", document.getElementById("nama").value);
  data.append("buku", document.getElementById("buku").value);
  data.append("tgl_pinjam", document.getElementById("tgl_pinjam").value);
  data.append("tgl_kembali", document.getElementById("tgl_kembali").value);
  data.append("lama", document.querySelector('input[name="lama"]:checked').value);
  data.append("kartu", document.getElementById("kartu").files[0].name);

  // Buka halaman hasil di tab baru
  window.open("pinjam.html?" + data.toString(), "_blank");
}

// ===== 3. TOMBOL RESET =====
function resetForm() {
  document.getElementById("nama").value = "";
  document.getElementById("buku").value = "";
  document.getElementById("tgl_pinjam").value = "";
  document.getElementById("tgl_kembali").value = "";
  document.getElementById("catatan").value = "";
  document.getElementById("kartu").value = "";

  var radio = document.querySelectorAll('input[name="lama"]');
  radio[0].checked = false;
  radio[1].checked = false;
}