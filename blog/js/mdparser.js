//request parse markdown
	function reqParseMarkdown(type, url, prevPost, nextPost){
		var reqMD = new XMLHttpRequest();
		reqMD.open("GET", url, true);
		reqMD.onreadystatechange = function(oEvent){
			if(reqMD.readyState === 4){
				if(reqMD.status === 200){
					var mylog = "#["+ type +"] XMLHttpRequest Success!";
					showMarkdown(reqMD.responseText, prevPost, nextPost, type);
					console.log(mylog);
				}else{
					var mylog = "#["+ type +"] XMLHttpRequest Error! " + reqMD.statusText;
					showMarkdown(mylog, prevPost, nextPost, "PAGE");
					console.log(mylog);
				}
			}
		}; 
		reqMD.send(null);
	}

//markdown parser
	function showMarkdown(markdown,prevPost,nextPost,type){
		var converter = new showdown.Converter();
		var html = converter.makeHtml(markdown);
		document.getElementById('Posts').innerHTML = html;
		
	//get and parse next, prev posts
		if(prevPost != '#'){
			var BtnPrev = "<button class='btn btn-info' onclick=\"location.href='"+prevPost+"';refreshed()\">Previous Post</button>";
			document.getElementById('BtnPrev').innerHTML = BtnPrev;
			//console.log(BtnPrev);
		}
		if(nextPost != '#'){
			var BtnNext = "<button class='btn btn-info' onclick=\"location.href='"+nextPost+"';refreshed()\">Next Post</button>"; 				
			document.getElementById('BtnNext').innerHTML = BtnNext;
			//console.log(BtnNext);
		}

	//enable comment on post
	if(type == "POST"){
		document.getElementById('Comments').innerHTML = "<div id=\"disqus_thread\"></div>";
		/**
		 *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT 
		 *  THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR 
		 *  PLATFORM OR CMS.
		 *  
		 *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: 
		 *  https://disqus.com/admin/universalcode/#configuration-variables
		 */

		var str = window.location.href;
		var res = str.replace("http://" + window.location.hostname + "/blog", "");
		res = res.replace("https://" + window.location.hostname + "/blog", "");
		console.log(window.location.href);
		console.log(res);
		
		var disqus_config = function () {
			// Replace PAGE_URL with your page's canonical URL variable
			this.page.url = window.location.href;  
			
			// Replace PAGE_IDENTIFIER with your page's unique identifier variable
			this.page.identifier = res; 
		};
		
		(function() {  // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
			var d = document, s = d.createElement('script');
			
			// IMPORTANT: Replace EXAMPLE with your forum shortname!
			s.src = 'https://catzy007.disqus.com/embed.js';
			
			s.setAttribute('data-timestamp', +new Date());
			(d.head || d.body).appendChild(s);
		})();
	}
	}
