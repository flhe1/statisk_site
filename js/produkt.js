// https://kea-alt-del.dk/t7/api/products/1525
fetch("https://kea-alt-del.dk/t7/api/products/1525")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".container2 h1").textContent = product.productdisplayname;
  document.querySelector(".container2 h2").textContent = product.brandname;
  document.querySelector(".container2 h3").textContent = product.price;
  document.querySelector(".container2 p").textContent = product.description;
  document.querySelector(".container2 img").src = product.brandimage;
}

// TEMPLATE
const template = document.querySelector("template").content;
console.log(template);
// lav kopi
const copy = template.cloneNode(true);

// skift indhold
copy.querySelector("h1").textContent = "jhsbfkabjf";
copy.querySelector("h2").src = "https://kea-alt-del.dk/t7/images/webp/1000/1163.webp";

// whos you daddy?
const parent = document.querySelector("main");

// tilføj til DOM
parent.appendChild(copy);

/*{
{
  "id": 1525,
  "gender": "Unisex",
  "category": "Accessories",
  "subcategory": "Bags",
  "articletype": "Backpacks",
  "basecolour": "Navy Blue",
  "season": "Fall",
  "productionyear": 2010,
  "usagetype": "Casual",
  "productdisplayname": "Deck Navy Blue Backpack",
  "parsed": 1,
  "soldout": 0,
  "relid": 1525,
  "price": 1299,
  "discount": 55,
  "variantname": "Deck Backpack",
  "brandname": "Puma",
  "brandbio": "PUMA is the World's Fastest Sports Brand",
  "brandimage": "http://assets.myntassets.com/assets/images/2015/11/17/11447736932686-113016-3ff8sf.jpg",
  "agegroup": "Adults-Unisex",
  "colour1": "NA",
  "colour2": "NA",
  "fashiontype": "Fashion",
  "materialcaredesc": null,
  "sizefitdesc": null,
  "description": "<p>asfafaf<br> kasjhdkashd</p>",
  "styledesc": null
}
}*/
