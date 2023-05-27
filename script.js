/*scrooolll navbar*/
let prevScrollPos = window.scrollY;

window.onscroll = function () {
  const currentScrollPos = window.scrollY;
  if (prevScrollPos > currentScrollPos) {
    // Mostra la barra di navigazione quando lo scroll va verso l'alto
    document.getElementById("navbar").classList.remove("hidden");
  } else {
    // Nascondi la barra di navigazione quando lo scroll va verso il basso
    document.getElementById("navbar").classList.add("hidden");
  }
  prevScrollPos = currentScrollPos;
};

/*scrooolll div*/

function handleScroll(event) {
  event.preventDefault(); // Impedisce lo scrolling della pagina

  let container = document.getElementById("myContainer");
  let scrollAmount = event.deltaY; // Valore di scorrimento della rotellina del mouse
  let currentScrollTop = container.scrollTop;

  container.scrollTop = currentScrollTop + scrollAmount;
}

document.addEventListener("DOMContentLoaded", function () {
  let container = document.getElementById("myContainer");
  container.addEventListener("wheel", handleScroll);
});

/* ----------GESTIONE ICONA FRECCIA SU--------- */

const fixedDiv = document.getElementById("iconad");
const section = document.getElementById("service");

window.addEventListener("scroll", function () {
  const fixedDivRect = fixedDiv.getBoundingClientRect();
  const sectionRect = section.getBoundingClientRect();

  if (fixedDivRect.bottom <= sectionRect.top) {
    fixedDiv.classList.add("hide");
  } else {
    fixedDiv.classList.remove("hide");
  }
});
