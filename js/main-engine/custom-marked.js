const renderer = {
    image(href, title, text) { 
        const cleanHref = encodeURI(href).replace(/%25/g, '%');
        if (cleanHref === null) {
            return text;
        }
        href = cleanHref;

        var output=document.createElement("div"); output.className="row";
        var div1sm3=document.createElement("div"); div1sm3.className="col-sm-3";
        var div2sm6=document.createElement("div"); div2sm6.className="col-sm-6";
        var div3thumb=document.createElement("div"); div3thumb.className="img-thumbnail";
        var div4sm3=document.createElement("div"); div4sm3.className="col-sm-3";
        var img=document.createElement("img"); img.className="img-fluid";
        img.src=`${href}`; img.loading="lazy"; img.alt=`${text}`
        if(title){img.title=`${title}`;}

        div3thumb.appendChild(img);
        div2sm6.appendChild(div3thumb);
        output.appendChild(div1sm3);
        output.appendChild(div2sm6);
        output.appendChild(div4sm3);

        return output.outerHTML;
    }
}