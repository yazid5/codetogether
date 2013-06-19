google.load("feeds", "1");
function initialize(){
    // 実行される関数
    // http://www.ajaxtower.jp/googleajaxfeed/feed/index3.html
    $("#feedurltext").keypress(function(e){
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) { 
            //alert($("#feedurltext").val());
            var urlText = $("#feedurltext").val();
            urlText = "http://feeds.feedburner.com/100AbandonedArtworks";
            var feed = new google.feeds.Feed(urlText);
            feed.load(function (result){
                if (!result.error){
                    var subsc = result.feed.title;
                    // 同じフィードは追加しない。
                    //var isAlreadyRegistered = false; 
                    //$("#feed-list li a").each(function(){
                    //    var $this = $(this);
                    //    var hre = ($this.attr("href"));
                    //    if(urlText === hre){
                    //        isAlreadyRegistered = true;
                    //        return false;
                    //    }
                    //});
                    //if (isAlreadyRegistered) return;
                    
                    if ($('#feed-list li a[href="' + urlText + '"]').length > 0) return;
                    // 属性セレクタ http://semooh.jp/jquery/api/selectors/
                    $("#feed-list").append('<li><a href="' + urlText + '" class="feedName">' + subsc + "</a></li>");
                    
                    //var feedList = $("#feed-list li a");
                    //for (var i=0; i < feedList.length; i++) {
                    //    var item = feedList.eq(i);
                    //    console.log(item.attr("href"));
                    //}
                    
        	        //for (var i = 0; i < result.feed.entries.length; i++) {
                    //    var entry = result.feed.entries[i];
            	    //}
                    // end for // <li><a href="http://feeds" class="feedName">Dancing Astronaut</a></li>
		        } // end if
            }); // end feed.load
        } // end if
    }); // end keypress

}
google.setOnLoadCallback(initialize);