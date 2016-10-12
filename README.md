移动端弹窗插件第二版，包括常见的 alert、confirm。toast、notice 四种类型弹窗，支持 jQuery 和 Zepto 库。

### 特性
+ 支持常见的 alert、confirm、toast、notice 四种类型弹窗
+ 可选择使用 IOS 或者 Material Design 风格的弹窗
+ 可自定义按钮的文字、样式、回调函数，支持多个按钮
+ 多个弹窗状态改变回调函数
+ 同时支持 jQuery 和 Zepto 库
+ 可扩展性强

### 新增
+ 弹窗可选 IOS 或者 Material Design 风格
+ 可自定义多个按钮
+ 按钮排版样式，并排或者堆叠
+ notice 弹窗的位置，居中或者底部

## 使用说明
**1、引入 CSS 文件**
```css
<link rel="stylesheet" href="../css/dialog.css" />
```

**2、引入 JS 文件**
```javascript
<script src="../lib/zepto.min.js"></script>
<script src="../js/dialog.js"></script>
```

**3、HTML 结构**
```html
<button id="btn-01">显示弹窗</button>
```

**4、实例化**
```javascript
$(document).on('click', '#btn-01', function() {
    var dialog1 = $(document).dialog({
        content: 'Dialog 移动端弹窗插件的自定义提示内容',
    });
});
```

