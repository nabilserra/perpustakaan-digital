const judul = document.querySelector('.header h1');
judul.textContent = "Perpustakaan Digital";

const paragraf = document.querySelector('.header p');
paragraf.textContent = "Selamat datang di Perpustakaan Digital kami!";

const list = document.querySelector('.buku ul');
const unorderedList = ["Ilmu Pengetahuan Alam", "Sejarah", "Matematika", "Bahasa Indonesia", "Bahasa Inggris"];
list.replaceChildren();

unorderedList.forEach((nama) => {
  const li = document.createElement('li');
  li.textContent = nama;
  list.append(li);
});