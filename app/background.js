
chrome.runtime.onMessage.addListener(  
	function(request, sender, sendResponse) {  
		//Send a single message to a native application.
 		chrome.runtime.sendNativeMessage(request.HostName, {"Editor":request.Editor,"FilePath":request.FilePath}, function(response){
			
		});
 	return true;  
});  