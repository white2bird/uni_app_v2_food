function getCustom(){
	return uni.getStorageSync("cache_Custom");
}

function setCustom(custom){
 	uni.setStorageSync("cache_Custom", custom);
}

function getCustomBar(){
	return uni.getStorageSync("cache_CustomBar");
}

function setCustomBar(CustomBar){
 	uni.setStorageSync("cache_CustomBar", CustomBar);
}

function getStatusBar(){
	return uni.getStorageSync("cache_StatusBar");
}

function setStatusBar(StatusBar){
 	uni.setStorageSync("cache_StatusBar", StatusBar);
} 

export default{
	getCustom:getCustom,
	setCustom:setCustom,
	getCustomBar:getCustomBar,
	setCustomBar:setCustomBar,
	getStatusBar:getStatusBar,
	setStatusBar:setStatusBar
}