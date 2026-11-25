
const semuaBagian = document.getElementsByTagName("h3");
 

const jumlahBagian = semuaBagian.length;
 

document.getElementById("infoHalaman").textContent =
    "Halaman About ini memiliki " + jumlahBagian + " bagian informasi.";


const judul = document.getElementById("judul");
judul.innerHTML = "PERPUSTAKAAN DIGITAL";