//request parse markdown
function reqParseMarkdown(type, contentPath){
    executeXhr(contentPath, showMarkdown, type);
}

//markdown parser
function showMarkdown(type, errorPage){
    console.time("#![PARSER] Marked.js");

    var markdown = (this.responseText || errorPage || "null");
    marked.use(
        {async: false, pedantic: false,
        breaks: false, gfm: true, renderer},
        createDirectives(),
        markedHighlight({
            emptyLangClass: 'hljs',
            langPrefix: 'hljs language-',
            highlight(code, lang, info) {
                const language = hljs.getLanguage(lang) ? lang : 'bash';
                return hljs.highlight(code, { language }).value;
            }
        })
    );
    marked.use({extensions:[video]});
    marked.use({extensions:[emoji]});
    var html = marked.parse(markdown);

    html = DOMPurify.sanitize(html, {
        ADD_TAGS: ["iframe"], 
        ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'] 
    });
    document.getElementById('main-content').innerHTML = html;

    if(getSiteIdentifier()[2]){
        document.title = getSiteIdentifier()[2];
    }

    //enable comments on posts
    if(type == "POST" && enableComments()){
        loadComments();
    }

    console.timeEnd("#![PARSER] Marked.js");
}

//load disqus comments
function loadComments(){
    document.getElementById('contentComments').style.display = 'block';
    /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
    var disqus_shortname = getDisqusShortname();
    var disqus_identifier = getSiteIdentifier()[0];
    var disqus_url = getSiteIdentifier()[1];
    var disqus_config = function () { 
        this.language = getSiteIdentifier()[3];
    };
    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = 'https://' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
}