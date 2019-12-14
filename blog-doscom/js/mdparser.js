//request parse markdown
	function reqParseMarkdown(type, url, prevPost, nextPost){
		var reqMD = new XMLHttpRequest();
		reqMD.open("GET", url, true);
		reqMD.onreadystatechange = function(oEvent){
			if(reqMD.readyState === 4){
				if(reqMD.status === 200){
					var mylog = "#["+ type +"] XMLHttpRequest Success!";
					showMarkdown(reqMD.responseText, prevPost, nextPost);
					console.log(mylog);
				}else{
					var mylog = "#["+ type +"] XMLHttpRequest Error! " + reqMD.statusText;
					showMarkdown(mylog, prevPost, nextPost);
					console.log(mylog);
				}
			}
		}; 
		reqMD.send(null);
	}

//markdown parser
	function showMarkdown(markdown,prevPost,nextPost){
		var converter = new showdown.Converter();
		var html = converter.makeHtml(markdown);
		document.getElementById('Posts').innerHTML = html;
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
	}
