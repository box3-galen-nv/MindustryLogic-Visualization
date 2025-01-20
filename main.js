import * as api from './api.js'
import * as start from './mod/code/main.js'



class Doc {
    constructor() {
        this.boxTable = document.getElementById('box-table')
        this.blockTable = document.getElementById('block-table')
        this.cursor = document.getElementById('cursor')
        this.Cursor = class {
            constructor() {
                this.img = new Image()
                this.img.src = api.getMouseStyle()
                this.img.onload = () => {
                    this.pos= {'w': this.img.width, 'h': this.img}
                }
            }
        }
    }
} console.log('数据加载完成')





document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX
    const mouseY = event.clientY
    doc_Cursor.style.left = `${mouseX - doc_Cursor_Img_Pos['h'] / 2}px`
    doc_Cursor.style.top = `${mouseY - doc_Cursor_Img_Pos['w'] / 2}px`
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
