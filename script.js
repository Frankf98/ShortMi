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

/*=================== icon navbar ==================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navlist");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*====================== active link ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header ul a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header ul a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*====================== remove icons and navbar ====================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*====================== rtogle icons a ====================*/
function toggleDropdown() {
  var dropdownMenu = document.querySelector(".dropdown-menu");
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
}
