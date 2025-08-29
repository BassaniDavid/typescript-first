class Grault {
    constructor(quux, waldo) {
        this.gargly = quux.quuz + " " + quux.corage + " " + waldo;
    }
    getGargly() {
        return this.gargly;
    }
}
const foo = (bar) => {
    return "hello, " + bar;
};
const fooo = (bar) => {
    return "hello, " + bar.quuz + " " + bar.corage;
};
const foooo = (bar) => {
    return "hello, " + bar.quuz + " " + bar.corage;
};
const baz = "ABC";
const bus = "CDE";
const bas = { quuz: "ABC", corage: 123 };
const bos = { quuz: "ABC", corage: 123 };
console.log(foo(bus));
console.log(fooo(bas));
console.log(foooo(bas));
const fred = new Grault(bas, [1, 2, 3]);
console.log(fred.getGargly());
const root = document.getElementById("root");
root.innerHTML = fred.getGargly();
