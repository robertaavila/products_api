var pageNumber = 1;

(function addProducts() {
    var newPage;
    console.log(pageNumber);

    var page = "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=" + pageNumber;

    window.onload = function () {
        newPage = document.getElementById('nextPage').addEventListener('click', function () {
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
                image.classList.add('img_card');
                image.setAttribute('src', item.image);
                console.log(image);
                card.appendChild(image);

                let name = document.createElement('p');
                name.classList.add('name_card');
                name.innerHTML = (item.name);
                card.appendChild(name);

                let description = document.createElement('p');
                description.classList.add('description_card');
                description.innerHTML = (item.description);
                card.appendChild(description);

                let oldPrice = document.createElement('p');
                oldPrice.classList.add('old_price_card');
                oldPrice.innerHTML = ('De: R$' + item.oldPrice);
                card.appendChild(oldPrice);

                let price = document.createElement('p');
                price.classList.add('price_card');
                price.innerHTML = ('Por: R$' + item.price);
                card.appendChild(price);

                let installments = document.createElement('p');
                installments.classList.add('installments_card');
                installments.innerHTML = ('Ou ' + item.installments.count + 'x de R$' + item.installments.value + '9');
                card.appendChild(installments);

                    let
                product_itens = document.querySelector("#product_itens");
                product_itens.appendChild(card);

            })
            data.products.forEach((item) => {

                }
            )
        });
})();




