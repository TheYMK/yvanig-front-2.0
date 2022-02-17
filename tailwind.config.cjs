module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				yvanigtheme_light: {
					primary: '#a991f7',
					'primary-focus': '#8462f4',
					'primary-content': '#ffffff',
					secondary: '#f6d860',
					'secondary-focus': '#f3cc30',
					'secondary-content': '#ffffff',
					accent: '#37cdbe',
					'accent-focus': '#2aa79b',
					'accent-content': '#ffffff',
					neutral: '#3d4451',
					'neutral-focus': '#2a2e37',
					'neutral-content': '#ffffff',
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
};
