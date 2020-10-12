var pageNumber = 1;

(function addProducts() {
    var newPage;
    console.log(pageNumber);

    var page = "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=" + pageNumber;

    window.onload=function(){
        newPage = document.getElementById('nextPage').addEventListener('click', function() {
            document.getElementById('product_itens').innerHTML = "";
            pageNumber += 1;
            console.log(pageNumber);
            addProducts();
        });
    }

    var productsPromise = fetch(page)

    productsPromise
        .then(data => data.json())
        .then(data => {
            console.log(data);
            let createItens = document.createElement('div');
            data.products.forEach((item) => {
                console.log(item.image);

                let card = document.createElement('div');
                card.classList.add('card');

                let image = document.createElement('img');
                image.classList.add( 'img_card');
                image.setAttribute('src', item.image);
                console.log(image);
                card.appendChild(image);

                let name = document.createElement('p');
                name.innerHTML = ('Name: ' + item.name + ', ');
                card.appendChild(name);

                let oldPrice = document.createElement('p');
                oldPrice.innerHTML = ('Old price: ' + item.oldPrice + ', ');
                card.appendChild(oldPrice);

                let price = document.createElement('p')
                price.innerHTML = ('Price: ' + item.price);
                card.appendChild(price);

                let product_itens = document.querySelector("#product_itens");
                product_itens.appendChild(card);

            })
            data.products.forEach((item) => {

                }

            )
        });
})();




