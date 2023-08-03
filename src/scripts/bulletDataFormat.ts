/* eslint-disable no-console */
import * as fs from 'node:fs'

// 子弹原始数据格式化处理脚本
async function main() {
  const bullets = await readFileData('1.json')
  const res: any = []
  bullets.forEach((bullet: any) => {
    const article = []
    for (let i = 1; i <= 4; i++) {
      if (bullet[`article${i}_number`]) {
        const raw = bullet[`article${i}`].master

        const newArticle = {
          item_id: raw.item_id || raw.id,
          slot_type: raw.slot_type || '',
          name: raw.name,
          comment: raw.comment,
          number: Number(bullet[`article${i}_number`]),
          kind: bullet[`article${i}_kind`],
        }
        article.push(newArticle)
      }
    }
    const newBullet = {
      seq_id: bullet.seq_id,
      name: bullet.name,
      comment: bullet.comment,
      article,
    }

    res.push(newBullet)
  })
  writeFileData(res, '2.json')
}
async function writeFileData(data: any, fileName: string) {
  console.log('开始写入文件。。。')

  try {
    await fs.promises.unlink(fileName)
  }
  catch {
    console.error('文件不存在，重新创建')
  }

  await fs.promises.appendFile(fileName, JSON.stringify(data, null, 2))
  console.log('数据写入成功！')
}

async function readFileData(fileName: string) {
  const rawData = await fs.promises.readFile(fileName)
  return JSON.parse(rawData.toString())
}

main()
