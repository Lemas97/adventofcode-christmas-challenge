import { times } from 'underscore'
import { getData } from '../../../functions/getData.js'

async function main() {
  const data = await getData('5', 'data')

  const rows = data.split('\r\n')

  const stacks = [
    ['G', 'F', 'V', 'H', 'P', 'S'],
    ['G', 'J', 'F', 'B', 'V', 'D', 'Z', 'M'],
    ['G', 'M', 'L', 'J', 'N'],
    ['N', 'G', 'Z', 'V', 'D', 'W', 'P'],
    ['V', 'R', 'C', 'B'],
    ['V', 'R', 'S', 'M', 'P', 'W', 'L', 'Z'],
    ['T', 'H', 'P'],
    ['Q', 'R', 'S', 'N', 'C', 'H', 'Z', 'V'],
    ['F', 'L', 'G', 'P', 'V', 'Q', 'J'],
  ]

  for (const row of rows) {
    if (!row) continue
    const splitFrom = row.split(' from ')
    console.log(splitFrom[1])
    const number = parseInt(splitFrom[0].split('move ')[1])
    const fromStack = parseInt(splitFrom[1].split(' to ')[0]) - 1
    const toStack = parseInt(splitFrom[1].split(' to ')[1]) - 1

    console.log(number)
    console.log(fromStack)
    console.log(toStack)

    for (let i = 1; i <=number; i++) stacks[toStack].push(stacks[fromStack].pop())
  }

  const word = stacks.reduce((word, stack) => {
    console.log(word)
    return `${word}${stack.pop()}`
  }, '')

  console.log(word)
}

main()