## 示例
查看效果，请移步→：[demo示例](http://sufangyu.github.io/project/dialog2/dist/demos/)


## 参数
<table>
    <thead>
        <tr>
            <th>参数</th>
            <th>默认值</th>
            <th>说明</th>
        </tr>                           
    </thead>
    <tbody>
        <tr>
            <td>type</td>
            <td>'alert'</td>
            <td>弹窗的类型。alert: 确定; confirm: 确定/取消; toast: 状态提示; notice: 提示信息</td>
        </tr>
        <tr>
            <td>style</td>
            <td>'default'</td>
            <td>alert 与 confirm 弹窗的风格。<br />default: 根据访问设备平台; ios: ios 风格; android: MD design 风格</td>
        </tr>
        <tr>
            <td>titleShow</td>
            <td>true</td>
            <td>是否显示标题</td>
        </tr>
        <tr>
            <td>titleText</td>
            <td>'提示'</td>
            <td>标题文字</td>
        </tr>
        <tr>
            <td>closeBtnShow</td>
            <td>false</td>
            <td>是否显示关闭按钮</td>
        </tr>
        <tr>
            <td>content</td>
            <td>''</td>
            <td>弹窗提示内容, 值可以是 HTML 内容</td>
        </tr>
        <tr>
            <td>contentScroll</td>
            <td>true</td>
            <td>alert 与 confirm 弹窗提示内容是否限制最大高度, 使其可以滚动</td>
        </tr>
        <tr>
            <td>dialogClass</td>
            <td>''</td>
            <td>弹窗自定义 class</td>
        </tr>
        <tr>
            <td>autoClose</td>
            <td>0</td>
            <td>弹窗自动关闭的延迟时间(毫秒)。<br />0: 不自动关闭; 大于0: 自动关闭弹窗的延迟时间</td>
        </tr>
        <tr>
            <td>overlayShow</td>
            <td>true</td>
            <td>是否显示遮罩层</td>
        </tr>
        <tr>
            <td>overlayClose</td>
            <td>false</td>
            <td>是否可以点击遮罩层关闭弹窗</td>
        </tr>
        <tr>
            <td>buttonStyle</td>
            <td>'side'</td>
            <td>按钮排版样式。side: 并排; stacked: 堆叠</td>
        </tr>
        <tr>
            <td>buttonTextConfirm</td>
            <td>'确定'</td>
            <td>确定按钮文字</td>
        </tr>
        <tr>
            <td>buttonTextCancel</td>
            <td>'取消'</td>
            <td>取消按钮文字</td>
        </tr>
        <tr>
            <td>buttonClassConfirm</td>
            <td>''</td>
            <td>确定按钮自定义 class</td>
        </tr>
        <tr>
            <td>buttonClassCancel</td>
            <td>''</td>
            <td>取消按钮自定义 class</td>
        </tr>
        <tr>
            <td>buttons</td>
            <td>[]</td>
            <td>confirm 弹窗自定义按钮组, 会覆盖"确定"与"取消"按钮; <br />单个 button 对象可设置 name [ 名称 ]、class [ 自定义class ]、callback [ 点击执行的函数 ]</td>
        </tr>

        <tr>
            <td>infoIcon</td>
            <td>''</td>
            <td>toast 与 notice 弹窗的提示图标, 值为图标的路径。不设置=不显示</td>
        </tr>
        <tr>
            <td>infoText</td>
            <td>''</td>
            <td>toast 与 notice 弹窗的提示文字, 会覆盖 content 的设置</td>
        </tr>
        <tr>
            <td>position</td>
            <td>'center'</td>
            <td>notice 弹窗的位置, center: 居中; bottom: 底部</td>
        </tr>

        
    </tbody>
</table>


## 回调函数
<table>
    <thead>
        <tr>
            <th>函数</th>
            <th>默认值</th>
            <th>说明</th>
        </tr>                           
    </thead>
    <tbody>
        <tr>
            <td>onClickConfirmBtn</td>
            <td>function(){}</td>
            <td>点击“确定”按钮的回调函数</td>
        </tr>
        <tr>
            <td>onClickCancelBtn</td>
            <td>function(){}</td>
            <td>点击“取消”按钮的回调函数</td>
        </tr>
        <tr>
            <td>onClickCloseBtn</td>
            <td>function(){}</td>
            <td>点击“关闭”按钮的回调函数</td>
        </tr>
        <tr>
            <td>onBeforeShow</td>
            <td>function(){}</td>
            <td>弹窗显示前的回调函数</td>
        </tr>
        <tr>
            <td>onShow</td>
            <td>function(){}</td>
            <td>弹窗显示后的回调函数</td>
        </tr>
        <tr>
            <td>onBeforeClosed</td>
            <td>function(){}</td>
            <td>弹窗关闭前的回调函数</td>
        </tr>
        <tr>
            <td>onClosed</td>
            <td>function(){}</td>
            <td>弹窗关闭后的回调函数</td>
        </tr>

    </tbody>
</table>


## 方法
| 方法            | 说明  |
| :--------       | :----  |
|obj.close |关闭对话框。<br />用法：dialogObj.close() |
| obj.update | 更改 toast 和 notice 类型弹窗内容 ( 图标以及提示文字 )<br />可传入参数：<br>content: 弹窗内容, 可以是HTML <br>                infoIcon: 弹窗提示图标<br>infoText: 弹窗提示文字<br>autoClose: 自动关闭的延迟时间<br>onBeforeClosed: 关闭前回调函数<br>onClosed: 关闭后回调函数  |


## 目录结构
```
├─dist                // 项目发布资源目录, Grunt 生成
│  ├─css              // 项目 CSS 文件
│  ├─demos            // 项目示例页面
│  ├─images           // 项目 image 文件
│  ├─js               // 项目 JS 文件
│  │  ├─dialog.js     // 弹窗 JS
│  │  ├─dialog.min.js // 弹窗最小版本 JS
│  │  └─example.js    // 示例 JS
│  └─lib              // 公共 JS 文件
│
├─src                 // 实际进行开发的目录
│  ├─css              // 项目 CSS 文件, 由 Grunt 生成
│  ├─demos            // 项目示例页面
│  ├─images           // 项目 image 文件
│  ├─js               // 项目 JS 文件
│  │  ├─dialog.js     // 弹窗主要 JS
│  │  ├─example.js    // 示例 JS
│  │  ├─ripple.js     // 点击水波纹效果 JS
│  │  └─tapEvent.js   // 点击事件 JS
│  ├─lib              // 公共 JS 文件
│  ├─scss             // 项目相关 SCSS 文件
│  └─templates        // 初始静态 DMEO 资源目录
│
├─Gruntfile.js        // Grunt任务配置
├─_config.json        // Grunt配置所需信息
└─package.json        // 项目信息以及依赖
```

## Grunt 使用方法
**1、安装 Grunt**
```
npm install
```

**2、在本地运行项目**
```
grunt serve
```

