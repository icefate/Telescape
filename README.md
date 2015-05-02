# Telescape


Telescape 是一个Chrome浏览器扩展。通过Chrome浏览器调用 editplus 或 sublime 等编辑器，打开当前浏览的页面的代码文件。简单的说就是Chrome浏览器调用外部程序。

Git链接: [https://github.com/icefate/Telescape](https://github.com/icefate/Telescape)

作者：T.N.T (icefate)

官网: [http://ce.buckethead.cn](http://ce.buckethead.cn) 

Email：i#buckethead.cn (请将#改为@)



## 一些话

我目前为止一直是用editplus 和 sublime 写php、css、js等等，这两个编辑器打开速度够快，我不喜欢大型的IDE。

关于调试，我是直接浏览器看效果，看哪个页面不顺眼再去翻磁盘里的代码文件来改。然后呢，我需要不停地穿梭于存放各种类型代码的文件夹. 

偶然得知Chrome扩展开发提供了与外部程序通信的功能，然后查了些文档，写了这个东西。



## 效果演示 - Gif 


文档比较啰嗦，不过看过gif后，也许你会喜欢。


Chrome调用编辑器打开文件 、 打开文件夹- 效果演示：<a href="gif/1.gif">gif/1.gif </a>

我自己用的：<a href="gif/2.gif">gif/2.gif</a> -- 注意，本项目中不包含其中的js功能



## 准备- Prepare

系统： Win 7 64位 、 Win XP 以前也可以，许久不用了，你可以试试。

Chrome版本： 39.0.2171.99 m  -- 最新版本的没测。

注意：你的电脑需要安装 `.net framework 4.0` 以上 ， 以下会说明


## 安装 - Install

### 添加注册项 (附gif)

建议先阅读，再看后边的gif

<strong>1、在注册表管理中找到 NativeMessagingHosts</strong>

可能位于如下两个位置：
```
  HKEY_LOCAL_MACHINE\SOFTWARE\Google\Chrome\NativeMessagingHosts\ 
或
  HKEY_CURRENT_USER\SOFTWARE\Google\Chrome\NativeMessagingHosts\ 
```
若没有，则找到 Google\Chrome\ 的节点，自己加一个试试

<br>
<strong>2、在 NativeMessagingHosts 下新建 telescape 项</strong>

NativeMessagingHosts 下新建名为 `telescape` 的项，值填写 `Telescape.json的路径` ，例如：
```
E:\APMServ5.2.6\www\htdocs\jsplugin\ChromeExt\Telescape\host\Telescape.json
```


附gif ： <a href="gif/regedit.gif" target="_blank" style="font-size: 18px;">注册表配置 - regedit.gif</a>



### 配置config.ini

修改`host/config.ini`文件,  配置编辑器路径: 
```
[Editor]
editplus="D:\Program Files\EditPlus 3.51\EditPlus.exe"
sublime="D:\Program Files\Sublime Text 2\SublimeText.exe"
notepad="notepad"
```
* editplus / sublime 是电脑上安装好的程序位置。上面的设置是我，记得改成你的。
* notepad是系统的记事本

也可以扩展，设置更多编辑器，前提是这些编辑器能用命令行打开文件。

以下 Telescape.exe会说明


### chrome安装Telescape扩展 

1. 打开chrome扩展界面：`chrome://extensions/`
2. 将<span class="blue">app文件夹</span> 拖入到浏览器中
3. 安装成功后，找到扩展的ID，如 kolkkhbadaejpjklkedblfahiahaipha  , 将此ID填入到 `host/Telescape.json` 的allowed_origins节点,例如：
```
	"allowed_origins": [
		"chrome-extension://kolkkhbadaejpjklkedblfahiahaipha/"
	]
```
















## 使用 - How to use

### 给html标签加上属性

html标签加上属性 : class / codefilepath / editor 如下

```
<!-- 理论上可以应用于任何标签 , 以span作为示例 -->
<span class="telescape" codefilepath="E:\APMServ5.2.6\www\htdocs\t.php" editor="editplus">t.php</span>

```
* 必须设置 class="telescape"
* editor的值是config.ini设置的项 ：editplus 或 sublime 或 notepad , 也可以留空，那么默认用editplus。当然默认使用什么编辑器也可以改, 修改 `app/main.js` 里面有注释
* codefilepath可以是一个文件，也可以是一个文件夹，若不存在，则弹出错误提示。


注意：插件会不断获取telescape标签，并添加事件


 
### Telescape.exe 


Telescape.exe是使用C# 开发的，这要求你必须安装 .net framework 4.0 以上 。目前 Telescape.exe 的源码我没放出来 ... 我想看下还有什么可以改的，你反编一下可以看到源码。


如果你双击直接打开Telescape.exe，会有软件界面出现，但它什么都没干。它实际上是一个接受命令行参数的程序，作为桥接程序。


实际上上面执行的是：

```
// 注意转义
$ Telescape.exe "{\"Editor\":\"sublime\",\"FilePath\":\"E:\\APMServ5.2.6\\www\\htdocs\\t.php\"}"

之后 Telescape.exe会解析json, 从config.ini 取得 Editor,  再调用命令行用Editor打开FilePath

```

流程就是：<span class="red">通过 chrome 插件发送参数到 Telescape.exe ---- Telescape.exe判断处理后，会使用命令行调编辑器打开具体文件</span>


### 其他


扩展增强：修改 Telescape.exe ,可以 做任何你能想到并实现的功能


事实上也可以用其他语言开发类似Telescape.exe的东西，例如java 、c++、python等的


甚至更方便的是，你可以使用一个bat文件以替代 Telescape.exe，但bat文件貌似会弹出一个命令行窗口，此外就是其可扩展性不强。

