/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				bg: '#1c1c1c',
				accent: '#009DDC',
				primary: {"50":"#ecfdf5","100":"#d1fae5","200":"#a7f3d0","300":"#6ee7b7","400":"#34d399","500":"#10b981","600":"#059669","700":"#047857","800":"#065f46","900":"#064e3b"}
			},
			animation: {
				'slide-right': 'slideRight 0.5s ease-in-out forwards'
			},
			keyframes: {
				slideRight: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(10px)' }
				}
			}
		}
	},
};
