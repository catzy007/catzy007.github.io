const renderer = {
    blockquote(properties) {
        console.log(properties);
        const body = marked.parse(properties.text);
        return `<blockquote class="blockquote">\n${body}</blockquote>\n`;
    },
    image(properties){
        console.log(properties);
        const cleanHref = encodeURI(properties.href).replace(/%25/g, '%');
        if (cleanHref === null) {
            return text;
        }
        properties.href = cleanHref;

        return '<div class="row">'
            + '<div class="col-sm-3"></div>'
            + '<div class="col-sm-6">'
            + '<div class="img-thumbnail">'
            + '<img class="img-fluid" alt="'
            + properties.text
            + '" loading="lazy" src="'
            + properties.href
            + '" '
            + (properties.title ? 'title="' + properties.title + '">' : '>')
            + '</div>'
            + '</div>'
            + '<div class="col-sm-3"></div>'
            + '</div>'
    }
}