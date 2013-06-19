//
// 自動販売機(VendingMachine) class (JavaScriptにclassはないけど)
// Queue データー構造の一つ(FirstInFirstOut)
//
// isEmpty() --- 空かどうかを返す
// size() --- drinkの数を返す
// add(drink) --- drinkを追加する
// pop() --- drinkを取り出す
// 

function VendingMachine() {
    this._size = [];
}

VendingMachine.prototype = {
    constructor: VendingMachine,
    isEmpty: function() {
        return this._size.length == 0;
    },
    size: function() {
        return this._size.length;
    },
    add: function(drink) {
        this._size.push(drink);
    },
    pop: function() {
        return this._size.shift();
    }
};






