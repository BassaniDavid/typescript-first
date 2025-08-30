class Grault {
  private gargly: string;

  constructor(quux: Quux, waldo: number[]) {
    this.gargly = quux.quuz + " " + quux.corage + " " + waldo;
  }

  getGargly() {
    return this.gargly;
  }
}

interface Quux {
  quuz: string;
  corage: number;
}

type Quu = {
  quuz: string;
  corage: number;
};

const foo = (bar?: number | "car" | "bus" | any) => {
  return "hello, " + bar;
};

const fooo = (bar: Quux) => {
  return "hello, " + bar.quuz + " " + bar.corage;
};

const foooo = (bar: Quu) => {
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

const root = document.getElementById("root") as HTMLDivElement;
root.innerHTML = fred.getGargly();
