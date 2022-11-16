function loadPageUnindexed(urlRequest, pageRequest){
    setSiteIdentifier(pageRequest, urlRequest, "Unlisted Index", "en-us");
    document.title = getSiteIdentifier()[2];
    executeXhr("./posts/unindexed.md", parseUnlistedIndex, "INDEX", pageRequest);
}

function unlistedIndexWrapper(targetUrl, targetDate, targetName){
    var IndexElmtPara = document.createElement("p");
    var IndexElmtAncr = document.createElement("a");
    IndexElmtAncr.innerHTML = targetDate + " - " + targetName;
    IndexElmtAncr.href = "./loader.html?post=" + targetUrl;
    IndexElmtPara.appendChild(IndexElmtAncr);
    return IndexElmtPara;
}

function emptyUnlistedIndexWrapper(){
    var IndexEmpty = document.createElement("p");
    IndexEmpty.innerHTML = "Empty";
    return IndexEmpty;
}

function parseUnlistedIndex(){
    var text = this.responseText;
    var arrUnlisted = parseIndexArray(text);
    var arrUnlistedL = parseIndexLower(text);

    var mainContent = document.getElementById("main-content");
    mainContent.innerHTML = "";
    var pageTitle = document.createElement("h4");
    pageTitle.innerHTML = "Unlisted Index";
    mainContent.appendChild(pageTitle);

    if(arrUnlisted.length > 0){
        for(var i=0; i<arrUnlisted.length; i++){
            mainContent.appendChild(
                unlistedIndexWrapper(
                    arrUnlistedL[i],
                    getTitleDate(arrUnlisted[i]),
                    getTitleOnly(arrUnlisted[i])
                )
            );
        }
    }else{
        mainContent.appendChild(emptyUnlistedIndexWrapper());
    }    
}