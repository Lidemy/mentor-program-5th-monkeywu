const readline = require('readline')

const lines = []
const rl = readline.createInterface({
  input: process.stdin
})

rl.on('line', (line) => {
  lines.push(line)
})

function solve(line) {
  let str = String(line[0])
  let reverseString = str.split('').reverse().join('')
  console.log(str === reverseString ? 'True' : 'False')
}

rl.on('close', () => solve(lines))