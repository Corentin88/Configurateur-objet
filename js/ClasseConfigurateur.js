class Tablier {
    constructor(optionsTissu, optionsPoche, couleurText) {
      this.optionsTissu = optionsTissu;
      this.optionsPoche = optionsPoche;
      this.couleurText = couleurText;
  
      this.selectedTissu = "Violet";
      this.selectedPoche = "Rouge";
      this.prixTissu = 0;
      this.prixPoche = 0;
  
      // Conteneurs HTML
      this.containerTissu = document.getElementById("tissu");
      this.containerPoche = document.getElementById("optionPoche");
      this.texteTissu = document.getElementById("displayTissu");
      this.textePoche = document.getElementById("displayPoche");
      this.imageTissu = document.getElementById("optionTissuImage");
      this.imagePoche = document.getElementById("optionPocheImage");
      this.totalPriceElement = document.querySelector(".price");
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
          document.querySelectorAll(`.${type}`).forEach((btn) => btn.classList.remove("selectedColor"));
          bouton.classList.add("selectedColor");
          this.mettreAJourSelection(option, type);
        });
  
        container.appendChild(bouton);
      });
    }
  
    // Méthode pour mettre à jour la sélection (Tissu ou Poche)
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
      }
      this.updateTotalPrice();
    }
  
    // Méthode pour calculer le prix total
    updateTotalPrice() {
      const total = this.prixTissu + this.prixPoche;
      this.totalPriceElement.textContent = total.toFixed(2) + "€";
    }
  
    // Initialisation des choix
    setChoixTissu() {
      this.creerOptions(this.optionsTissu, this.containerTissu, this.selectedTissu, "tissu");
    }
  
    setChoixPoche() {
      this.creerOptions(this.optionsPoche, this.containerPoche, this.selectedPoche, "poche");
    }
  }
  