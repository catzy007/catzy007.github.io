//set and get web identifier
var bgIdnt;
var bgUrl;
var bgTitle;
var bgLang;
var tOp = "UMBRELLA";

function setBlogIdentifier(pIdnt, pUrl, pTitle, pLang){
	bgIdnt = pIdnt;
	bgUrl = pUrl;
	bgTitle = tOp + " - " + pTitle;
	bgLang = pLang;
}

function getBlogIdentifier(){
	return [bgIdnt, bgUrl, bgTitle, bgLang];
}