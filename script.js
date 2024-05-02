window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.querySelectorAll(".tabgroup > div").forEach((tab) => {
  tab.style.display = "none";
});

document.querySelector(".tabgroup > div:first-of-type").style.display = "block";

document.querySelectorAll(".tabs a").forEach((tabLink) => {
  tabLink.addEventListener("click", function (e) {
    e.preventDefault();

    let tabgroup = "#" + this.closest(".tabs").getAttribute("data-tabgroup");
    let others = Array.from(this.closest("ul").querySelectorAll("a")).filter(
      (a) => a !== this
    );
    let target = this.getAttribute("href").slice(1);

    others.forEach((link) => {
      link.classList.remove("active");
    });

    this.classList.add("active");

    document.querySelectorAll(tabgroup + " > div").forEach((tab) => {
      tab.style.display = "none";
    });

    document.querySelector(tabgroup + " > #" + target).style.display = "block";
  });
});

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

prevButton.addEventListener("click", () => {
  const checkedRadio = document.querySelector('input[type="radio"]:checked');
  let prevRadio = checkedRadio.previousElementSibling;
  if (!prevRadio) {
    prevRadio = checkedRadio.parentElement.lastElementChild;
  }
  prevRadio.checked = true;
});

nextButton.addEventListener("click", () => {
  const checkedRadio = document.querySelector('input[type="radio"]:checked');
  let nextRadio = checkedRadio.nextElementSibling;
  if (!nextRadio) {
    nextRadio = checkedRadio.parentElement.firstElementChild;
  }
  nextRadio.checked = true;
});
