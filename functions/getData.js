import fs from 'fs/promises'

export async function getData (day, filename) {
  return await fs.readFile(`./challenges/day${day}/data/${filename}.txt`, 'utf8')
}
