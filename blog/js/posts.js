
//get and show posts========================================================================================
function getPostsArray(){
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
//get requested post from url
    var url = window.location.hash.substr(1);
    var hash = url.replace("#!", "");
    hash = hash.replace("!","");
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
                if(i-1 < 0){prevPost = "#!";}else{prevPost = '#!'+arrPosts[i-1];}
                if(i+1 >= arrPosts.length){nextPost = "#!";}else{nextPost = '#!'+arrPosts[i+1];}
            //get post and parse to html
                reqParseMarkdown("POST", post, prevPost, nextPost);
                setBlogIdentifier("/blog/#!" + hash, window.location.href, arrPure[i].split('-').join(' ').substring(11), "en");
                break;
            }
        }
    //if requested url not found in index
        if(i == arrPosts.length){
        //if requested url = index page
            // if(hash == "index"){
                // var post="## Index\n";
                // for(var i=0; i<arrPosts.length; i++){
                //     if(arrPure[i].length == "1" && arrPure[i] == "-"){
                //         arrPure.splice(i,1);
                //         post=post+"<br>";
                //     }
                //     post=post + "<a style=\"font-size:18px;\" onclick=\"location.href='#!"+ 
                //     arrPosts[i] +"';refreshed()\">"+ arrPure[i].split('-').join(' ') +"</a>\n<br>";
                //     //console.log(i + " " + arrPosts[i] + " " + arrPure[i]);
                // }
                // showMarkdown("PAGE", ["#!", "#!", post])
        //if requested url = NONE
            //} else{
                var mylog = "#![POST] XMLHttpRequest Error!";
                var pagelog = "<br><br><br><br><br><br><br>\
                    <div align=\"center\">\
                        <h1 class=\"not-found-nmbr\">404</h1>\n\
                        <h1>Page Not Found!</h1>\n\
                        <h3>Sorry the page you're looking for could not be found.</h3>\
                        <h4>[POST] XMLHttpRequest Error!</h4>\
                        <br>\
                        <h3><a href=\"./\">Homepage</a></h3>\
                    </div>";
                showMarkdown("PAGE", ["#!", "#!", pagelog]);
                console.log(mylog);
            // }
        }
//if no specific post requested = show homepage/first post in index
    }else{
        setBlogIdentifier("/blog/#!" + arrPosts[0], window.location.href, arrPure[0].split('-').join(' ').substring(11), "en");
        var post="./posts/"+arrPosts[0]+"/index.md";
        var prevPost = "#!";
        var nextPost = "#!" + arrPosts[1];
    //get post and parse to html
        reqParseMarkdown("POST", post, prevPost, nextPost);
    }	
}
