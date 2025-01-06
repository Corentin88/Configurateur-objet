class Tablier {
  constructor(optionsTissu, optionsPoche, couleurText) {
    this.optionsTissu = optionsTissu;
    this.optionsPoche = optionsPoche;
    this.couleurText = couleurText;
    this.totalPrice = document.querySelector(".price");

  }
creationOption(){
    
}
  static updateTotalPrice() {
    const total = prixTissu + prixPoche + prixTexte;
    this.totalPrice.textContent = total.toFixed(2) + "€";
  }
}
