const semuaTombol = document.querySelectorAll(".btn-tambah");
const tombolSubmit = document.querySelector(".tombol-full");
const pesanSukses = document.getElementById("pesan-sukses");

semuaTombol.forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    tombol.textContent = "✅ditambahkan";

    setTimeout(function () {
      tombol.textContent = "+ Tambah";
    }, 2000);
  });
});

tombolSubmit.addEventListener("click", (e) => {
    e.preventDefault();
  pesanSukses.style.display = "block";

  setTimeout(() => {
    pesanSukses.style.display = "none";
  }, 3000);
});
