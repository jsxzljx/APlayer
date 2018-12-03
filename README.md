<p align="center">
<img src="https://ws4.sinaimg.cn/large/006tKfTcgy1fhu01y9uy7j305k04s3yc.jpg" alt="ADPlayer" width="100">
</p>
<h1 align="center">APlayer</h1>

## Introduction

![image](https://i.imgur.com/JDrJXCr.png)

APlayer is a lovely HTML5 music player.

**[Docs](https://aplayer.js.org)**

**[中文文档](https://aplayer.js.org/#/zh-Hans/)**

## Modification Log

- 修改播放/暂停的svg图标为

```
e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24"><path class="aplayer-fill" d="M15,16H13V8H15M11,16H9V8H11M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path></svg>'
e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24"><path class="aplayer-fill" d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path></svg>'
```

- 修改两处webkitTransform为
```
"translateY(" + 48 * -this.index + "px)", 
```

- 修改两处`aplayer-button`， 将其从`aplayer-pic`的div转移到`aplayer-info`中

```
t += ';">\n        </div>\n    <div class="aplayer-info">\n   <div class="aplayer-button aplayer-play">',
t += s.play,
t += '</div>\n    <div class="aplayer-music">\n            <span class="aplayer-title">No audio</span>\n            <span class="aplayer-author"></span>\n        </div>\n        <div class="aplayer-lrc">\n            <div class="aplayer-lrc-contents" style="transform: translateY(0); -webkit-transform: translateY(0);"></div>\n        </div>\n        <div class="aplayer-controller">\n            <div class="aplayer-bar-wrap">\n                <div class="aplayer-bar">\n                    <div class="aplayer-loaded" style="width: 0"></div>\n                    <div class="aplayer-played" style="width: 0; background: ',
```

- 修改`aplayer-buttion`来增加click事件的监听， 而不是`aplayer-pic`

```
var e = this;
this.player.template.button.addEventListener("click", function({
	e.player.toggle()
})
```
- 修改两处默认音量

```
this.audio.volume = 1,
```

```
loop: "all",
order: "list",
volume: 1,
```

- 修改`escape`函数， 防止对`&'<>`字符转义

```
a.$escape = function(e) {
	return function(e) {
		return e;
	}(function e(t) {
		"string" != typeof t && (t = void 0 === t || null === t ? "" : "function" == typeof t ? e(t.call(t)) : JSON.stringify(t));
		return t
	}(e))
}
```

- 修改默认aplayer-pic的background-color为`#E0E0E0`而不是theme-color

```
this.template.pic.style.backgroundColor = '#E0E0E0'
```

- 删除正在播放的音乐的指示器，共两处。首先修改`aplayer-list-cur`如下
```
<span class="aplayer-list-cur"></span>\n    <span class="aplayer-list-index">
```

删除如下代码
```
this.template.listCurs[t] && (this.template.listCurs[t].style.backgroundColor = e),
```