import fs from 'fs/promises'

export async function getData (day, filename) {
  const data = await fs.readFile(`./challenges/day${day}/data/${filename}.txt`, 'utf8')
  return data
}
