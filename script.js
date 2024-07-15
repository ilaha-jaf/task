//add to basket task
function addToBasket() {
    var a = [];
    return function (item) {
        a.push(item);
       console.log(a);
    }
}
var b = addToBasket();
b('hello');
b('bye');
b('lol');

