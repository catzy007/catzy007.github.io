const renderer = {
    blockquote(token) {
        console.log(token);
        const body = marked.parse(token.text);
        return `<blockquote class="blockquote">\n${body}</blockquote>\n`;
    },
    image(token){
        console.log(token);
        const cleanHref = encodeURI(token.href).replace(/%25/g, '%');
        if (cleanHref === null) {
            return text;
        }
        token.href = cleanHref;

        return '<div class="row">'
            + '<div class="col-sm-3"></div>'
            + '<div class="col-sm-6">'
            + '<div class="img-thumbnail">'
            + '<img class="img-fluid" alt="'
            + token.text
            + '" loading="lazy" src="'
            + token.href
            + '" '
            + (token.title ? 'title="' + token.title + '">' : '>')
            + '</div>'
            + '</div>'
            + '<div class="col-sm-3"></div>'
            + '</div>'
    }
}