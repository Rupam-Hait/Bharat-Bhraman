/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'saffron': '#FF9933',
                'india-green': '#138808',
                'navy-blue': '#000080',
                'gold': '#FFD700',
                'warm-sand': '#F5E6D3',
            },
            fontFamily: {
                'serif': ['"Playfair Display"', 'serif'],
                'sans': ['"Inter"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
