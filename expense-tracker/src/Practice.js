Map practice

問題1
配列 [1, 2, 3, 4, 5] の各要素を2倍にした新しい配列を作成してください。

const number = [1, 2, 3, 4, 5];
const double = numbers.map(num => num*2);
console.log(dounble);

問題2
文字列の配列 ["a", "b", "c"] をすべて大文字に変換してください。
const letter = ['a', 'b', 'c'];
const upperCase = letters.map(letter => letter.toUpperCase());
console.log(upperCase);

問題3
配列 [5, 10, 15, 20] の各要素に5を足した新しい配列を作成してください。

const numbers = [5, 10, 15, 20];
const added = numbers.map(num => num +5);
console.log(added);

問題4
オブジェクトの配列 [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }] から名前だけの配列 ["Alice", "Bob", "Charlie"] を作成してください。

const people = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
const names = people.map(person => person.name);
console.log(names);

問題5
数値の配列 [10, 20, 30, 40, 50] を文字列の配列に変換してください。

const numbers = [10, 20, 30, 40, 50];
const stringNumbers = numbers.map(num => num.toString());
console.log(numbersStrings);

問題6
配列 [1, 2, 3, 4, 5] の各要素を偶数の場合は "even"、奇数の場合は "odd" に変換した新しい配列を作成してください。

const numbers = [1, 2, 3, 4, 5];
const evenOrOdd = numbers.map(num => (num % === 2 0 ? 'even' : 'odd');
console.log(evenOrOdd);


問題7
オブジェクトの配列 [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }] から ["Alice is 25", "Bob is 30"] のような配列を作成してください。

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

const descriptions = people.map(person => `${person.name} is `${person.age});
console.log(descriptions);

問題8
配列 [100, 200, 300, 400] をインデックス付きで操作し、["Index 0: 100", "Index 1: 200", ...] という形式に変換してください。

const numbers = [100, 200, 300, 400];
const withIdex = numbers.map((num, index) => `Index ${index}: ${num}`);
console.log(withIndex);

問題9
配列 [true, false, true] を "Yes" と "No" に変換してください。
const bools = [true, false, true];
const yesNo = bools.map(bool => (bool ? 'yes' : 'no'));
console.log(yesNo);

問題10 
オブジェクトの配列 [{ name: "Alice", scores: [80, 90, 100] }, { name: "Bob", scores: [70, 75, 85] }] から、平均スコアを持つ新しい配列 [{ name: "Alice", average: 90 }, { name: "Bob", average: 76.67 }] を作成してください。小数点以下は2桁まで表示してください。

const students =  [
  { name: "Alice", scores: [80, 90, 100] },
  { name: "Bob", scores: [70, 75, 85] }
];

const averages = students.map(student => ({
    name: studentname,
    average: (student.scores.reduce((a, b) => a + b, 0) / student.scores.length).toFixed(2)
}));
console.log(averages);