//get post index
	fetch('./posts/index.md').then(
		function(response) {
			if (response.status !== 200) {
				showMarkdown('## Looks like there was a problem. Status Code: ' +
					response.status,'#','#');
				return;
			}
			response.text().then(text => getPostsArray(text));
			console.log('[INDEX] Fetch Success!');
		}
	)
	.catch(function(err) {
		console.log('[INDEX] Fetch Error :-S', err);
	});
