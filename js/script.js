var musik = "";

AOS.init({
  once: true,
});

var audio = document.querySelector(".audio");
if (musik) {
  audio.src = musik;
}

function mulai() {
  audio.play();
  document.querySelector(".open").style = "opacity: 0;";
  document.querySelector(".body").style = "overflow-y: scroll;";
  setTimeout(function () {
    document.querySelector(".open").style.display = "none";
  }, 1000);
}

function wa(isi) {
  window.open(
    "https://wa.me/082397034209"
  );
}
async function tanya() {
  var { value: kado } = await swal.fire({
    title: "Ada Pesan Buat Aku?",
    input: "text",
    showCancelButton: false,
  });
  if (kado) {
    await swal.fire("Ada Komplain? Chat Aing Dek");
    wa(kado);
  } else {
    await swal.fire("Harus Di Isi Tod😡 ");
    tanya();
  }
}
