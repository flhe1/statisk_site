fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then(showCategories);

//   modtager data (products)
function showCategories(categories) {
  // looper og kalder showCategory
  categories.forEach(showCategory);
}

// TEMPLATEfunction showCategory(category) {
function showCategory(category) {
  console.log(category);
  // fang template
  const template = document.querySelector("#KategoriTemplate").content;
  // lav kopi
  const copy = template.cloneNode(true);
  // ændre indhold
  copy.querySelector(".kategori").textContent = category.category;

  // append til DOM
  document.querySelector("main .container1").appendChild(copy);
}

/*
category	"Accessories"
1	
category	"Apparel"
2	
category	"Footwear"
3	
category	"Free Items"
4	
category	"Personal Care"
5	
category	"Sporting Goods"
*/
