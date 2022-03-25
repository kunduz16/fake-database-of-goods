class CreateCard {
    constructor() {
      this.products = document.querySelector(".products");
    }
    Card(e) {
      this.products.style.marginTop = "20px";
      let content = document.createElement("div");
      content.classList.toggle("col");
      content.classList.toggle("content");
      // карточка
      let card = document.createElement("div");
      card.classList.toggle("col-4");
      card.classList.toggle("card");
      card.style.backgroundColor = "#EEE9E5";
      card.classList.toggle("border-0");
      card.style.padding = "20px";
      card.style.borderRadius = "15px";
  
      // изображение
      let img = document.createElement("img");
      img.classList.toggle("card-img");
  
      // цена
      let price = document.createElement("span");
      price.classList.toggle("price");
  
      //название продукта
      let nameOfProduct = document.createElement("h2");
      nameOfProduct.classList.toggle("card-title");
      //описание
      let description = document.createElement("p");
      description.classList.toggle("description");
      description.innerHTML = e.desc;
      img.src = e.img;
      price.innerHTML = e.price;
      nameOfProduct.innerHTML = e.title;
      this.products.appendChild(card);
      card.appendChild(img);
      card.appendChild(content);
      content.appendChild(nameOfProduct);
      content.appendChild(price);
      content.appendChild(description);
    }
  }