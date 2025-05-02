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
            + '</div>';
    },
}

const video = {
    name: 'video',
    level: 'inline',
    start(src) { return src.match(/:/)?.index; },
    tokenizer(src, tokens) {
      const rule = /^(!\[)(video.*)(\]\()(.*?)(\))/;
      const match = rule.exec(src);
      if (match) {
        return {
          type: 'video',
          raw: match[0],
          text: match[2],
          href: match[4]
        };
      }
    },
    renderer(token) {
        var edge=0, center=0;
        switch(token.text) {
            case "video_xs":
                edge=5; center=2;
                break;
            case "video_sm":
                edge=4; center=4;
                break;
            case "video_md":
                edge=3; center=6;
                break;
            case "video_lg":
                edge=2; center=8;
                break;
            case "video_xl":
                edge=1; center=10;
                break;
            case "video_xxl":
                edge=0; center=12;
                break;
            default:
                edge=3; center=6;
        }

        return '<div class="row">'
            + '<div class="col-sm-' + edge + '"></div>'
            + '<div class="col-sm-' + center + '">'
            + '<div class="img-thumbnail">'
            + '<video width="100%" height="auto" controls>'
            + '<source src="' + token.href + '" type="video/mp4">'
            + '<p>Sorry, your browser doesn\'t support embedded videos.</p>'
            + '</video> '
            + '</div>'
            + '</div>'
            + '<div class="col-sm-' + edge + '"></div>'
            + '</div>';
    },
};

const emoji = {
    name: 'emoji',
    level: 'inline',                           // This is an inline-level tokenizer
    start(src) { return src.indexOf(':'); },   // Hint to Marked.js to stop and check for a match
    tokenizer(src, tokens) {
		const rule = /^:(\w+):/;               // Regex for the complete token, anchor to string start
		const match = rule.exec(src);
		if (match) {
			return {                           // Token to generate
			type: 'emoji',                     // Should match "name" above
			raw: match[0],                     // Text to consume from the source
			emoji: match[1]                    // Additional custom properties
			};
		}
    },
    renderer(token) {
		return `<span class="emoji">${nodeEmoji.emojify(":"+token.emoji+":")}</span>`;
    }
};