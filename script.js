function random(max) {
  return Math.floor(Math.random() * max);
}

function lole() {
  if (random(10) == 0) {
    var pron = document.getElementById("pronunciation");
    const alt_prons = ["zjuːmə", "s(j)uːmɛk"];
    pron.innerText = alt_prons[random(alt_prons.length)];
  }
}