import Vue from 'vue'
import AlertMsg from './index.vue'
import { listenClick, getElement, createElement, deleteElement } from '../../../src/utils'
var alertMsg = {};
const Alert = function (options) {
    if (typeof options == 'object') {
        alertMsg = options
    } else {
        alertMsg = {}
        alertMsg.content = arguments[0] || ''
        alertMsg.title = arguments[1] || ''
    }
    let alertComponent = Vue.extend(AlertMsg)
    var div = createElement('div')
    var alertInstance = new alertComponent({
        el: div,
        propsData: alertMsg
    })
    var alertDiv = getElement('.ml-alert')
    return new Promise(function (resolve) {
        listenClick(alertInstance, 'clickEvent', value => {
            if (value === 'confirm') { // 点击确认
                options.success ? options.success(value) : ''
            } else { // 点击取消
                options.cancel ? options.cancel(value) : ''
            }
            deleteElement(alertDiv) ? resolve(value) : ''
        })
    });
}
export default Alert