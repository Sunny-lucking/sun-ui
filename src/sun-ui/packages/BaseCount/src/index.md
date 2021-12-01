## BaseCounter 倒计时组件

### 使用指南

```javascript
import { BaseCount } from 'sun-ui';

Vue.use(BaseCount);
```
### 代码演示

#### 基础用法

```html
<base-count v-slot="timeObj" :time="10000">
  <div>{{timeObj}}</div>
</base-count>
```

#### 获取时：分：秒

```html
<base-count v-slot="timeObj" :time="10000">
  <div style="width:100%">{{ timeObj.hh }}:{{ timeObj.mm }}:{{ timeObj.ss }}</div>
</base-count>
```
### API 

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| time | 倒计时剩余时间 | `string|Number` | ` ` |
| end | 结束时刻 | `String` | ` ` |