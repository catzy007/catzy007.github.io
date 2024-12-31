const renderer = {
    blockquote(token) {
        const body = marked.parse(token.text);
        return `<blockquote class="blockquote">\n${body}</blockquote>\n`;
    },
    image(token){
        const cleanHref = encodeURI(token.href).replace(/%25/g, '%');
        if (cleanHref === null) {
            return text;
        }
        token.href = cleanHref;

        var edge=0, center=0;
        switch(token.text) {
            case "img_xs":
                edge=5; center=2;
                break;
            case "img_sm":
                edge=4; center=4;
                break;
            case "img_md":
                edge=3; center=6;
                break;
            case "img_lg":
                edge=2; center=8;
                break;
            case "img_xl":
                edge=1; center=10;
                break;
            case "img_xxl":
                edge=0; center=12;
                break;
            default:
                edge=3; center=6;
        }

        return '<div class="row">'
            + '<div class="col-sm-' + edge + '"></div>'
            + '<div class="col-sm-' + center + '">'
            + '<div class="img-thumbnail">'
            + '<img class="img-fluid" alt="'
            + token.text
            + '" loading="lazy" src="'
            + token.href
            + '" '
            + (token.title ? 'title="' + token.title + '">' : '>')
            + (token.title ? '<span>' + token.title + '</span>' : '')
            + '</div>'
            + '</div>'
            + '<div class="col-sm-' + edge + '"></div>'

            + '</div>'
    }
}