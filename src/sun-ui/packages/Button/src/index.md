## Button 按钮

### 使用指南

```javascript
import { Button } from 'sun-ui';

Vue.use(Button);
```
### 代码演示

#### 简单用法

```html
<sun-button size="large" class="button" icon="back" type="primary">按钮</sun-button>
```

#### 幽灵按钮

```html
<sun-button size="large" class="button" :plain="true" type="primary">幽灵按钮</sun-button>
```
### API 

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| type | 显示类型，接受 default, primary, danger | `string` | `default` |
| disabled | 是否禁用 | `Boolean` | `false` |
| plain | 幽灵按钮 | `string` | `false` |