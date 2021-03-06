## Toast 轻提示

### 使用指南

```javascript
  import { sunToast } from 'sun-ui';
```

#### 简单用法

```javascript
  sunToast({
    message: "提示信息",
    position: "middle",
    duration: 1000
  });
```
#### 加载提示

`loading`可以使用本组建的任意`Loading`动画

```javascript
  sunToast({
     message: '加载中',
     position: "middle",
     duration: 2000,
     icon: "loading"
   });
```

#### 成功/失败提示

#### 基础用法

```javascript
sunToast.fail('失败');
sunToast.success('成功');
```
#### 高级用法

```javascript
  sunToast({
     message: '成功',
     position: "middle",
     duration: 2000,
     icon: "success"
  });
```
```javascript
  sunToast({
     message: '失败',
     position: "middle",
     duration: 2000,
     icon: "fail"
  });

```

#### 关闭提示

```javascript
  sunToast.clear()
```


### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| message | 内容 | `string` | `-` |
| duration | 停留时间 | `Number` | `3000` |
| position | 位置，支持 top/bottom/middle | `string` | `middle` |
| icon | 成功或失败提示框 success/loading/fail/clear | `string` | `-` |

### 方法

| 参数 | 说明 | 类型 |
|------|------|------|
| sunToast.success | 展示成功提示 | `options | message` |
| sunToast.fail | 展示失败提示 | `options | message` | 
| sunToast.clear | 关闭提示 | `options | message` |
