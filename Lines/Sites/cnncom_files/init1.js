//<script>
bouncex.state = {"newvid":true,"iol":true,"tn":1542772383,"pvid":1,"gdpr":true,"casl":false,"request_token":"5d471f184c85bd80e8eb97e92a1811126f4c7dd9bdd6e33be60d179dee6f3d95","rc":false,"mobile":false,"vip":"80.115.228.146","geo":{"country_code":"NL","country_code3":"NLD","country_name":"Netherlands","region":"11","city":"Den Haag","postal_code":"2513","latitude":52.078599999999994,"longitude":4.3012999999999977,"area_code":null,"dma_code":null,"metro_code":null,"continent_code":"EU","zip":"2513","country":"NL","region_name":"Zuid-Holland"}};
bouncex.cookie = {"v":{"completed_signup":false,"last_session_vid":false,"session_count":0},"sid":1,"fvt":1542772383,"vid":1542772383629983,"ao":0,"lp":"https%3A%2F%2Fedition.cnn.com%2F","as":0,"vpv":1,"d":"d","r":"","cvt":1542772383,"gcr":25,"m":0,"did":"5346293554351298731","lvt":1542772383};
bouncex.brandStyles = false;
bouncex.webfonts = false;
bouncex.campaigns = false;
bouncex.creatives = false;
bouncex.debug = false;
bouncex.testmode = {"bxtest":false,"office":false,"bxdev":false};

if (bouncex.gbi) {
	bouncex.gbi.stacks = false;
}

if (bouncex.website) {
	bouncex.website.gbi2Enabled = true;
	bouncex.website.sspConfig = {"index":{"s":"185860","qa_site_id":167884,"reload":50000,"stackWeight":0,"timeout":2000,"production":true,"jsonp":true},"pbm":{"desktop_id":"251632","mobile_id":"251878","publisher_id":"156512","qa_site_id":"248764","reload":50000,"timeout":2000,"endpoint":"hbopenbid.pubmatic.com\/translator?","user_sync_endpoint":"ads.pubmatic.com\/AdServer\/js\/user_sync.html"}};
	bouncex.website.pushFilepath = "\/";
}


bouncex.tryCatch(function(){
	if(bouncex.browser.msie){
		bouncex.setTimeout2(function(){
			bouncex.init();
		}, 0);
	} else {
		bouncex.init();
	}
})();
