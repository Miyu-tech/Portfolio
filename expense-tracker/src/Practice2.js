問題1: 偶数を抽出
以下の配列 numbers から、偶数のみを抽出した新しい配列 evenNumbers を作成してください。

const numbers =  [10, 15, 20, 25, 30];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

問題2: 指定値以上の数値を抽出
以下の配列 numbers から、10 以上の値のみを抽出した配列 largeNumbers を作成してください。

const numbers = [5, 12, 8, 20, 15];
const largeNumbers = numbers.filter(num => num >= 10);
console.log(largeNumbers);

問題3: 正値のみを抽出
以下の配列 numbers から、正の数値のみを抽出した配列 positiveNumbers を作成してください。

const numbers =  [-3, 5, -1, 8, -10, 15];
const positiveNumbers = numbers.filter(num => num > 0);
console.log(positiveNumbers);

問題4: 文字列の長さでフィルタリング
以下の配列 words から、5 文字以上の単語のみを抽出した配列 longWords を作成してください。

const words = ["apple", "banana", "cherry", "date", "fig"];
const longWords = words.filter(word => word.length >= 5);
console.log(longWords);

問題5: 指定文字を含む単語を抽出
以下の配列 words から、a を含む単語のみを抽出した配列 wordsWithA を作成してください。

const words = ["apple", "banana", "cherry", "date", "fig"];
cnst wordsWithA = words.filter(word => word.includes('a'));
console.log(wordWithA);

問題6: 年齢でフィルタリング
以下の配列 users から、20 歳以上のユーザーのみを抽出した配列 adultUsers を作成してください。

const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 19 },
  { name: "David", age: 25 }
];

const adultsUsers = users.filter(user => user.age >= 20);
console.log(adultsUsers);


問題7: 在庫ありの商品のみを抽出
以下の配列 products から、在庫が 1 以上ある商品のみを抽出した配列 availableProducts を作成してください。

const products = [
  { name: "Laptop", stock: 0 },
  { name: "Phone", stock: 5 },
  { name: "Tablet", stock: 2 },
  { name: "Monitor", stock: 0 }
];
const availableProducts = products.filter(product => product.stock > 0);
console.log(availableProducts);

問題8: 過去のイベントを抽出
以下の配列 events から、現在の日付より過去の日付のイベントのみを抽出してください。

const events = [
  { name: "Event A", date: "2025-01-01" },
  { name: "Event B", date: "2023-06-15" },
  { name: "Event C", date: "2024-12-01" }
];

const today = "2024-02-05";
const pastEvents = events.filter(event => event.date < today);
console.log(pastEvents);

問題9: 特定のタグを持つ記事を抽出
以下の配列 articles から、タグ "JavaScript" を含む記事のみを抽出してください。

const articles = [
  { title: "React Basics", tags: ["React", "JavaScript"] },
  { title: "CSS Grid Guide", tags: ["CSS"] },
  { title: "Understanding Promises", tags: ["JavaScript", "Async"] }
];

const withJavascript = articles.filter(article => article.tags.includes('Javascript'));
console.log(withJavascript);
