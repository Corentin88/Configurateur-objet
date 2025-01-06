class Tablier {
  constructor(optionsTissu, optionsPoche, couleurText) {
    this.optionsTissu = optionsTissu;
    this.optionsPoche = optionsPoche;
    this.couleurText = couleurText;

    this.selectedTissu = "Violet";
    this.selectedPoche = "Rouge";
    this.selectedTextColor = "Noir"; // Nouvelle variable pour la couleur du texte
    this.prixTissu = 0;
    this.prixPoche = 0;
    this.prixTexte = 0;
    this.prixLettre = 1.8;

    // Conteneurs HTML
    this.containerTissu = document.getElementById("tissu");
    this.containerPoche = document.getElementById("optionPoche");
    this.containerTexte = document.getElementById("textColorOptions");
    this.texteTissu = document.getElementById("displayTissu");
    this.textePoche = document.getElementById("displayPoche");
    this.imageTissu = document.getElementById("optionTissuImage");
    this.imagePoche = document.getElementById("optionPocheImage");
    this.totalPriceElement = document.querySelector(".price");
    this.textTablier = document.getElementById("customText");
    this.TextePerso = document.querySelector(".textePerso");
  }

  // Méthode générique pour créer les options (Tissu ou Poche)
  creerOptions(options, container, selectedOption, type) {
    options.forEach((option) => {
      const bouton = document.createElement("div");
      bouton.id = `${type}-${option.couleur}`;
      bouton.classList.add("ColorRound", type);
      bouton.style.backgroundColor = option.code;

      // Sélection par défaut
      if (option.couleur === selectedOption) {
        bouton.classList.add("selectedColor");
        this.mettreAJourSelection(option, type);
      }

      // Gestion du clic
      bouton.addEventListener("click", () => {
        document
          .querySelectorAll(`.${type}`)
          .forEach((btn) => btn.classList.remove("selectedColor"));
        bouton.classList.add("selectedColor");
        this.mettreAJourSelection(option, type);
      });

      container.appendChild(bouton);
    });
  }

  // Méthode pour mettre à jour la sélection (Tissu, Poche, ou Texte)
  mettreAJourSelection(option, type) {
    if (type === "tissu") {
      this.selectedTissu = option.couleur;
      this.texteTissu.textContent = option.couleur;
      this.prixTissu = option.price;
      this.imageTissu.src = option.image;
    } else if (type === "poche") {
      this.selectedPoche = option.couleur;
      this.textePoche.textContent = option.couleur;
      this.prixPoche = option.price;
      this.imagePoche.src = option.image;
    } else if (type === "texte") {
      this.selectedTextColor = option.couleur;
      this.TextePerso.style.color = option.code;
    }
    this.updateTotalPrice();
  }

  // Méthode pour calculer le prix total
  updateTotalPrice() {
    const total = this.prixTissu + this.prixPoche + this.prixTexte;
    this.totalPriceElement.textContent = total.toFixed(2) + "€";
  }

  // Initialisation des choix
  setChoixTissu() {
    this.creerOptions(
      this.optionsTissu,
      this.containerTissu,
      this.selectedTissu,
      "tissu"
    );
  }

  setChoixPoche() {
    this.creerOptions(
      this.optionsPoche,
      this.containerPoche,
      this.selectedPoche,
      "poche"
    );
  }

  setChoixTexte() {
    this.creerOptions(
        this.couleurText,
        this.containerTexte,
        this.selectedTextColor,
        "texte"
      );
  

    // Gestion de l'input du texte personnalisé
    this.textTablier.addEventListener("input", () => {
      const customText = this.textTablier.value;
      this.TextePerso.textContent = customText;
      const texteSansEspaces = customText.replaceAll(" ", "");
      this.prixTexte = texteSansEspaces.length * this.prixLettre;
      this.updateTotalPrice();
    });
  }

  // Gestion des choix du texte (visible ou non)
  setTextOptionVisibility() {
    const RadioOui = document.getElementById("UseText1");
    const RadioNon = document.getElementById("UseText2");
    let custom = document.getElementById("customText");

    RadioOui.addEventListener("change", () => {
      this.textTablier.disabled = false;
      this.containerTexte.style.display = "block";
      this.TextePerso.style.display = "block";
      custom.style.visibility = "visible";
    });

    RadioNon.addEventListener("change", () => {
      this.textTablier.disabled = true;
      this.containerTexte.style.display = "none";
      this.TextePerso.style.display = "none";
      custom.style.visibility = "hidden";
    });
  }
}
