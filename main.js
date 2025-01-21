console.log('变量加载')
let doc_Html = Array.from(document.getElementsByTagName('html'))
let doc_BlockTable = document.getElementById('block-table')
let doc_Cursor = document.getElementById('cursor')

console.log('处理依赖变量')
import * as api from './api.js'
import * as start from './mod/code/start.js'

let currentBlockTable = api.getCurrentBlockTable()
const doc_Cursor_Img = new Image()
doc_Cursor_Img.src = api.getMouseStyle()
doc_Cursor_Img.onload = () => {
    const doc_Cursor_Img_W = doc_Cursor_Img.width
    const doc_Cursor_Img_H = doc_Cursor_Img.height
}

console.log('数据加载完成')

//鼠标样式
doc_Cursor.src = api.getMouseStyle()
doc_Cursor.style.position = `fixed`
doc_Cursor.style.scale = `0.5`

document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX
    const mouseY = event.clientY
    doc_Cursor.style.left = `${mouseX+doc_Cursor}px`
    doc_Cursor.style.top = `${mouseY}px`
})

//积木栏显示
document.onclick = ((event) => {
    const classArray = Array.from(event.target.classList)
    if (classArray.includes('box') || classArray.includes('box-pic') || classArray.includes('box-name')) {
        if (currentBlockTable['block'] === undefined || currentBlockTable['block'] !== classArray[1]) currentBlockTable['block'] = classArray[1]
        else currentBlockTable['block'] = undefined
        
    }
})

Object.defineProperty(currentBlockTable, 'block', {
    set: function(newValue) {
        if (newValue === undefined) doc_BlockTable.style.display = 'none'
        else doc_BlockTable.style.display = 'block'
        api.setCurrentBlockTable(currentBlockTable)
    }
})
