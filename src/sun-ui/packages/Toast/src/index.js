import { hq, sc } from '../../../src/unity'
function mlToast(props) {
    mlToast.clear()
    setTimeout(() => {
        mlToast.clear()
    }, props.duration || 3000)
}
mlToast.clear = function () {
    if (hq('.ml-toast')) {
        sc(hq('.ml-toast'))
    }
    if (hq('.loading')) {
        sc(hq('.loading'))
    }
}

mlToast.success = function (props) {
    setTimeout(() => {
        mlToast.clear()
    }, props.duration || 3000)
}
mlToast.fail = function (props) {
    mlToast.success(props, 'fail')
}
export default mlToast