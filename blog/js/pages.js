//get and show pages====================================================================================
function getPagesArray(){
	var text = this.responseText;
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
	var pages="";
	for(var i=0; i<arrPages.length; i++){
		if(i>0){
			pages+= "<a class=\"text-pages-seperator\"> | </a>";
		}
		if(arrPages[i] == "home"){
			pages+= "<a class=\"text-pages\" onclick=\"location.href='#!';refreshed()\">Home</a>";
		}else{
			pages+= "<a class=\"text-pages\" onclick=\"location.href='#!" + arrPages[i] + 
					"';refreshed()\">" + arrPure[i].split('-').join(' ') +"</a>";
		}
		//console.log(i + " " + arrPages[i] + " " + arrPure[i]);
	}
	document.getElementById('Pages').innerHTML = pages;
	//console.log(pages);
//get requested post from url
	var url = window.location.hash.substr(1);
	var hash = url.replace("#", "");
	hash = hash.replace("!","");
	hash = hash.toLowerCase();
	//console.log(hash);

//if post url match with page index
	for(var i=0; i<arrPages.length; i++){
	//requested page
		if(hash == arrPages[i] && hash == "index"){
		//show post index page
			executeXhr("./posts/index.md", getIndexArray, "POST-INDEX");
			break;
		}else if(hash == arrPages[i] && hash == "category"){
		//show category page
			executeXhr("./pages/category/index.md", getCategoryArray, "CATEGORY");
			break;
		}else if(hash.includes("subcategory-")){
		//show subcategory page
			var subcat = hash.replace("subcategory-",'');
			executeXhr("./pages/category/"+subcat+".md", getSubcategoryArray, "SUBCATEGORY", subcat);
			break;
		}else if(hash == arrPages[i]){
		//set shown page
			var page="./pages/"+hash+"/index.md";
		//get page and parse to html
			reqParseMarkdown("PAGE", page, "#!", "#!");
			break;
		}
	}
//if requested url not found in page index
	if(i == arrPages.length){
		executeXhr("./posts/index.md", getPostsArray, "POST-INDEX")
	}
}