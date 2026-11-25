
function cekForm() {

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const tglLahir = document.getElementById("tgl_lahir").value;
  const prodi = document.getElementById("prodi").value;
  const berkas = document.getElementById("ktm").value;
  const gender = document.querySelector('input[name="gender"]:checked');

  if (nama == "") {
    alert("Nama Lengkap tidak boleh kosong!");
    return false;
  }
  if (email == "") {
    alert("Email tidak boleh kosong!");
    return false;
  }
  if (gender == null) {
    alert("Jenis Kelamin harus dipilih!");
    return false;
  }
  if (prodi == "") {
    alert("Program Studi harus dipilih!");
    return false;
  }
  if (berkas == "") {
    alert("Berkas KTM / KTP harus diunggah!");
    return false;
  }

  return true;
}

function daftar() {

  if (cekForm() == false) {
    return;
  }

  const data = new URLSearchParams();
  data.append("nama", document.getElementById("nama").value);
  data.append("email", document.getElementById("email").value);
  data.append("tgl_lahir", document.getElementById("tgl_lahir").value);
  data.append("gender", document.querySelector('input[name="gender"]:checked').value);
  data.append("prodi", document.getElementById("prodi").value);
  data.append("ktm", document.getElementById("ktm").files[0].name);

  window.open("hasil.html?" + data.toString(), "_blank");
}

function resetForm() {
  document.getElementById("nama").value = "";
  document.getElementById("email").value = "";
  document.getElementById("tgl_lahir").value = "";
  document.getElementById("prodi").value = "";
  document.getElementById("ktm").value = "";
  

  const radio = document.querySelectorAll('input[name="gender"]');
  radio[0].checked = false;
  radio[1].checked = false;
}