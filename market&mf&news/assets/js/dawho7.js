(function ($) {
var gdpr_block = document.getElementById('gdpr-cookie-block');
var dom_body = document.body;
var gdpr_btn = document.getElementById('gdpr-cookie-btn');
dom_body.style.marginBottom = gdpr_block.offsetHeight + 'px';

if (getCookie('dawhoGDPR') != null) {
	gdpr_block.parentNode.removeChild(gdpr_block);
	dom_body.style.marginBottom = '';
}

gdpr_btn.addEventListener('click', function(){
	iunderstandgdpr();
});

function iunderstandgdpr() {
	gdpr_block.parentNode.removeChild(gdpr_block);
	dom_body.style.marginBottom = '';

	setCookie();
}

function setCookie() {
	expire_days = 365;
	var d = new Date();
	d.setTime(d.getTime() + (expire_days * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = "dawhoGDPR=1" + "; " + expires + ';path=/';
}

function getCookie(objName) {
	var arrStr = document.cookie.split("; ");
	for (var i = 0; i < arrStr.length; i++) {
		var temp = arrStr[i].split("=");
		if (temp[0] == objName) return unescape(temp[1]);
	}
}
})($);