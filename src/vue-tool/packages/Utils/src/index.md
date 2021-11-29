## Utils 常用工具方法

提供几种常用的正则表达式，如果你拥有其他类型的表达式，欢迎共享！

### 使用指南

```javascript

  import { Utils } from 'sun-ui';

```

#### 返回值 状态成立为ture否则为false

<br/>

### 1.isFigure (判断是否为整数或者小数点)

```javascript
Utils.isFigure(123) // true
```

判断是否为整数或者小数点

#### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| number | 内容 | `Number` | `-` |

<br/>

### getUrlParam (url截取)

```javascript
Utils.getUrlParam('name') // url指定的name值
```

获取url上?后面参数的值

#### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 需要或者url的key值 | `String` | `-` |

<br/>

### isMobileNumber (手机电话)

```javascript
Utils.isMobileNumber(12345678910) // false
```

判断`11`位数并且第二位数为`345678`其中一个的

#### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| mobileNumber | 手机号 | `String | Number` | `-` |

<br/>

### isTelNumber (固定电话)

```javascript
Utils.isTelNumber(12345678910) // false
```

判断`7-14`位数

#### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| telNumber | 固定号码 | `String | Number` | `-` |

<br/>

### isEmail (email地址)

```javascript
Utils.isEmail('1292150917@qq.com') // true
```

判断正确的邮箱

#### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| email | 邮箱 | `String` | `-` |

<br/>

### isIdentity (身份证正则)

```javascript
Utils.isIdentity('xxxxxxx') // false
```

身份证号码为`15`位或者`18`位，`15`位时全为数字，`18`位前`17`位为数字，最后一位是校验位，可能为数字或字符`X` 

#### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| identity | 身份证 | `String` | `-` |

<br/>

### hasSpecSymbol (是否存在特殊字符)

```javascript
Utils.hasSpecSymbol(12345678910) // true 
```

判断是否存在 `[~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？ ]` 特殊字符

#### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| symbol | 内容 | `String | Number` | `-` |

<br/>

### isRealName (判断用户真实姓名)

```javascript
Utils.isRealName('张自方') //true
```

判断正确的汉字编码并且大于两位

#### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 姓名 | `String` | `-` |

<br/>

### isObjVacancy (判断数据字段是否为空 Arr)

```javascript
Utils.isObjVacancy({
    sex:'男',
    name:""
}) //false

var name = 12

Utils.isObjVacancy(name) // true

```

为 `空` `undefined` `null` 统一返回false不成立

#### API

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| arr | 需要判断的对象 | `Object || String` | `-` |

<br/>
