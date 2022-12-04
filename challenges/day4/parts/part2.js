import { getData } from '../../../functions/getData.js'

async function main() {
  const data = await getData('4', 'data')

  const rows = data.split('\r\n')

  const pairs = rows.map(row => {
    return row.split(',').map(p => p.split('-').map(t => parseInt(t, 10)))
  })

  const sum = pairs.reduce((sum, pair) => {
    if (pair.length === 1) return sum

    const [elf1, elf2] = pair

    const elf1InRangeOfElf2 = (elf1[0] >= elf2[0] && elf1[0] <= elf2[1]) || (elf1[1] >= elf2[0] && elf1[1] <= elf2[1])
    const elf2InRangeOfElf1 = (elf2[0] >= elf1[0] && elf2[0] <= elf1[1]) || (elf2[1] >= elf1[0] && elf2[1] <= elf1[1])

    if (elf1InRangeOfElf2 || elf2InRangeOfElf1) sum ++

    return sum
  }, 0)


  console.log(sum)
}

main()
