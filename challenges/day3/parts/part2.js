import { getData } from '../../../functions/getData.js'
import { times } from 'underscore'

async function main() {
  const data = await getData('3', 'data')

  const rucksacks = data.split('\r\n')

  const teams = []
  times(100, () => {
    teams.push(times(3, () => rucksacks.shift()?.split('')))
  })
  const sum = teams.reduce((sum, elfs) => {
    const commonItemType = elfs[0].find(itemType => elfs[1].includes(itemType) && elfs[2].includes(itemType))

    let priority = commonItemType.codePointAt(0) - 96
    if (priority < 0) priority += 58

    return sum + priority
  }, 0)

  console.log(sum)
}

main()
