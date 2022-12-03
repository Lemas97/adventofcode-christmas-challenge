import { getData } from '../../../functions/getData.js'

async function main() {
  const data = await getData('3', 'data')

  const rucksacks = data.split('\r\n')

  const sum = rucksacks.reduce((sum, rucksack) => {
    if (rucksack === '') return sum

    const itemsLength = rucksack.length
    const compartment1 = rucksack.substring(0, (itemsLength / 2)).split('')
    const compartment2 = rucksack.substring((itemsLength / 2)).split('')

    const commonItemType = compartment1.find(itemType => compartment2.includes(itemType))

    let priority = commonItemType.codePointAt(0) - 96
    if (priority < 0) priority += 58

    return sum += priority
  }, 0)


  console.log(sum)
}

main()
