//get and show pages====================================================================================
function getPagesArray(text){
	//filter text from space
		text = text.split(' ').join('');
	//store original data
		var arrPure = text.split("\n");
		arrPure.reverse(); 
	//store processed data
		text = text.toLowerCase();
		var arrPages = text.split("\n");
		arrPages.reverse(); 
	//filter array (remove empty value)
		var arrPages = arrPages.filter(function(el) { return el; });
		var arrPure = arrPure.filter(function(el) { return el; });
		//console.log(arrPages);console.log(arrPure);
	//filter array post (remove seperator)
		for(var i=0; i<arrPages.length; i++){
			if(arrPages[i].length == "1" && arrPages[i] == "-"){
				arrPages.splice(i,1);
			}
		}
	//show menu in all pages
		var pages="<a class=\"text-pages\" onclick=\"location.href='#';refreshed()\">Home</a>" + 
				"<a class=\"text-pages-seperator\"> | </a>" +
				"<a class=\"text-pages\" onclick=\"location.href='#index';refreshed()\">Index</a>";
		for(var i=0; i<arrPages.length; i++){
			pages=pages + "<a class=\"text-pages-seperator\"> | </a>" +
					"<a class=\"text-pages\" onclick=\"location.href='#" + arrPages[i] + 
					"';refreshed()\">" + arrPure[i].split('-').join(' ') +"</a>";
			//console.log(i + " " + arrPages[i] + " " + arrPure[i]);
		}
		document.getElementById('Pages').innerHTML = pages;
		//console.log(pages);
	//get requested post from url
		var url = window.location.hash.substr(1);
		var hash = url.substring(url.indexOf('#')+1);
		hash = hash.toLowerCase();
		//console.log(hash);
	
	//if post url match with page index
		for(var i=0; i<arrPages.length; i++){
		//requested page
			if(hash == arrPages[i]){
			//set shown page
				var page="./pages/"+hash+"/index.md";
			//get page and parse to html
				reqParseMarkdown("PAGE", page, "#", "#");
				break;
			}
		}
	//if requested url not found in page index
		if(i == arrPages.length){
			var reqIDX = new XMLHttpRequest();
			reqIDX.open("GET", "./posts/index.md", true);
			reqIDX.onreadystatechange = function(oEvent){
				if(reqIDX.readyState === 4){
					if(reqIDX.status === 200){
						var mylog = "#[INDEX] XMLHttpRequest Success!";
						getPostsArray(reqIDX.responseText);
						console.log(mylog);
					}else{
						var mylog = "#[INDEX] XMLHttpRequest Error! " + reqIDX.statusText;
						var pagelog = "<br><br><br><br><br><br><br>\
							<div align=\"center\">\
								<h1 class=\"not-found-nmbr\">404</h1>\n\
								<h1>Index Not Found!</h1>\n\
								<h3>Sorry the main index for this website could not be found.</h3>\
								<h4>[INDEX] XMLHttpRequest Error!</h4>\
							</div>";
						showMarkdown(pagelog, "#", "#", "PAGE");
						console.log(mylog);
					}
				}
			}; 
			reqIDX.send(null);
		}
	}

//get and show posts========================================================================================
	function getPostsArray(text){
	//filter text from space
		text = text.split(' ').join('');
	//store original data
		var arrPure = text.split("\n");
		arrPure.reverse(); 
	//store processed data
		text = text.toLowerCase();
		var arrPosts = text.split("\n");
		arrPosts.reverse(); 
	//filter array (remove empty value)
		var arrPosts = arrPosts.filter(function(el) { return el; });
		var arrPure = arrPure.filter(function(el) { return el; });
		//console.log(arrPosts);console.log(arrPure);
	//filter array post (remove seperator)
		for(var i=0; i<arrPosts.length; i++){
			if(arrPosts[i].length == "1" && arrPosts[i] == "-"){
				arrPosts.splice(i,1);
			}
		}
	//get requested post from url
		var url = window.location.hash.substr(1);
		var hash = url.substring(url.indexOf('#')+1);
		hash = hash.toLowerCase();
		//console.log(hash);
		
	//if user request specific page
		if(hash !== null && hash !== ''){
			
		//check if post url valid
			for(var i=0; i<arrPosts.length; i++){
			//requested page
				if(hash == arrPosts[i]){
				//set shown post
					var post="./posts/"+hash+"/index.md";
				//set prev and next post
					var prevPost;var nextPost;
					if(i-1 < 0){prevPost = "#";}else{prevPost = '#'+arrPosts[i-1];}
					if(i+1 >= arrPosts.length){nextPost = "#";}else{nextPost = '#'+arrPosts[i+1];}
				//get post and parse to html
					reqParseMarkdown("POST", post, prevPost, nextPost, window.location.href, hash, "/blog/#" + hash);
					//showComments(window.location.href, hash, "/blog/#" + hash);
					break;
				}
			}
		//if requested url not found in index
			if(i == arrPosts.length){
			//if requested url = index page
				if(hash == "index"){
					var post="## Index\n";
					for(var i=0; i<arrPosts.length; i++){
						if(arrPure[i].length == "1" && arrPure[i] == "-"){
							arrPure.splice(i,1);
							post=post+"<br>";
						}
						post=post + "<a style=\"font-size:18px;\" onclick=\"location.href='#"+ 
						arrPosts[i] +"';refreshed()\">"+ arrPure[i].split('-').join(' ') +"</a>\n<br>";
						//console.log(i + " " + arrPosts[i] + " " + arrPure[i]);
					}
					showMarkdown(post, '#', '#', "PAGE");
			//if requested url = NONE
				}else{
					var mylog = "#[POST] XMLHttpRequest Error!";
					var pagelog = "<br><br><br><br><br><br><br>\
						<div align=\"center\">\
							<h1 class=\"not-found-nmbr\">404</h1>\n\
							<h1>Page Not Found!</h1>\n\
							<h3>Sorry the page you're looking for could not be found.</h3>\
							<h4>[POST] XMLHttpRequest Error!</h4>\
							<br>\
							<h3><a href=\"./\">Homepage</a></h3>\
						</div>";
					showMarkdown(pagelog, "#", "#", "PAGE");
					console.log(mylog);
				}
			}
	//if no specific post requested = show homepage/first post in index
		}else{
			//showComments(window.location.href, arrPosts[0], "/blog/#" + arrPosts[0]);
			var post="./posts/"+arrPosts[0]+"/index.md";
			var prevPost = "#";
			var nextPost = "#" + arrPosts[1];
		//get post and parse to html
			reqParseMarkdown("POST", post, prevPost, nextPost, window.location.href, hash, "/blog/#" + hash);
		}	
	}

