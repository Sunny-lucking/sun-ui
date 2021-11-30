function listenClick(el, key, callback) {
    Object.defineProperty(el, key, {
        get: function (val) {
            return val
        },
        set: function (val) {
            if (callback) {
                callback(val)
            }
            return
        }
    })
}
// 获取元素 - getElement
// 元素名字
function getElement(el) {
    return document.querySelector(el)
}
// 创建元素并且添加 默认body
// 值1 创建的元素   值2父元素的名字 默认body
function createElement(el, main) {
    var div = document.createElement(el)
    main ? getElement(main).appendChild(div) : document.body.appendChild(div)
    return div
}
// 删除元素 默认body  值1删除元素的名字  父元素的名字 默认body
function deleteElement(el, main) {
    main ? getElement(main).appendChild(el) : document.body.removeChild(el)
    return true
}
export {
    listenClick,
    getElement,
    createElement,
    deleteElement
}