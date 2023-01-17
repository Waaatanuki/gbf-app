import { ElMessage } from 'element-plus'

/**
 * 下载excel文件
 * @param {any} response
 */
export function downloadExcel(response: any) {
  try {
    const blob = new Blob([response.data], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8',
    })
    const a = document.createElement('a')
    const href = window.URL.createObjectURL(blob) // 下载的链接
    a.href = href
    a.download = decodeURI(
      response.headers['content-disposition'].split(';')[1].split('=')[1]
    ) // 获取后台设置的文件名称
    document.body.appendChild(a)
    a.click() // 点击导出
    document.body.removeChild(a) // 下载完成移除元素
    window.URL.revokeObjectURL(href) // 释放掉blob对象
  } catch (error) {
    ElMessage.error('系统错误')
  }
}
/**
 * 导出JSON文件
 * @param {any} response
 */
export function downloadJSON(dataSet: string, filename: string) {
  const blob = new Blob([dataSet], {
    type: 'application/json',
  })
  const a = document.createElement('a')
  const href = window.URL.createObjectURL(blob) // 下载的链接
  a.href = href
  a.download = filename
  document.body.appendChild(a)
  a.click() // 点击导出
  document.body.removeChild(a) // 下载完成移除元素
  window.URL.revokeObjectURL(href) // 释放掉blob对象
}

export function getAssetsImgFile(url: string) {
  return new URL(`/src/assets/images/${url}`, import.meta.url).href
}
