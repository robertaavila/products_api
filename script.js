var pageNumber = 1;

(function addProducts() {
    var newPage;
    // console.log(pageNumber);

    var page = "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=" + pageNumber;

    window.onload = function () {
        newPage = document.getElementById('products_nextPage').addEventListener('click', function () {
            pageNumber += 1;
            // console.log(pageNumber);
            addProducts();
            document.getElementById('products_nextPage').scrollIntoView({block: "start", behavior: "smooth"});
        });
    }

    var productsPromise = fetch(page)

    productsPromise
        .then(data => data.json())
        .then(data => {
            // console.log(data);
            let createItens = document.createElement('div');
            data.products.forEach((item) => {
                // console.log(item.image);

                let card = document.createElement('div');
                card.classList.add('card');

                let image = document.createElement('img');
                image.classList.add('card__img');
                image.setAttribute('src', item.image);
                image.setAttribute('alt', 'imagem de produto');
                // console.log(image);
                card.appendChild(image);

                let name = document.createElement('p');
                name.classList.add('card__name');
                name.innerHTML = (item.name);
                card.appendChild(name);

                let description = document.createElement('p');
                description.classList.add('card__description');
                description.innerHTML = (item.description);
                card.appendChild(description);

                let oldPrice = document.createElement('p');
                oldPrice.classList.add('card__old_price');
                oldPrice.innerHTML = ('De: R$' + item.oldPrice);
                card.appendChild(oldPrice);

                let price = document.createElement('p');
                price.classList.add('card__price');
                price.innerHTML = ('Por: R$' + item.price);
                card.appendChild(price);

                let installments = document.createElement('p');
                installments.classList.add('card__installments');
                installments.innerHTML = ('ou ' + item.installments.count + 'x de R$' + item.installments.value + '9');
                card.appendChild(installments);

                let button = document.createElement('button');
                button.classList.add('card__button_buy');
                button.innerHTML = 'Comprar';
                card.appendChild(button);

                let product_itens = document.querySelector("#product_itens");
                product_itens.appendChild(card);

            })
        });
})();




