fetch("https://kea-alt-del.dk/t7/api/products?limit=6")
  .then((res) => res.json())
  .then(showProducts);

//   modtager data (products)
function showProducts(products) {
  // looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  // fang template
  const template = document.querySelector(".ProduktTemplate").content;
  // lav kopi
  const copy = template.cloneNode(true);
  // ændre indhold
  copy.querySelector("h2").textContent = product.productdisplayname;
  // append til DOM
  document.querySelector("main").appendChild(copy);
}

function showProduct(product) {
  console.log(product);
  // fang template
  const template = document.querySelector(".ProduktTemplate");
  console.log(template); // Add this line to check if the template is correctly selected
  const copy = template.content.cloneNode(true);
  // ændre indhold
  copy.querySelector("h2").textContent = product.productdisplayname;
  // append til DOM
  document.querySelector("main").appendChild(copy);
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
