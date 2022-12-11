module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'anjouan-bg':
					"url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
				'grandecomore-bg':
					"url('https://images.pexels.com/photos/261204/pexels-photo-261204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
				'moheli-bg':
					"url('https://images.pexels.com/photos/131423/pexels-photo-131423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
				'mayotte-bg':
					"url('https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"
			},
			height: {
				480: '480px',
				600: '600px',
				97: '30rem'
			},
			width: {
				700: '700px'
			}
		},
		container: {
			center: true
		}
	},
	daisyui: {
		themes: [
			{
				light_theme: {
					"primary": "#7BB1EA",
					"primary-focus": "#2177ff",
					"primary-content": "#ffffff",

					"secondary": "#fc5855",
					"secondary-focus": "#ff770f",
					"secondary-content": "#ffffff",

					"accent": "#9661ed",

					"neutral": "#1D1821",

					"base-100": "#FFFFFF",

					"info": "#7BB1EA",

					"success": "#0F7046",

					"warning": "#96660D",

					"error": "#E85A4A",
				},

				dark_theme: {
					"primary": "#b5345b",
					"primary-focus": "#ab1341",
					"primary-content": "#ffffff",

					"secondary": "#68ff89",
					"secondary-focus": "#2bc44c",
					"secondary-content": "#ffffff",

					"accent": "#556ae0",

					"neutral": "#1B1924",

					"base-100": "#30355A",

					"info": "#5D6FCB",

					"success": "#10844E",

					"warning": "#F6D94C",

					"error": "#FA384B",
				},
			},
		],
	},
	plugins: [require('daisyui')]
}
