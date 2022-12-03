import { getData } from '../../../functions/getData.js'
const shapes = {
  'X': 1,
  'Y': 2,
  'Z': 3
}
// A for Rock, B for Paper, and C for Scissors
// X for Rock, Y for Paper, and Z for Scissors

// A X rock     1
// B Y paper    2
// C Z scissors 3
const rounds = {
  'A Y': 6,
  'A X': 3,
  'A Z': 0,

  'B Y': 3,
  'B X': 0,
  'B Z': 6,

  'C Y': 0,
  'C X': 6,
  'C Z': 3,
}

async function main() {
  const data = await getData('2', 'data')

  const splitted = data.split('\r\n')

  const sum = splitted.reduce((sum, next) => {
    if (next === '') return sum
    const me = next.split(' ')[1]

    return sum + rounds[next] + shapes[me]
  }, 0)


  console.log(sum)
}

main()
