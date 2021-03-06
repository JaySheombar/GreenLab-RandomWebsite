(function(){
	function setCookie(name,value,days) {
		var expires = "";
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days*24*60*60*1000));
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + (value || "")  + expires + "; path=/";
	}
	function getCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}	
	$(document).ready(function(){
		if (!getCookie('scambarDismiss')) {
			$('<div id="scam_warning"><h1 class="text_center">Scam alert!</h1><p class="text_center">It has came to our attention that criminals started to impersonate PopAds employees and scam advertisers. Be aware that the <strong>only official support channel is support@popads.net email</strong>. We offer <strong>no chat, phone or Skype support</strong>, we are <strong>not active on LinkedIn or any other social media</strong>.		We <strong>never offer any deposit bonuses/discounts</strong> and the only way to make a payment is through <strong>Deposit button in the Billing page</strong> available after logging in at: <a class="scam_warning_rf" href="https://www.popads.net">https://www.popads.net</a>Always check page URL and SSL certificate! If <strong>anyone asked you to send money to a PayPal email</strong> in order to make a deposit at PopAds, <strong>you will lose your money!</strong></p><p id="scam_resistant" ><a href="#" class="scam_warning_close">I understood, don\'t show it to me again!</a></p></div>').appendTo('body').popup();
			$('<div id="scam_bar">Scam alert: PopAds customers are targetted by criminals. Click here for more details.</div>').insertBefore('#container');
			$('#scam_bar').click(function(){ 
				$('#scam_warning').popup('show'); 
				$('#scam_warning .scam_warning_close').click(function(){ 
					setCookie('scambarDismiss', '1', 31);
				});
				$('#scam_bar').hide(); 
			});
		}
	});
})();
