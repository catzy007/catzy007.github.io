function getIndexArray(){
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
    var arrPure = arrPure.filter(function(el) { return el; });
    //console.log(arrPosts);console.log(arrPure);
//filter array post (remove seperator)
    for(var i=0; i<arrPosts.length; i++){
        if(arrPosts[i].length == "1" && arrPosts[i] == "-"){
            arrPosts.splice(i,1);
        }
    }
//show post index page
    var post="## Index\n";
    for(var i=0; i<arrPosts.length; i++){
        if(arrPure[i].length == "1" && arrPure[i] == "-"){
            arrPure.splice(i,1);
            post=post+"<br>";
        }
        post=post + "<a class=\"text-index-subcategory\" onclick=\"location.href='#!"+ 
        arrPosts[i] +"';refreshed()\">"+ arrPure[i].split('-').join(' ') +"</a>\n<br>";
        //console.log(i + " " + arrPosts[i] + " " + arrPure[i]);
    }
    showMarkdown("PAGE", ["#!", "#!", post]);
}