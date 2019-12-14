//get and show posts
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
					reqParseMarkdown("POST", post, prevPost, nextPost);
					break;
				}
			}
		//if requested url not found in index
			if(i == arrPosts.length){
			//if requested url = index page
				if(hash == "index"){
					var post="## Index\n";
					for(var i=0; i<arrPosts.length; i++){
						post=post + "<a style=\"font-size:18px;\" onclick=\"location.href='#"+ 
						arrPosts[i] +"';refreshed()\">"+ arrPure[i].split('-').join(' ') +"</a>\n<br>";
						//console.log(i + " " + arrPosts[i] + " " + arrPure[i]);
					}
					showMarkdown(post,'#','#');
			//if requested url = contact page
				}else if(hash == "contact"){
					var post="./posts/contact/index.md";
				//get post and parse to html
					reqParseMarkdown("POST", post, "#", "#");
			//if requested url = about page
				}else if(hash == "about"){
					var post="./posts/about/index.md";
				//get post and parse to html
					reqParseMarkdown("POST", post, "#", "#");
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
					showMarkdown(pagelog, "#", "#");
					console.log(mylog);
				}
			}
	//if no specific post requested = show homepage/first post in index
		}else{
			var post="./posts/"+arrPosts[0]+"/index.md";
			var prevPost = "#";
			var nextPost = "#" + arrPosts[1];
		//get post and parse to html
			reqParseMarkdown("POST", post, prevPost, nextPost);
		}	
	}
