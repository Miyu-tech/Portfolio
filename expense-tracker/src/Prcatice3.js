1. 配列の合計値を求める関数
問題

数値の配列を受け取り、合計値を返す関数 sumArray を実装してください。

解答例
function sumArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

// 使用例
console.log(sumArray([1, 2, 3, 4])); // 10

2. 重複を排除した配列を返す関数
問題

重複を含む配列を受け取り、重複を除いた新しい配列を返す uniqueArray を実装してください。

解答例
function uniqueArray(arr) {
  return [...new Set(arr)];
}

// 使用例
console.log(uniqueArray([1, 1, 2, 3, 3])); // [1, 2, 3]

3. 文字列を逆順にする関数
問題

文字列を受け取り、逆順にした文字列を返す reverseString を実装してください。

解答例
function reverseString(str) {
  return str.split("").reverse().join("");
}

// 使用例
console.log(reverseString("hello")); // "olleh"

4. 非同期処理：APIデータ取得関数
問題

指定されたURLからデータを取得し、JSONを返す非同期関数 fetchData を実装してください。

解答例
async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}

// 使用例
// fetchData("https://api.example.com/data").then(console.log).catch(console.error);

5. オブジェクト配列を特定キーでソート
問題

オブジェクトの配列を、指定されたキーで昇順にソートする sortByKey を実装してください。

解答例
function sortByKey(arr, key) {
  return [...arr].sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
}

// 使用例
const users = [
  { name: "John", age: 30 },
  { name: "Alice", age: 24 },
  { name: "Bob", age: 27 }
];

console.log(sortByKey(users, "age"));

6. Promise を返すタイマー関数
問題

指定したミリ秒後に完了する wait 関数を作成してください。

解答例
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 使用例
// wait(1000).then(() => console.log("1秒後に実行"));

7. オブジェクトが空かどうか判定する関数
問題

オブジェクトが空オブジェクトかどうかを判定する isEmptyObject を実装してください。

解答例
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

// 使用例
console.log(isEmptyObject({}));        // true
console.log(isEmptyObject({ a: 1 }));  // false