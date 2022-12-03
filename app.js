const touches = [...document.querySelectorAll("button")];
const operateurs = [...document.querySelectorAll(".operateur")];
const listeKeyCodeOperateur = operateurs.map(
  (operateur) => operateur.dataset.key
);
const listeKeyCode = touches.map((touche) => touche.dataset.key);

document.addEventListener("click", (event) => {
  const boutonCliquer = event.target.dataset.key;
  main(boutonCliquer);
});

const ecran = document.querySelector(".ecran");
let compteur = 0;

function main(boutonCliquer) {
  if (listeKeyCode.includes(boutonCliquer)) {
    switch (boutonCliquer) {
      case "10": // for delete all the character on the screen
        ecran.textContent = "0";
        break;
      case "11": // for delete the last character enter on the screen
        if (ecran.textContent == "0" || compteur == 1) {
          ecran.textContent = "0";
          compteur = 0;
        }
        const chaine = ecran.textContent.split("");

        if (chaine.length === 1) {
          ecran.textContent = "0";
        } else {
          if (
            chaine[chaine.length - 1] == "(" &&
            (chaine[chaine.length - 2] == "n" ||
              chaine[chaine.length - 2] == "s")
          ) {
            chaine.pop();
            chaine.pop();
            chaine.pop();
            chaine.pop();
            if (chaine.length == 0) {
              ecran.textContent = "0";
            } else {
              ecran.textContent = chaine.join("");
            }
          } else if (
            chaine[chaine.length - 1] == "(" &&
            chaine[chaine.length - 2] == "t"
          ) {
            chaine.pop();
            chaine.pop();
            chaine.pop();
            chaine.pop();
            chaine.pop();
            if (chaine.length == 0) {
              ecran.textContent = "0";
            } else {
              ecran.textContent = chaine.join("");
            }
          } else {
            chaine.pop();
            ecran.textContent = chaine.join("");
          }
        }
        break;
      case "16": // for calculate what is on the screen
        if (ecran.textContent == "0") {
          ecran.textContent = "0";
        }
        const valeur = ecran.textContent;
        if (ecran.textContent.includes("sqrt")) {
          test = ecran.textContent.split("sqrt").join("Math.sqrt");
          ecran.textContent = test;
        }
        if (ecran.textContent.includes("sin")) {
          test = ecran.textContent.split("sin").join("Math.sin");
          ecran.textContent = test;
        }
        if (ecran.textContent.includes("cos")) {
          test = ecran.textContent.split("cos").join("Math.cos");
          ecran.textContent = test;
        }
        if (ecran.textContent.includes("\u03c0")) {
          test = ecran.textContent.split("\u03c0").join("Math.PI");
          ecran.textContent = test;
        }
        const calcul = eval(ecran.textContent);
        if (valeur != calcul) {
          ecran.textContent = calcul;
          compteur = 1;
        }
        break;
      default:
        if (
          (ecran.textContent == "0" || compteur == 1) &&
          listeKeyCodeOperateur.includes(boutonCliquer) == false
        ) {
          ecran.textContent = "";
        }
        compteur = 0;
        ecran.textContent += boutonCliquer;
        break;
    }
  }
}
