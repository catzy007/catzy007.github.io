//category list
function loadCategoryList(){
    var categoryList = "";
    var text = this.responseText;
    var arrCategory = parseIndexArray(text);
    var arrCategoryL = parseIndexLower(text);
    for(var i=0; i<arrCategory.length; i++){
        if(arrCategory[i].length == "1" && arrCategory[i] == "-"){
            arrCategory.splice(i,1);
        }
        categoryList = categoryList.concat("<p class='clickable' ");
        categoryList = categoryList.concat("onclick='location.href=\"");
        categoryList = categoryList.concat("./loader.html?category=");
        categoryList = categoryList.concat(arrCategoryL[i] + "\"'>");
        categoryList = categoryList.concat(arrCategory[i] + "</p>\n");
        // console.log(i + " " + arrCategory[i] + " " + arrCategoryL[i]);
    }
    document.getElementById("categoryList").innerHTML = categoryList;
    document.getElementById("categoryList").style.display = 'block';
}


//category page
function loadCategoryPage(urlRequest, pageRequest){
    setSiteIdentifier(pageRequest, urlRequest, capitalize(pageRequest), "en-us");
    document.title = getSiteIdentifier()[2];
    executeXhr("./pages/category/"+pageRequest+".md", parseCategoryPage, "CATEGORY", pageRequest);
}

function CategoryPageWrapper(targetUrl, targetUrlSection, targetDate, targetName){
    var IndexElmtPara = document.createElement("p");
    var IndexElmtAncr = document.createElement("a");
    IndexElmtAncr.innerHTML = targetDate + targetName;
    IndexElmtAncr.href = "./loader.html?"+ targetUrlSection + "=" + targetUrl;
    IndexElmtPara.appendChild(IndexElmtAncr);
    return IndexElmtPara;
}

function parseCategoryPage(urlRequest, pageRequest){
    var text = this.responseText;
    var arrCategory = parseIndexArray(text);
    var arrCategoryL = parseIndexLower(text);

    var mainContent = document.getElementById("main-content");
    mainContent.innerHTML = "";
    var pageTitle = document.createElement("h4");

    if(pageRequest == "index"){
        setElmtThumbnail("featuredPostImg", "./posts/thumbnail.jpg");
        pageTitle.innerHTML = "Category";
        mainContent.appendChild(pageTitle);
        for(var i=0; i<arrCategory.length; i++){
            mainContent.appendChild(
                CategoryPageWrapper(
                    arrCategoryL[i],
                    "category",
                    "",
                    arrCategory[i]
                )
            );
        }
    }else{
        setElmtThumbnail("featuredPostImg", "./pages/category/" + pageRequest + ".jpg");
        pageTitle.innerHTML = capitalize(pageRequest);
        mainContent.appendChild(pageTitle);
        for(var i=0; i<arrCategory.length; i++){
            mainContent.appendChild(
                CategoryPageWrapper(
                    arrCategoryL[i],
                    "post",
                    getTitleDate(arrCategory[i]) + " - ",
                    getTitleOnly(arrCategory[i])
                )
            );
        }
    }
    document.getElementById("main-content").innerHTML = pageHTML;
}