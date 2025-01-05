console.log('Hello, world')
console.log('こんにちは、世界')
console.log('1+2')
console.log('10 - 4 * 8')
console.log(100) // 数値
console.log('hello') // 文字列
console.log([1, 2, 3, 4, 5]) // 配列
console.log(true) // 真偽値
console.log(null) // 無
console.log({ one: 1, two: 2 }) // オブジェクト

const answer = 42

console.log(answer)

const breakfast = "お茶漬け"
console.log('今日の朝ごはんは' + breakfast + 'でした。') //=>今日の朝ごはんはお茶漬けでした。

const breakfast2 = "納豆ごはん"
console.log(`今日の朝ごはんは${breakfast2}でした。`) //=> 今日の朝ごはんは納豆ごはんでした。
console.log(`8 + 7 = ${8 + 7}`) //=> 8 + 7 = 15

const days = ['日', '月', '火', '水', '木', '金', '土']
//もしくは縦に書くときはこうかける
//const days = [
//    '日',
//    '月',
//    '火',
//    '水',
//    '木',
//    '金',
//    '土', // ←ここに , を書いてもOK（書かなくてもOK）
//  ]

// 配列の中の要素の数
console.log(days.length) //=> 7

// 配列の中の個別の要素
console.log(days[0]) //=> 日
console.log(days[1]) //=> 月
console.log(days[2]) //=> 火
console.log(days[3]) //=> 水
console.log(days[4]) //=> 木
console.log(days[5]) //=> 金
console.log(days[6]) //=> 土
console.log(days[7]) //=> undefined

const nengou = ['明治', '大正', '昭和', '平成']

// 配列に要素を「追加」する
nengou.push('令和')

console.log(nengou) //=> ['明治', '大正', '昭和', '平成', '令和']

// 配列から要素を「削除」する
nengou.splice(3, 1) // 3は削除したい要素のインデックス、1は削除したい要素の数

console.log(nengou) //=> ['明治', '大正', '昭和', '令和']

// 配列の特定の要素を直接書き換える
nengou[2] = '昭和'

console.log(nengou) //=> ['明治', '大正', '昭和', '令和']

const num = Math.random() // 0.0〜1.0の数値をランダムに作る

if (num >= 0.5) {
  console.log('大きめ')
} else {
  console.log('小さめ')
}

console.log(`数: ${num}`)

const score = Math.random() * 100 // 0.0〜100.0の間の数値をランダムに作る

console.log(`点数: ${score}`)

if (score >= 90) {
  console.log('秀')
} else if (score >= 75) {
  console.log('優')
} else if (score >= 60) {
  console.log('良')
} else if (score >= 30) {
  console.log('可')
} else {
  console.log('不可')
}

for (let i = 0; i < 10; i++) {
    console.log(i)
  }

let s = 2 // letは「あとで書き換えできる（代入し直せる）」変数

while (s < 100000) {
  console.log(s)
  s = s * s
}