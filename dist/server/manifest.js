const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-ddd82b04.js","imports":["_app/immutable/start-ddd82b04.js","_app/immutable/chunks/index-a8b8d47a.js","_app/immutable/chunks/singletons-32b54b54.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-5f259f25.js'),
			() => import('./chunks/1-e320147b.js'),
			() => import('./chunks/2-d0e3047f.js'),
			() => import('./chunks/3-fed8497c.js'),
			() => import('./chunks/4-8c2aa665.js'),
			() => import('./chunks/5-a036e15e.js'),
			() => import('./chunks/6-fd185cb8.js'),
			() => import('./chunks/7-c52bb6a6.js'),
			() => import('./chunks/8-13baa738.js'),
			() => import('./chunks/9-42fe83c3.js'),
			() => import('./chunks/10-3f25adae.js'),
			() => import('./chunks/11-88688b96.js'),
			() => import('./chunks/12-caad2d3d.js'),
			() => import('./chunks/13-39d303a3.js'),
			() => import('./chunks/14-6a0211a2.js'),
			() => import('./chunks/15-369b70bb.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/admin/account",
				pattern: /^\/admin\/account\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/admin/account/flights/[id]",
				pattern: /^\/admin\/account\/flights\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				optional: [false],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/auth/email/validate",
				pattern: /^\/auth\/email\/validate\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/auth/login",
				pattern: /^\/auth\/login\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/auth/password/forgot",
				pattern: /^\/auth\/password\/forgot\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/auth/password/reset",
				pattern: /^\/auth\/password\/reset\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/auth/register",
				pattern: /^\/auth\/register\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/auth/register/complete",
				pattern: /^\/auth\/register\/complete\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/auth/signout",
				pattern: /^\/auth\/signout\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/bookflight/[id]",
				pattern: /^\/bookflight\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				optional: [false],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: "/discover",
				pattern: /^\/discover\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/user/account",
				pattern: /^\/user\/account\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
