import { getElement, deleteElement, createElement } from '../../../src/utils'
import Vue from "vue"
import toast from './index.vue'
import start from './start'
function sunToast(props) {
    sunToast.clear()
    let toastComponet = Vue.extend(toast)
    if (props.icon) {
        toastComponet = Vue.extend(start)
    }

    // 创建一个div并append到body
    var div = createElement('div')

    // 将toastComponet挂载到div上
    new toastComponet({
        el: div,
        propsData: props
    })
    setTimeout(() => {
        sunToast.clear()
    }, props.duration || 3000)
}
sunToast.clear = function () {
    if (getElement('.ml-toast')) {
        deleteElement(getElement('.ml-toast'))
    }
    if (getElement('.loading')) {
        deleteElement(getElement('.loading'))
    }
}

sunToast.success = function (props) {

    var meg = {
        message: props || '加载中',
        position: "middle",
        duration: 2000,
        icon: call
    }
    let success = Vue.extend(start)
    var div = createElement('div')
    new success({
        el: div,
        propsData: meg
    })
    setTimeout(() => {
        sunToast.clear()
    }, props.duration || 3000)
}
sunToast.fail = function (props) {
    sunToast.success(props, 'fail')
}
export default sunToast