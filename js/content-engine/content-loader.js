function loadContentIndex(){
    var text = this.responseText;
	var arrIndex = parseIndexArray(text);
    var arrLower = parseIndexLower(text);
    // console.log(arrIndex); console.log(arrLower);

    executeXhr("./pages/category/index.md", loadContentCategory, "CATEGORY", "category");

    var urlRequest = getUrlRequest();
    var pageRequest = urlRequest.split("=");
    // console.log(pageRequest); console.log(urlRequest);
    if(pageRequest[1]){
        document.getElementById("featuredPostImg").src = checkImgExist("./posts/" + pageRequest[1] + "/thumbnail.jpg");
        loadContentPost(arrIndex, arrLower, urlRequest, pageRequest[1]);
    }

    document.getElementById("featuredPostCard").style.display = 'block';
}

function loadContentCategory(){
    var categoryList = "";
    var text = this.responseText;
    var arrCategory = parseIndexArray(text)
    var arrCategoryL = parseIndexLower(text)
    for(var i=0; i<arrCategory.length; i++){
        if(arrCategory[i].length == "1" && arrCategory[i] == "-"){
            arrCategory.splice(i,1);
        }
        categoryList+= "<p class=\"clickable\"" +
                    "onclick=\"location.href='./loader.html#!subcategory-" + 
                    arrCategoryL[i] +"'\">" + 
                    arrCategory[i] + "</p>\n";
        // console.log(i + " " + arrCategory[i] + " " + arrCategoryL[i]);
    }
    document.getElementById("categoryList").innerHTML = categoryList;
    document.getElementById("categoryList").style.display = 'block';
}

function loadContentPost(arrIndex, arrLower, urlRequest, pageRequest){
    var contentPath;
    for(var i=0; i<arrLower.length; i++){
        if(pageRequest == arrLower[i]){
            contentPath = "./posts/"+pageRequest+"/index.md";
            setSiteIdentifier(pageRequest, urlRequest, getTitleOnly(arrIndex[i]), "en-us");
            reqParseMarkdown("POST", contentPath);
        }
    }
}