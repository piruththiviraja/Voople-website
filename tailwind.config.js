export default {
content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
theme: {
extend: {
colors: {
brand: {
primary: '#C1121F',
dark: '#0B0B0E',
surface: '#151519',
steel: '#2E2E35',
text: '#EDEDED',
muted: '#A1A1AA'
}
},
fontFamily: {
serif: ['Playfair Display', 'serif'],
sans: ['Inter', 'sans-serif']
}
}
},
plugins: []
}