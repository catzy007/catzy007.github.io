<div class="blog-cat"></div>
<script>
    var post="## Index\n";
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
    executeXhr("./posts/index.md", getPostsArray, "POST-INDEX")
</script>