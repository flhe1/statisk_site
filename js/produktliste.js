const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?limit=10")
  .then((res) => res.json())
  .then(showProducts);

//   modtager data (products)
function showProducts(products) {
  // looper og kalder showProduct
  products.forEach(showProduct);
}

// TEMPLATE
function showProduct(product) {
  console.log(product);
  // fang template
  const template = document.querySelector("#ProduktTemplate").content;
  // lav kopi
  const copy = template.cloneNode(true);
  // ændre indhold
  copy.querySelector(".brand").textContent = product.brandname;
  copy.querySelector(".produktnavn").textContent = product.productdisplayname;
  copy.querySelector(".pris").textContent = product.price;

  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  // !=ikke. Hvis produktet ikke er udsolgt fjernes "udsolgt"
  if (!product.soldout) {
    copy.querySelector(".udsolgt").remove();
  }
  if (!product.discount) {
    copy.querySelector(".rabat").remove();
  }

  // når href klikkes går den ind på det specifikke produkt
  copy.querySelector(".klikprodukt").setAttribute("href", `produkt.html?id=${product.id}`);

  // append til DOM
  document.querySelector("main .container1").appendChild(copy);
}

/*
{
  "id": 1163,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2011,
  "usagetype": "Sports",
  "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
  "price": 895,
  "discount": null,
  "brandname": "Nike",
  "soldout": 0
} 
*/
