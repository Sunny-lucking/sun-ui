
<p align=center>
    <a href="#"><img src="@/assets/favicon.png"/></a>
</p>
<p align=center>
	<b size=5 color=#7FFFD4 face="微软雅黑" align=center>
		这个组件库有没有一串代码为你而运行
	</b>
</p>
<p align=center>
	<b size=5 color=#7FFFD4 face="微软雅黑" align=center>
		一起来创造更美好的UI
	</b>
</p>


> 让我再听一遍 最美的那一句

> 我愿一切美好的人和我说话时，都带着蜷缩在北方半岛冬天被窝里的甜美语气。

> 他们在别有用心的生活里偏偏舞蹈，你在我后半日子里。长生不老。

> 你可知道你的名字解释了我的一生

##

## 快速上手

### 脚手架

推荐使用 Vue 官方提供的脚手架 Vue Cli 4 创建项目

### 方法使用说明

此方法提供各种转换方法！也是个人项目中经常使用到的！希望对你有帮助！

### 安装

#### NPM

```javascript
npm i sun-ui
```

#### YARN

```javascript
yarn add i sun-ui
```

#### CDN

暂不提供第三方CDN引入

### 引入组件


方式一. 使用 `babel-plugin-import` (推荐，方法来自vant，但是引入方式是一致的！)

`babel-plugin-import ` 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式


#### 安装 babel-plugin-import 插件
```javascript
npm i babel-plugin-import -D
```
##### 配置.babelrc文件
 
```javascript
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "sun-ui",
      }
    ]
  ]
}

```

### 为什么添加上这段代码就可使实现按需加载？

以下代码，会被转换：
```js
import {Button,Icon} fron 'element-ui'

```
会被转换成以下代码

```js
const Button = require('element-ui/lib/button.js`)
require('element-ui/theme-chalk/button.css')

const Icon = require('element-ui/lib/icon.js')
require('element-ui/theme-chalk/icon.css')
```
接着你可以在代码中直接引入 sun-ui 组件，插件会自动将代码转化为方式二中的按需引入形式

```javascript

import { Button } from 'sun-ui';

```

方式二. 导入所有组件

```javascript

import Vue from 'vue';
import sunUi from 'sun-ui';

Vue.use(sunUi);

```

#####

`注意：配置 babel-plugin-import 插件后将不允许导入所有组件`

### Rem 适配

sun-ui 中的样式默认使用px作为单位，如果需要使用rem单位，推荐使用以下两个工具

`postcss-pxtorem` 是一款 `postcss` 插件，用于将单位转化为 rem
`px2rem` 把px转换rem
也可以装对应的loader