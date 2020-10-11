// console.log('Starting fetch call');
var page = "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1";
const productsPromise = fetch(page)
// console.log('After fetch call');
// console.log('productsPromise');
//
// console.log('After program has run');

productsPromise
.then(data => data.json())
.then(data => {
    console.log(data);
    data.products.forEach((item) => {
        console.log(item.name);
    });
})