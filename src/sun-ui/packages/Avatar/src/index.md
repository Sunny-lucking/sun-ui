## Avatar 头像

### 使用指南

```javascript
import { Avatar } from 'sun-ui';

Vue.use(Avatar);
```
### 代码演示

#### 简单用法

```html
<avatar defaultAvatar='https://pic3.zhimg.com/v2-09c709d9258a389842292dd030482003_is.jpg'></avatar>
```

#### 是否直播

```html
<avatar defaultAvatar='https://pic3.zhimg.com/v2-09c709d9258a389842292dd030482003_is.jpg' :isLive="true"></avatar>
```
### API 

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| width | 宽度 | `string` | `50px` |
| src | 地址 | `String` | ` ` |
| defaultAvatar | 默认图 | `string` | ` ` |
| isLive | 直播状态 | `Boolean` | `false` |
| hideLiveLable | 是否显示直播icon | `String` | `orange ` |
| borderColor | 边框颜色 | `String` | ` ` |
| borderSize | 边框大小 | `string` | ` 1px` |
