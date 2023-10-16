export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["JSpeak.png","JSpeak.webm","Plantopia.png","backarrow.svg","electrontimer.png","electrontimer.webm","favicon.png","github-mark-white.svg","identicon.png","img/posts/firebase-emulator-suite.png","plantopia.webm","robots.txt","sitemap.xml","skills/azure.svg","skills/babel.svg","skills/bash.svg","skills/c.svg","skills/cmake.svg","skills/csharp.svg","skills/docker.svg","skills/electron.svg","skills/eslint.svg","skills/express.svg","skills/git.svg","skills/github.svg","skills/gitlab.svg","skills/graphql.svg","skills/html5.svg","skills/javascript.svg","skills/jest.svg","skills/jetbrains.svg","skills/linux.svg","skills/lua.svg","skills/markdown.svg","skills/npmwordmark.svg","skills/pytest.svg","skills/python.svg","skills/react.svg","skills/ren.py","skills/sass.svg","skills/selenium.svg","skills/supabase.svg","skills/svelte.svg","skills/tailwindcss.svg","skills/trello.svg","skills/typescript.svg","skills/ubuntu.svg","skills/unity.svg","skills/vercel.svg","skills/vim.svg","skills/visualstudio.svg","skills/vscode.svg","socials/email.svg","socials/linkedin.png","thumb/firebase-fastapi-ci.png"]),
	mimeTypes: {".png":"image/png",".webm":"video/webm",".svg":"image/svg+xml",".txt":"text/plain",".xml":"application/xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.3e9b20dc.js","app":"_app/immutable/entry/app.d991015e.js","imports":["_app/immutable/entry/start.3e9b20dc.js","_app/immutable/chunks/scheduler.68e3df67.js","_app/immutable/chunks/singletons.68205f7b.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.d991015e.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.68e3df67.js","_app/immutable/chunks/index.ed6dfa59.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/github",
				pattern: /^\/api\/github\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/github/_server.ts.js'))
			},
			{
				id: "/api/github/search",
				pattern: /^\/api\/github\/search\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/github/search/_server.ts.js'))
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
