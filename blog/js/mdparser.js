//request parse markdown
	function reqParseMarkdown(type, url, prevPost, nextPost){
		var reqMD = new XMLHttpRequest();
		reqMD.open("GET", url, true);
		reqMD.onreadystatechange = function(oEvent){
			if(reqMD.readyState === 4){
				if(reqMD.status === 200){
					var mylog = "#!["+ type +"] XMLHttpRequest Success!";
					showMarkdown(reqMD.responseText, prevPost, nextPost, type);
					console.log(mylog);
				}else{
					var mylog = "#!["+ type +"] XMLHttpRequest Error! " + reqMD.statusText;
					showMarkdown(mylog, prevPost, nextPost, "PAGE");
					console.log(mylog);
				}
			}
		}; 
		reqMD.send(null);
	}

//markdown parser
	function showMarkdown(markdown, prevPost, nextPost, type){
		var converter = new showdown.Converter();
		var html = converter.makeHtml(markdown);
		document.getElementById('Posts').innerHTML = html;

		if(type == "POST" && getBlogIdentifier()[2] !== ""){
			document.title = getBlogIdentifier()[2];
		}
		
	//get and parse next, prev posts
		if(prevPost != '#!'){
			var BtnPrev = "<button class='btn btn-info' onclick=\"location.href='"+prevPost+"';refreshed()\">Previous Post</button>";
			document.getElementById('BtnPrev').innerHTML = BtnPrev;
			//console.log(BtnPrev);
		}
		if(nextPost != '#!'){
			var BtnNext = "<button class='btn btn-info' onclick=\"location.href='"+nextPost+"';refreshed()\">Next Post</button>"; 				
			document.getElementById('BtnNext').innerHTML = BtnNext;
			//console.log(BtnNext);
		}

	//enable comment on post
		if(type == "POST" && enableComments()){
			/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
			var disqus_shortname = 'umbrella-test';
			var disqus_identifier = getBlogIdentifier()[0];
			var disqus_url = getBlogIdentifier()[1];
			var disqus_config = function () { 
				this.language = getBlogIdentifier()[3];
			};

			/* * * DON'T EDIT BELOW THIS LINE * * */
			(function() {
				var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
				dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
				(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
			})();
		}
	}
