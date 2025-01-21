import * as main from './main.js'



let boxList = []
let mouseStyle = undefined
let currentBlockTable = {block: undefined}



class box {
    constructor(name, pic, blockColor, blockList) {
        this.name = name
        this.pic = pic
        this.blockColor = blockColor
        this.blockList = blockList
        const blockDiv = document.createElement('div')
        blockDiv.id = this.name
        blockDiv.className = `box ${this.name}`
        blockDiv.innerHTML = `
            <img class='box-pic ${this.name}' src='${this.pic}'></div>
            <p class='box-name ${this.name}' style='color: ${this.blockColor}'>${this.name}</p>
        `
        document.getElementById('box-table').appendChild(blockDiv)
        // for (let i of blockList) {
        //     const blockDiv = document.createElement('div')
        //     blockDiv.className = `block ${this.id}`
        //     blockDiv.innerHTML = `
        //         <div class='block-head-start'>
        //     `
        //     document.getElementById('block-table').appendChild(blockDiv)
        // }
        boxList.push(this)
    }

    addBlock(newBlock) {

    }

    delBlock(delId) {

    }
}


class block {
    constructor(headType, headText, bodyLen, bodyText, bodyEndType, endType, id, info) {
        this.headType = headType
        this.headText = headText
        this.bodyLen = bodyLen
        this.bodyText = bodyText
        this.bodyEndType = bodyEndType
        this.endType = endType
        this.id = id
        this.info = info
    }
}

function getMouseStyle() {return mouseStyle}
function setMouseStyle(route) {mouseStyle = route}

function getCurrentBlockTable() {return currentBlockTable}
function setCurrentBlockTable(table) {currentBlockTable = {block: table}}



export {
    box,
    block,
    boxList,
    setMouseStyle,
    getMouseStyle,
    setCurrentBlockTable,
    getCurrentBlockTable,
}