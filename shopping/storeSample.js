const store = (function() {
    let state = {};
    let commit = function(key, value) {
        state[key] = value;
    }
    return {
        commit: commit,
        get state() {
            return Object.create(state);
        }
    }
}());
const Item = function(param = {}) {
    const img = param.img;
    const name = param.name;
    const price = param.price;
    let quantity = param.quantity;
    // TODO total -> price * quantity
    // TODO plus -> quantity, store.commit
    // TODO minus -> quantity, store.commit
    // TODO create
    // TODO destroy
}
const Cart = function(param = {}) {
    const items = param.items.map(item => new Item(item));
    // TODO create
    // TODO destroy
}
const Total = function(param = {}) {
    // TODO quantity -> store.state
    // TODO total -> store.state
    // TODO create
    // TODO destroy
}
const CartPage = function(param = {}) {
    // TODO 해당 key를 각각 Cart>Item, Total까지 내려서 store 접근 키로 사용
    const keyQuantity = Symbol('Quantity');
    const keyTotal = Symbol('Total');
    const cart = new Cart();
    const total = new Total();
    // TODO create
    // TODO destroy
};
const root = (function() {
    // TODO header
    const page = new CartPage();
}());