import * as api from './api.js'
import * as start from './mod/code/main.js'



const boxTable = document.getElementById('box-table')
const blockTable = document.getElementById('block-table')


const Cursor = {
    'cursor': document.getElementById('cursor'),
    'img': (() => {
        const img = document.createElement('img')
        img.src = api.data.mouseStyle
        return img
    }),
    'width': (() => {
        console.log(Cursor.img)
        return Cursor.img().
    }),
    'height': (() => {return Cursor.img.height}),
}

console.log('数据加载完成')



document.addEventListener('mousemove', ((event) => {
    const mouseX = event.clientX
    const mouseY = event.clientY
    Cursor.cursor.style.left = `${mouseX - Cursor.height / 2}px`
    Cursor.cursor.style.top = `${mouseY - Cursor.width / 2}px`
}))



// document.onclick = ((event) => {
//     const classArray = Array.from(event.target.classList)
//     if (classArray.includes('box') || classArray.includes('box-pic') || classArray.includes('box-name')) {
//         if (currentBlockTable['block'] === undefined || currentBlockTable['block'] !== classArray[1]) currentBlockTable['block'] = classArray[1]
//         else currentBlockTable['block'] = undefined
        
//     }
// })

// Object.defineProperty(currentBlockTable, 'block', {
//     set: function(newValue) {
//         if (newValue === undefined) doc_BlockTable.style.display = 'none'
//         else doc_BlockTable.style.display = 'block'
//         api.setCurrentBlockTable(currentBlockTable)
//     }
// })
