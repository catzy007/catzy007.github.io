function loadHomepageFeatured(arrIndex, arrLower){
    document.getElementById("featuredPostCard").onclick = function () { location.href='./loader.html?post=' + arrLower[0] };
    document.getElementById("featuredPostImg").src = checkImgExist("./posts/" + arrLower[0] + "/thumbnail.jpg");
    document.getElementById("featuredPostDate").innerHTML = getTitleDate(arrIndex[0]);
    document.getElementById("featuredPostTitle").innerHTML = getTitleOnly(arrIndex[0]);
    // arrIndex.splice(0, 1); arrLower.splice(0, 1);
    document.getElementById("featuredPostCard").style.display = 'block';
}

function loadHomepageCategory(){
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