// https://developer.chrome.com/extensions/runtime#method-sendMessage
function setTelescapeEvent () {
	var cclip=document.getElementsByClassName("telescape");
	for (var i=0; i<cclip.length; i++) {
			if(cclip[i].getAttribute('isset-telescape-event')===null){ // 是否已经设置
				cclip[i].setAttribute('isset-telescape-event','yes'); // 立刻设置，不要放到以下的click里设置。
				cclip[i].addEventListener('click', function(evt) {  
					// 1. chrome.runtime.sendMessage 发送消息到 背景脚本 background.js 
					// 2. background.js 里再用 chrome.runtime.sendNativeMessage 发送消息到 程序 Telecape.exe
					// PS：无法使用的情况-->在框架iframe外打开框架内的网页文件 无法使用该插件。
					var filepath=this.getAttribute("codefilepath");
					var editor=this.getAttribute('editor');
					editor===null && (editor='editplus'); //editor为空时默认使用editplus
					if (filepath!==null) {
						chrome.runtime.sendMessage({HostName: "telescape",Editor:editor, FilePath:filepath}, function(response) { });  
					}else {
						alert("错误, FilePath:"+filepath);
					}
				}, false);
			}
	}
	setTimeout(setTelescapeEvent,30); // 不断进行设置，确保对js生成的telescape标签 添加事件
}
setTelescapeEvent();
