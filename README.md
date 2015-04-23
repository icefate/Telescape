# Telescape

这是一个Chrome浏览器扩展 - A Chrome extension

它的功能是：通过Chrome浏览器调用editplus 或 sublime等编辑器，打开当前浏览的页面的代码文件。事实上就是Chrome浏览器调用外部程序。

我所

## 环境要求

<span style="color:red">注意：你的电脑需要安装 .net framework 4.0 以上</span>

## Gif 效果

有空再录制

## 设置

### 添加注册项

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


### 配置config.ini

修改host/config.ini文件,  配置编辑器路径：
```
[Editor]
editplus="D:\Program Files\EditPlus 3.51\EditPlus.exe"
sublime="D:\Program Files\Sublime Text 2\SublimeText.exe"
notepad="notepad"
```
notepad是系统的记事本，editplus 和 sublime 是你安装好的路径，这个你懂的。

也可以扩展，设置更多编辑器，前提是这些编辑器能用命令行打开文件。

以下 Telescape.exe会说明


### chrome安装Telescape扩展

1. 打开chrome扩展界面：`chrome://extensions/`
2. 将Telescape的`app文件夹`拖入到浏览器中
3. 安装成功后，找到扩展的ID，如kolkkhbadaejpjklkedblfahiahaipha  将此ID填入到 `host/Telescape.json` 的allowed_origins节点,例如：
```
	"allowed_origins": [
		"chrome-extension://kolkkhbadaejpjklkedblfahiahaipha/"
	]
```

## 具体使用

### 说明

html标签加上属性 
```
class="telescape" codefilepath="E:\APMServ5.2.6\www\htdocs\t.php" editor="editplus 或 sublime 或 notepad"
```
设置editor会查找config.ini设置的项，也可以留空，那么默认用editplus。

当然默认使用什么编辑器也可以改, 修改 `app/main.js` 里面有注释

如果codefilepath可以是一个文件，也可以是一个文件夹，若不存在，则弹出错误提示。

注意：插件会不断获取telescape标签，并添加事件

### 一个完整的html代码

```
<span class="telescape" codefilepath="E:\APMServ5.2.6\www\htdocs\t.php" editor="editplus">t.php</span>

```
点击打开文件： <span class="telescape cclink" codefilepath="E:\APMServ5.2.6\www\htdocs\t.php" editor="editplus">t.php</span>

点击打开文件夹： <span class="telescape cclink" codefilepath="E:\APMServ5.2.6\www\htdocs\">打开文件夹 htdocs</span>


### 关于Telescape.exe

Telescape.exe是使用C# 开发的。如果你双击直接打开Telescape.exe，会有软件界面出现，但它什么都没干。它实际上是一个接受命令行参数的程序，作为桥接程序。


实际上上面执行的是：

```
// 注意转义
$ Telescape.exe "{\"Editor\":\"sublime\",\"FilePath\":\"E:\\APMServ5.2.6\\www\\htdocs\\t.php\"}"

之后 Telescape.exe会解析json，取得 Editor 和 FilePath ， 再调用命令行用Editor打开FilePath

```
流程就是：<span style="color:red">通过 chrome 插件发送参数到 Telescape.exe ---- Telescape.exe判断处理后，会使用命令行调编辑器打开具体文件</span>

### 扩展增强

你可以修改 Telescape.exe , 做任何你能想到并实现的功能。Telescape.exe源码有空再加进来，完善一些细节。 

也可以用其他语言开发，例如java 、c++

甚至更方便的是，你可以使用一个bat文件以替代 Telescape.exe，但bat文件貌似会弹出一个命令行窗口，此外就是其可扩展性不强。


### Tips

适合前端开发

可考虑写一段公用js，根据 url 获取当前浏览的网页代码文件路径、加载的 js、css 文件，然后生成标签。那么就不用整天打开文件夹去找代码文件了。

## 其他 

### 尚未解决的编码问题

<span class="red">带中文路径的文件，无法打开</span>，这是编码的问题，暂时不想弄了。需改 Telescape.exe  

