//set and get web identifier
var WebsiteName = "Stevia Page";
var disqusShortname = "umbrella-test";
var copyrightOwner = "Bagus Saputra";
var disqusID; var disqusUrl;
var disqusTitle; var disqusLang;
var enableDisqus = false;

function setSiteIdentifier(pageIdentifier, pageUrl, pageTitle, pageLang){
	disqusID = pageIdentifier;
	disqusUrl = pageUrl;
	disqusTitle = WebsiteName + " - " + pageTitle;
	disqusLang = pageLang;
}

function getSiteIdentifier(){
	return [disqusID, disqusUrl, disqusTitle, disqusLang];
}

function getDisqusShortname(){
	return disqusShortname;
}

function enableComments(){
	return enableDisqus;
}

function getSiteCopyright(){
	return copyrightOwner;
}