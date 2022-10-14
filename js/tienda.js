document.querySelectorAll('[name=Tipo]').forEach((x) => x.checked = true);
const addToShoppingCartButtons =  document.querySelectorAll('.addToCart');
var SC = document.getElementById("S_P");
var ComP = document.getElementById("Combo_P");
var CombI = document.getElementById("Comb_I");
var indice_marcado = 0;
const Comprar = document.getElementById('BtnComprar');

addToShoppingCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);
});


const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);


const ShopingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');

function addToCartClicked(event){
    const button = event.target;
    const item = button.closest('.Tienda');

    const itemTitle = item.querySelector('.Titulo').textContent;
    const itemPrice = item.querySelector('.Precio-Item').textContent;
    const itemImage = item.querySelector('.IMG-Item').src;


    AddItemToShopping(itemTitle, itemPrice, itemImage);
}



function AddItemToShopping(itemTitle, itemPrice, itemImage){

    const ElementsTitle = ShopingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle');

    for(let i = 0; i < ElementsTitle.length; i++){
        if(ElementsTitle[i].innerText === itemTitle){
          let ElementQuantity = ElementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
          ElementQuantity.value++;
          $('.toast').toast('show');
          TotalCompras();
          return;
        }
    }


    const ShoppingCartRow = document.createElement('div');
    const ShoppingCartContent = `
    <div class="row shoppingCartItem">
                <div class="col-6">
                    <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                        <img src="${itemImage}" height="80px" width="100px" class="shopping-cart-image">
                        <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
                    </div>
                </div>
                <div class="col-2">
                    <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                        <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
                    </div>
                </div>
                <div class="col-4">
                    <div
                        class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                        <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                            value="1">
                        <button class="btn btn-danger buttonDelete" type="button">X</button>
                    </div>
                </div>
            </div>`;

        ShoppingCartRow.innerHTML = ShoppingCartContent
        ShopingCartItemsContainer.append(ShoppingCartRow);

        ShoppingCartRow.querySelector('.buttonDelete').addEventListener('click',RemoverShopping);

        ShoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChange)
        TotalCompras()
}

function TotalCompras(){
    let total = 0;
    const ShoppingCartTotal = document.querySelector('.shoppingCartTotal');
    const ShoppingCartItems = document.querySelectorAll('.shoppingCartItem');

    ShoppingCartItems.forEach(ShoppingCartItem => {
         const ShoppingCartItemsPriceElement = ShoppingCartItem.querySelector('.shoppingCartItemPrice');

         const ShoppingCartItemPrice = Number(ShoppingCartItemsPriceElement.textContent.replace('$', ''));

         const ShoppingCartItemQuantity = ShoppingCartItem.querySelector('.shoppingCartItemQuantity');

         const ShoppingCartItemQuantityElement = Number(ShoppingCartItemQuantity.value);
         console.log(ShoppingCartItemQuantityElement);


         total = total + ShoppingCartItemPrice * ShoppingCartItemQuantityElement;
         console.log(total);

         ShoppingCartTotal.innerHTML = `${"$" + total.toFixed(2)}`;
    });
}

function RemoverShopping(event){
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    TotalCompras();
}

function quantityChange(event){
    const input = event.target;
    if(input.value <= 0) {
        input.value = 1;
    }
    TotalCompras();
    
}

function comprarButtonClicked(){
    if(ShopingCartItemsContainer === ""){
        alert("No se ha seleccionado ningun articulo");
    }

    if(ShopingCartItemsContainer != null){
    ShopingCartItemsContainer.innerHTML = '';
    TotalCompras();
    alert("Compra generada exitosamente, que pase un gran dia!");
}
}