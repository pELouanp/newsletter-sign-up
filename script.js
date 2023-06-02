const mail = document.querySelector(".email");
const form = document.querySelector("form");
const error = document.querySelector("span");
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const result = document.querySelector("strong");
const retour = document.querySelector(".dismiss");

mail.addEventListener("click", () => {
  mail.style.border = "1px solid #000000";
});

const validerMail = () => {
  const formatMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!mail.value.match(formatMail)) {
    error.classList.add("visible");
    mail.setAttribute(
      "style",
      "border:1px; border-style:solid; border-color:hsl(4, 100%, 67%); background:hsl(4, 100%, 67%, 0.1); color:hsl(4, 100%, 67%); "
    );
  } else {
    error.classList.remove("visible");
    page2.style.display = "block";
    page1.style.display = "none";
    result.textContent = mail.value;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validerMail();
});

retour.addEventListener("click", () => {
  page2.style.display = "none";
});
