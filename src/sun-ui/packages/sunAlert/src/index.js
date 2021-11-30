import Vue from 'vue'
import mlAlertMsg from './index.vue'
import { monitoring, getElement, createElement, deleteElement } from '../../../src/unity'
var alertMsg = {};
const Alert = function (options) {
    if (typeof options == 'object') {
        alertMsg = options
    } else {
        alertMsg = {}
        alertMsg.content = arguments[0] || ''
        alertMsg.title = arguments[1] || ''
    }
    let node = Vue.extend(mlAlertMsg)
    var div = createElement('div')
    var ne = new node({
        el: div,
        propsData: alertMsg
    })
    var mlAlHt = getElement('.ml-alert')
    return new Promise(function (resolve) {
        monitoring(ne, 'callback', res => {
            options.success ? options.success(res) : ''
            deleteElement(mlAlHt) ? resolve(res) : ''
        })
    });
}
export default Alert