const readline = require('readline')

const lines = []
const rl = readline.createInterface({
  input: process.stdin
})

rl.on('line', (line) => {
  lines.push(line)
})

rl.on('close', () => {
  solve(lines)
})

function solve(lines) {
  for (let i = 1; i < lines.length; i++) {
    let [a,b,k] = lines[i].split(' ')  //解構賦值出變數
    k = Number(k) // 底下由於用 === 來判斷，所以先轉換成數字型別
    console.log(compare(a, b, k))
  }
}

function compare(a, b, k) {
  if (a === b) return 'DRAW'
  if (k === -1) {
    [a,b] = [b,a] // 下方程式碼直接利用位數判斷 a、b 大小，所以 k = -1 時要將 a、b的值對調
  }
  const lengthA = a.length
  const lengthB = b.length
  if (lengthA !== lengthB) {
    return lengthA > lengthB ? 'A' : 'B'
  }
  return a > b ? 'A' : 'B'
}