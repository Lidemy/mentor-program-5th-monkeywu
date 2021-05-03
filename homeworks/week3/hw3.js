const readline = require('readline')

const lines = []
const rl = readline.createInterface({
  input: process.stdin
})

rl.on('line', (line) => {
  lines.push(line)
})

function isPrime(n) {
  if (n === 1) return false // 1 不是質數也不是合數，但在這一題裡面一樣要輸出Composite

  for (let i = 2; i < n; i += 1) { //跑回圈看是否有數字能整除，有的話就是合數
    if (n % i === 0) return false 
  }
  return true
}

function solve(line) {
  let length = line.length
  for ( let i = 1; i < length; i++ ) {
    console.log(isPrime(Number(line[i])) ? 'Prime' : 'Composite')
  }
}

rl.on('close', () => solve(lines))