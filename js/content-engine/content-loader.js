function loadContentIndex(){
    var text = this.responseText;
	var arrIndex = parseIndexArray(text);
    var arrLower = parseIndexLower(text);
    // console.log(arrIndex); console.log(arrLower);
    var urlRequest = getUrlRequest();
    var pageRequest = urlRequest.split("=");
    var typeRequest = pageRequest[0].split("?");
    // console.log(pageRequest); console.log(urlRequest);
    // console.log(typeRequest[1]);

    if(pageRequest[1]){
        executeXhr("./pages/category/index.md", loadContentCategory, "CATEGORY", "category");
        if(typeRequest[1] == "post"){
            document.getElementById("featuredPostImg").src = checkImgExist("./posts/" + pageRequest[1] + "/thumbnail.jpg");
            loadContentPost(arrIndex, arrLower, urlRequest, pageRequest[1]);
        }else if(typeRequest[1] == "pages"){
            document.getElementById("featuredPostImg").src = checkImgExist("./pages/" + pageRequest[1] + "/thumbnail.jpg");
            loadContentPages(urlRequest, pageRequest[1]);
        }
        document.getElementById("featuredPostCard").style.display = 'block';
        loadContentRecommended(arrIndex, arrLower);
    }else{
        document.location.href = './';
    }
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
    var contentPath = "./posts/"+pageRequest+"/index.md";
    setSiteIdentifier(pageRequest, urlRequest, capitalize(getTitleOnly(pageRequest)), "en-us");
    reqParseMarkdown("POST", contentPath);
}

function loadContentPages(urlRequest, pageRequest){
    var contentPath = "./pages/"+pageRequest+"/index.md";
    setSiteIdentifier(pageRequest, urlRequest, capitalize(pageRequest), "en-us");
    reqParseMarkdown("PAGES", contentPath);
}

function loadContentRecommended(arrIndex, arrLower){
    var contPostCardId = []; var contPostImgId = [];
    var contPostDateId = []; var contPostTitleId = [];
    var recommendedContentI = []; var recommendedContentL = [];
    var contLoadMax; var dice;

    if(arrIndex.length > 0){
        if(arrIndex.length > 3){
            contLoadMax = 3;
        }else{
            contLoadMax = arrIndex.length;
        }
        document.getElementById("recommendedContent").style.display = 'block';
    }

    for(var i=0; i<contLoadMax; i++){
        dice = Math.floor(Math.random() * arrIndex.length);
        recommendedContentI.push(arrIndex[dice]); 
        recommendedContentL.push(arrLower[dice]);
    }
    
    for(var i=1; i<contLoadMax+1; i++){
        contPostCardId.push("recommendedContentCard"+i.toString());
        contPostImgId.push("recommendedContentImg"+i.toString());
        contPostDateId.push("recommendedContentDate"+i.toString());
        contPostTitleId.push("recommendedContentTitle"+i.toString());
    }

    for(var i=0; i<contLoadMax; i++){
        document.getElementById(contPostCardId[i]).href = "./loader.html?post=" + recommendedContentL[i];
        document.getElementById(contPostImgId[i]).src = checkImgExist("./posts/" + recommendedContentL[i] + "/thumbnail.jpg");
        document.getElementById(contPostDateId[i]).innerHTML = getTitleDate(recommendedContentI[i]);
        document.getElementById(contPostTitleId[i]).innerHTML = getTitleOnly(recommendedContentI[i]);
        document.getElementById(contPostCardId[i]).style.display = 'block';
    }
}