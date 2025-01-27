import * as api from '../../api.js'

api.data.mouseStyle = './mod/pictures/cursor.png'

new api.box('开始', './mod/pictures/start.png', '#ffef66', [
    new api.block(false, '当开始时', 0, [''], [], 0, 'start', '是个起始语句')
])
