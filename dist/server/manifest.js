const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".webmanifest":"application/manifest+json"},
	_: {
		entry: {"file":"_app/immutable/start-59befb2b.js","imports":["_app/immutable/start-59befb2b.js","_app/immutable/chunks/index-238b7a49.js","_app/immutable/chunks/singletons-df46876e.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-67b5ccdc.js'),
			() => import('./chunks/1-e8dabaab.js'),
			() => import('./chunks/2-73513f98.js'),
			() => import('./chunks/3-86d31b08.js'),
			() => import('./chunks/4-869918cf.js'),
			() => import('./chunks/5-8baa7095.js'),
			() => import('./chunks/6-b52568b0.js'),
			() => import('./chunks/7-2015f796.js'),
			() => import('./chunks/8-71170abb.js'),
			() => import('./chunks/9-a81f4387.js'),
			() => import('./chunks/10-42a301bc.js'),
			() => import('./chunks/11-3083753e.js'),
			() => import('./chunks/12-a94dd263.js'),
			() => import('./chunks/13-ab60dbd4.js'),
			() => import('./chunks/14-228ed919.js'),
			() => import('./chunks/15-646c9ff8.js'),
			() => import('./chunks/16-c5056de9.js'),
			() => import('./chunks/17-2de7e047.js'),
			() => import('./chunks/18-eb6193b0.js'),
			() => import('./chunks/19-862d1a00.js')
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
				id: "/about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/admin/account",
				pattern: /^\/admin\/account\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/admin/account/flights/[id]",
				pattern: /^\/admin\/account\/flights\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				optional: [false],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/auth/email/validate",
				pattern: /^\/auth\/email\/validate\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/auth/login",
				pattern: /^\/auth\/login\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/auth/password/forgot",
				pattern: /^\/auth\/password\/forgot\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/auth/password/reset",
				pattern: /^\/auth\/password\/reset\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/auth/register",
				pattern: /^\/auth\/register\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/auth/register/complete",
				pattern: /^\/auth\/register\/complete\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/auth/signout",
				pattern: /^\/auth\/signout\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/bookflight/[id]",
				pattern: /^\/bookflight\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				optional: [false],
				page: { layouts: [0], errors: [1], leaf: 13 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/discover",
				pattern: /^\/discover\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			},
			{
				id: "/legal-mentions",
				pattern: /^\/legal-mentions\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 16 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 17 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 18 },
				endpoint: null
			},
			{
				id: "/user/account",
				pattern: /^\/user\/account\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 19 },
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
