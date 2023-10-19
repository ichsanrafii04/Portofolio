const beranda = document.getElementById("beranda");
const tentang = document.getElementById("tentang");
const penghargaan = document.getElementById("penghargaan");
const portfolio = document.getElementById("portfolio");

function tombolBeranda() {
  beranda.style.display = "flex";
  if ((beranda.style.display = "flex")) {
    tentang.style.display = "none";
    penghargaan.style.display = "none";
    portfolio.style.display = "none";
  }
}

function tombolTentang() {
  tentang.style.display = "flex";
  if ((tentang.style.display = "flex")) {
    beranda.style.display = "none";
    penghargaan.style.display = "none";
    portfolio.style.display = "none";
  }
}

function tombolPenghargaan() {
  penghargaan.style.display = "flex";
  if ((penghargaan.style.display = "flex")) {
    tentang.style.display = "none";
    beranda.style.display = "none";
    portfolio.style.display = "none";
  }
}

function tombolPortfolio() {
  portfolio.style.display = "flex";
  if ((portfolio.style.display = "flex")) {
    beranda.style.display = "none";
    tentang.style.display = "none";
    penghargaan.style.display = "none";
  }
}

// TENTANG (BAGIAN FOTO & PARAGRAF)
const gambar = document.getElementById("gambar");
const paragraf = document.getElementById("paragraf");

function kanan() {
  gambar.src = "Foto/MIT.jpeg";
  paragraf.innerHTML =
    "Saat berusia 18 tahun saya melanjutkan studi S1 saya di MIT University dan mendapatkan beasiswa penuh dari pemerintah.";
}

function kiri() {
  gambar.src = "Foto/awal.jpeg";
  paragraf.innerHTML =
    "Zamrud Ichsan Rafi lahir di Jakarta pada tanggal 8 Februari 2004 dan pindah ke makassar pada tahun 2005 dan berdomisili di jalan abdullah daeng sirua sampai sekarang.";
}
// TENTANG (BAGIAN FOTO & PARAGRAF)
