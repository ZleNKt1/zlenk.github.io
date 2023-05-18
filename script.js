

let btn = document.querySelectorAll('.btn');


console.log(btn);
btn.forEach(btn => {
    btn.addEventListener('click', (event) => {
        console.log(event.target.previousElementSibling);
        let p = event.target.previousElementSibling;
        let product = p.children[0].textContent;
        addToBasket(product);
    })
})

const addToBasket = (product) => {
    let basketList = document.querySelector('.basket-list');

    let li = document.createElement('li');
    let span = document.createElement('span');
    span.textContent = product;
    let basketBtn = document.createElement('button');
    basketBtn.className = 'basket-btn';
    basketBtn.textContent = 'Удалить';
    basketBtn.onclick = deleteProduct;
    li.append(span);
    li.append(basketBtn);
    basketList.append(li);
}
   


const deleteProduct = event => {
    let removeEl = event.target.parentElement;
    removeEl.remove();
}


// let basketBtn = document.querySelectorAll('.basket-btn');
//     console.log(document.querySelectorAll('.basket-btn'));
//     basketBtn.addEventListener('click', (event) => {
//         console.log(event.target);
//     })

