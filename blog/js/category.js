function getCategoryArray(){
    var category = "## Category\n";
    var text = this.responseText;
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
    for(var i=0; i<arrPosts.length; i++){
        if(arrPure[i].length == "1" && arrPure[i] == "-"){
            arrPure.splice(i,1);
            post=post+"<br>\n";
        }
        category=category + "<a class=\"text-category\" onclick=\"location.href='#!subcategory-"+ 
        arrPosts[i] +"';refreshed()\">"+arrPure[i].split('-').join(' ') +"</a>\n<br>\n";
        //console.log(i + " " + arrPosts[i] + " " + arrPure[i]);
    }
    //console.log(category);
    showMarkdown("PAGE", ["#!", "#!", category]);
}