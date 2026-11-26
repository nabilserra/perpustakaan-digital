
function kirim() {

    const judul = document.getElementById("judul").value;
    const penulis = document.getElementById("penulis").value;
    const kategori = document.getElementById("kategori").value;
    const alasan = document.getElementById("alasan").value;
    const pengusul = document.getElementById("pengusul").value;

    const halaman = window.open("");

    halaman.document.write("<h2>Data Usulan Buku</h2>");
    halaman.document.write("Judul Buku: " + judul + "<br>");
    halaman.document.write("Nama Penulis: " + penulis + "<br>");
    halaman.document.write("Kategori Buku: " + kategori + "<br>");
    halaman.document.write("Nama Pengusul: " + pengusul + "<br>");
}

