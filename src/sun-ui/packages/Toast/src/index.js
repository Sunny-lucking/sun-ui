import { hq, sc } from '../../../src/unity'
function sunToast(props) {
    sunToast.clear()
    setTimeout(() => {
        sunToast.clear()
    }, props.duration || 3000)
}
sunToast.clear = function () {
    if (hq('.ml-toast')) {
        sc(hq('.ml-toast'))
    }
    if (hq('.loading')) {
        sc(hq('.loading'))
    }
}

sunToast.success = function (props) {
    setTimeout(() => {
        sunToast.clear()
    }, props.duration || 3000)
}
sunToast.fail = function (props) {
    sunToast.success(props, 'fail')
}
export default sunToast