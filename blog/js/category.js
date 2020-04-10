// console.log("test");
// executeXhr("./kegiatan.md", getCategoryArray, "PAGE-INDEX");

function getCategoryArray(){
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
    var post="## Category\n";
    for(var i=0; i<arrPosts.length; i++){
        if(arrPure[i].length == "1" && arrPure[i] == "-"){
            arrPure.splice(i,1);
            post=post+"<br>";
        }
        post=post + "<a style=\"font-size:18px;\" onclick=\"location.href='#!"+ 
        arrPosts[i] +"';refreshed()\">"+ arrPure[i].split('-').join(' ') +"</a>\n<br>";
        //console.log(i + " " + arrPosts[i] + " " + arrPure[i]);
    }
    showMarkdown("PAGE", ["#!", "#!", post])
    console.log(post);
    showMarkdown("PAGE", ["#!", "#!", post])
}