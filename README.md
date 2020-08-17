# 基于微信sdk封装

## 快速开始

### 安装

* npm

``` 
npm install --save hndt-wechat
import WeChat from 'hndt-wechat'
```

* script

``` 
git clone https://github.com/xiawang1024/xwWeChat.git
cd wxWeChat
npm install
npm run build
```

> 执行完步骤后，可以在dist目录中找到umd规范打包的版本 `dist/hndt-wechat.min.js` 

### 使用

``` 
//实例化，返回一个WeChat的实例
new WeChat(appId, {title, desc, imgUrl, link})

```

#### 方法

* WeChat类方法

``` js
WeChat.getWx()
//返回原生微信js-sdk的wx对象
```

微信[js-sdk](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html)

* 实例方法

``` js
let options = {
    title: 'title',
    desc: 'desc',
    imgUrl: ''
    link:''
}
let demo = new WeChat('', options)
//实例方法
demo.share(options)
```

### 参数

* appId 必填
* title: 分享标题
* desc: 分享描述
* imgUrl: 分享图片
* link: 分享链接（非必填）

