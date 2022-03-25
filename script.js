const btnAll = document.querySelector(".btn-all");
const btnPhone = document.querySelector(".btn-phone");
const btnLaptop = document.querySelector(".btn-laptop");
const btnTv = document.querySelector(".btn-tv");
const container = document.querySelector(".container");

// btnLaptop.addEventListener("click", addLaptops);
// btnAll.addEventListener("click", addAll);
// btnTv.addEventListener("click", addTvs);
// btnPhone.addEventListener("click", addPhones);

let res = fetch("bd.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((e) => {
      products = document.querySelector(".products");
      products.style.marginTop = "20px";
      let content = document.createElement("div");
      content.classList.toggle("col");
      content.classList.toggle("content");
      // карточка
      let card = document.createElement("div");
      card.classList.toggle("col-3");
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
      products.appendChild(card);
      card.appendChild(img);
      card.appendChild(content);
      content.appendChild(nameOfProduct);
      content.appendChild(price);
      content.appendChild(description);
      // ui.Card(e);
      btnLaptop.addEventListener("click", () => {
        if (e.category === "laptop") {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
      btnAll.addEventListener("click", () => {
        if (e.category === "") {
          card.style.display = "none";
        } else {
          card.style.display = "block";
        }
      });
      btnPhone.addEventListener("click", () => {
        if (e.category === "phone") {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
      btnTv.addEventListener("click", () => {
        if (e.category === "TV") {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });