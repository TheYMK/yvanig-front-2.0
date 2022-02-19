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
				yvanigtheme_light: {
					primary: '#ff5f46' /* Primary color */,
					'primary-focus': '#fc492d' /* Primary color - focused */,
					'primary-content': '#ffffff' /* Foreground content color to use on primary color */,
					secondary: '#14263B',
					'secondary-focus': '#3D89F6',
					'secondary-content': '#ffffff',
					accent: '#37cdbe',
					'accent-focus': '#2aa79b',
					'accent-content': '#ffffff',
					neutral: '#496DDB' /* Neutral color */,
					'neutral-focus': '#6188ff' /* Neutral color - focused */,
					'neutral-content': '#ffffff' /* Foreground content color to use on neutral color */,
					'base-100': '#ffffff',
					'base-200': '#f9fafb',
					'base-300': '#d1d5db',
					'base-content': '#1f2937',
					info: '#e0f2fe',
					'info-content': '#2563eb',
					success: '#dcfce7',
					'success-content': '#16a34a',
					warning: '#fef3c7',
					'warning-content': '#d97706',
					error: '#fee2e2',
					'error-content': '#dc2626'
				}
			}
		]
	},
	plugins: [require('daisyui')]
}
