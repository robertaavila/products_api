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

                let cardRow = document.createElement('div');
                cardRow.classList.add('card__row');
                card.appendChild(cardRow);

                let cardLeft = document.createElement('div');
                cardLeft.classList.add('card__column_left');
                cardRow.appendChild(cardLeft);

                let image = document.createElement('img');
                image.classList.add('card__img');
                image.setAttribute('src', item.image);
                image.setAttribute('alt', 'imagem de produto');
                // console.log(image);
                cardLeft.appendChild(image);

                let cardRight = document.createElement('div');
                cardRight.classList.add('card__column_right');
                cardRow.appendChild(cardRight);

                let name = document.createElement('p');
                name.classList.add('card__name');
                name.innerHTML = (item.name);
                cardRight.appendChild(name);

                let description = document.createElement('p');
                description.classList.add('card__description');
                description.innerHTML = (item.description);
                cardRight.appendChild(description);

                let oldPrice = document.createElement('p');
                oldPrice.classList.add('card__old_price');
                oldPrice.innerHTML = ('De: R$' + item.oldPrice);
                cardRight.appendChild(oldPrice);

                let price = document.createElement('p');
                price.classList.add('card__price');
                price.innerHTML = ('Por: R$' + item.price);
                cardRight.appendChild(price);

                let installments = document.createElement('p');
                installments.classList.add('card__installments');
                installments.innerHTML = ('ou ' + item.installments.count + 'x de R$' + item.installments.value + '9');
                cardRight.appendChild(installments);

                let button = document.createElement('button');
                button.classList.add('card__button_buy');
                button.innerHTML = 'Comprar';
                cardRight.appendChild(button);

                let product_itens = document.querySelector("#product_itens");
                product_itens.appendChild(card);

            })
        });
})();

function validateFormSurvey(){
    document.getElementById('error').innerHTML = '';
    var control = 0;

    if(document.getElementById('name').value === '') {
        document.getElementById('error').innerHTML += 'É preciso informar o nome.&nbsp; '
    }

    var email = document.getElementById('email').value;
    var check = email.indexOf('@');
    var checkCom = email.indexOf('.com');
    if(check <= 0 || checkCom <=0 -1) {
        document.createElement('br');
        document.getElementById('error').innerHTML += 'Informe um email válido.&nbsp; '
    }

    var cpf = document.getElementById('cpf').value;
    var code = 4324;
    console.log(typeof (cpf));
    if(typeof(cpf) != 'number'){
        document.getElementById('error').innerHTML += 'O cpf deve ser composto apenas por números.&nbsp; '
    }

    if(document.getElementById('male').checked === false && document.getElementById('female').checked === false){
        document.getElementById('error').innerHTML += 'Escolha um gênero.'
    }
}



