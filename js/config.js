$(function() {

	CMS.init({
		siteName: 'CDV News',
		siteTagline: 'Informatyka zaocznie, 2015-2019',
		siteEmail: 'potlewski1@edu.cdv.pl',
		siteAuthor: 'Otlet',
		siteNavItems: [
			{ name: 'CDV', href: 'http://cdv.pl', newWindow: true},
			{ name: 'WU', href: 'http://portal.cdv.pl', newWindow: true},
			{ name: 'Terminarz'}
		],
		postsFolder: 'posts',
		postSnippetLength: 120,
		pagesFolder: 'pages',
		fadeSpeed: 300,
		footerText: '&copy; ' + new Date().getFullYear() + ' All Rights Reserved.',
		mode: 'GitHub',
		githubUserSettings: {
			username: 'CDVInformatyka2015',
			repo: 'info'
		}

	});
	marked.setOptions({
		renderer: new marked.Renderer(),
		gfm: true,
		tables: true,
		breaks: false,
		pedantic: false,
		sanitize: true,
		smartLists: true,
		smartypants: false
	});

});
