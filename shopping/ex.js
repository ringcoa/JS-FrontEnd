const sum = {
    get quantity() {
        return cart.reduce((sum, item) => sum += item.quantity, 0);
    },
    get total() {
        return cart.reduce((sum, item) => sum += item.total, 0);
    }
}

if(undefined === sessionStorage.cart) {
    sessionStorage.cart = '[{"name":"상품명1","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/01.jpg","price":5000,"quantity":2},{"name":"상품명2","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/02.jpg","price":7000,"quantity":2},{"name":"상품명3","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/03.jpg","price":6000,"quantity":3},{"name":"상품명4","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/04.jpg","price":10000,"quantity":1},{"name":"상품명5","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/05.jpg","price":3000,"quantity":5}]';
}

const cart = JSON.parse(sessionStorage.cart).map(item => {
    return {
        name: item.name,
        src: item.src,
        price: item.price,
        quantity: item.quantity,
        get total() {
            return this.price * this.quantity;
        }
    }
});

{
    const addEvent = () => {
        _cart.dom.childNodes.forEach((li, index) => {
            li.querySelector('button.plus').addEventListener('click', function(e) {
                cart[index].quantity++;
                _cart.render(cart);
                _sum.render(sum);
                addEvent();
                sessionStorage.cart = JSON.stringify(cart);
            });
            li.querySelector('button.minus').addEventListener('click', function(e) {
                if(1 === cart[index].quantity) return;
                cart[index].quantity--;
                _cart.render(cart);
                _sum.render(sum);
                addEvent();
                sessionStorage.cart = JSON.stringify(cart);
            });
        });
    }

    const _cart = new Engine('#cart');
    const _sum = new Engine('#sum');
    _cart.render(cart);
    _sum.render(sum);
    addEvent();
}