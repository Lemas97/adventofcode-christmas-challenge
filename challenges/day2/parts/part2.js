import { getData } from '../../../functions/getData.js'
const roundEnds = {
  'X': 0,
  'Y': 3,
  'Z': 6
}
// A rock     1
// B paper    2
// C scissors 3

// X means you need to lose
// Y means you need to end the round in a draw
// Z means you need to win
const mine = {
  'A X': 3,
  'A Y': 1,
  'A Z': 2,

  'B X': 1,
  'B Y': 2,
  'B Z': 3,

  'C X': 2,
  'C Y': 3,
  'C Z': 1
}

async function main() {
  const data = await getData('2', 'data')

  const splitted = data.split('\r\n')

  const sum = splitted.reduce((sum, next) => {
    if (next === '') return sum

    const round = next.split(' ')[1]

    return sum + mine[next] + roundEnds[round]
  }, 0)


  console.log(sum)
}

main()
