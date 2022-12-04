import { getData } from '../../../functions/getData.js'
async function main() {
  const data = await getData('1', 'data')

  const split = data.split('\r\n')

  const elfs = []
  split.reduce((sum, next) => {
    if (!next) {
      elfs.push(sum)
      return 0
    }

    return sum += parseInt(next)
  }, 0)

  console.log(elfs.sort((a, b) => b - a)[0])
}

main()
