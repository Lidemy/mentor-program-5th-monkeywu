const readline = require('readline')

const lines = []
const rl = readline.createInterface({
  input: process.stdin
})

rl.on('line', (line) => {
  lines.push(line)
})

function solve(line) {
  const n = Number(line[0])
  let result = ''
  for (let i = 1; i <= n; i++ ) {
    result = '*'.repeat(i) 
    console.log(result)
  }
}

rl.on('close', () => solve(lines))