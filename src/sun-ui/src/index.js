import 'font-awesome/css/font-awesome.css'
import Button from '../packages/Button'
import Cell from '../packages/Cell'
import Swipe from '../packages/Swipe'
import SwipeItem from '../packages/Swipe/src/SwipeItem'
import Icon from '../packages/Icon'
import Sticky from '../packages/Sticky'
import NavBar from '../packages/NavBar'
import Loading from '../packages/Loadings'
import Popup from '../packages/Popup'
import Switch from '../packages/Switch'
// 请提示  不需要注册组建
import sunAlert from '../packages/sunAlert'
import sunToast from '../packages/Toast'
import InfiniteScroll from '../packages/InfiniteScroll'
import mlLazy from '../packages/mlLazy'
import Utils from '../packages/Utils'
import Picture from '../packages/Picture'
import Avatar from '../packages/Avatar'
import BaseCount from '../packages/BaseCount'

const install = function (Vue) {
  Vue.component(Button.name, Button)
  Vue.component(Cell.name, Cell)
  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)
  Vue.component(Icon.name, Icon)
  Vue.component(Sticky.name, Sticky)
  Vue.component(NavBar.name, NavBar)
  Vue.component(Loading.name, Loading)
  Vue.component(Switch.name, Switch)
  Vue.component(Popup.name, Popup)
  Vue.component(Avatar.name, Avatar)
  Vue.component(BaseCount.name, BaseCount)
}
export {
  install,
  Button,
  Cell,
  sunAlert,
  sunToast,
  Swipe,
  mlLazy,
  InfiniteScroll,
  Icon,
  Sticky,
  NavBar,
  Loading,
  Switch,
  Popup,
  Utils,
  Picture,
  Avatar,
  BaseCount
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default install;
