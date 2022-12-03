import { getData } from '../../../functions/getData.js'
async function main() {
  const data = await getData('1', 'data')

  const splitted = data.split('\r\n')

  const elfs = []
  splitted.reduce((sum, next) => {
    if (!next) {
      elfs.push(sum)
      return 0
    }

    return sum += parseInt(next)
  }, 0)

  elfs.sort((a, b) => b - a)
  console.log(elfs[0] + elfs[1] + elfs[2])
}

main()
