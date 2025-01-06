class Tablier {
  constructor(optionsTissu, optionsPoche, couleurText) {
    this.optionsTissu = optionsTissu;
    this.optionsPoche = optionsPoche;
    this.couleurText = couleurText;
  }
  setChoixTissu() {
    this.optionsTissu.forEach((option) => {
      const BoutonCouleur = document.createElement("div");
      BoutonCouleur.id = `tissu-${option.couleur}`;
      BoutonCouleur.classList.add("ColorRound", "tissu");
      BoutonCouleur.style.backgroundColor = option.code;
      if (option.couleur === selectedTissu) {
        BoutonCouleur.classList.add("selectedColor");
        texteTissu.textContent = option.couleur;
        prixTissu = option.price;
        imageTissu.src = option.image;
      }
      BoutonCouleur.addEventListener("click", () => {
        document.querySelectorAll(".tissu").forEach((button) => {
          button.classList.remove("selectedColor");
          texteTissu.textContent = option.couleur;
        });
        BoutonCouleur.classList.add("selectedColor");
        prixTissu = option.price;
        imageTissu.src = option.image;
      });

      containerTissu.appendChild(BoutonCouleur);
    });
  }
  getChoixTissu() {
    return this.optionsTissu;
  }
  setChoixPoche() {
    optionsPoche.forEach((option) => {
      const BoutonCouleur = document.createElement("div");
      BoutonCouleur.id = `poche${option.couleur}`;
      BoutonCouleur.classList.add("ColorRound", "poche");
      BoutonCouleur.style.backgroundColor = option.code;
      if (option.couleur === selectedPoche) {
        BoutonCouleur.classList.add("selectedColor");
        textePoche.textContent = option.couleur;
        prixPoche = option.price;
        imagePoche.src = option.image;
      }
      BoutonCouleur.addEventListener("click", () => {
        document.querySelectorAll(".poche").forEach((button) => {
          button.classList.remove("selectedColor");
          textePoche.textContent = option.couleur;
        });
        BoutonCouleur.classList.add("selectedColor");
        prixPoche = option.price;
        imagePoche.src = option.image;
      });

      containerPoche.appendChild(BoutonCouleur);
    });
  }
  getChoixPoche(){
    return this.optionsPoche;
  }
  setcouleurText(){
couleurText.forEach((option) => {
  const BoutonCouleurText = document.createElement("div");
  BoutonCouleurText.id = `texte${option.couleur}`;
  BoutonCouleurText.classList.add("ColorRound", "texte");
  BoutonCouleurText.style.backgroundColor = option.code;
  if (option.couleur === selectedTextColor) {
    BoutonCouleurText.classList.add("selectedColor");
  }

  BoutonCouleurText.addEventListener("click", () => {
    document.querySelectorAll(".texte").forEach((button) => {
      button.classList.remove("selectedColor");
      TextePerso.style.color = option.code;
    });
    BoutonCouleurText.classList.add("selectedColor");
  });

  textTablier.addEventListener("input", () => {
    customText = textTablier.value;
    TextePerso.textContent = customText;
    const texteSansEspaces = customText.replaceAll(" ", "");
    prixTexte = texteSansEspaces.length * prixLettre;
    updateTotalPrice();
  });

  containerTexte.appendChild(BoutonCouleurText);
});
}

  static updateTotalPrice() {
    const totalPrice = document.querySelector(".price");
    const total = prixTissu + prixPoche + prixTexte;
    totalPrice.textContent = total.toFixed(2) + "€";
  }
}
