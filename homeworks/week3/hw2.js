const readline = require('readline')

const lines = []
const rl = readline.createInterface({
  input: process.stdin
})

rl.on('line', (line) => {
  lines.push(line)
})

function isNarcissistic(n) {
  const str = n.toString() 
  const numberDigits = str.length 
  let sum = 0
  for (let i = 0; i < str.length; i += 1) {
    sum += Math.pow(Number(str[i]),numberDigits)
  }
  return sum === n
}

function solve(line) {
  const temp = line[0].split(' ')
  const minNum = Number(temp[0])
  const maxNum = Number(temp[1])
  for (let i = minNum; i <= maxNum; i += 1) {
    if (isNarcissistic(i)) {
      console.log(i)
    }
  }
}

rl.on('close', () => solve(lines))