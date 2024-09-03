import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './public/**/*.html',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                'nav-link-dark': '#666666', // Darker color for nav links
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            backgroundImage: {
                'gradient-navbar': 'linear-gradient(to right, #8e2f6b, #7c4d9a, #6f2e6f)',
            },
            backgroundSize: {
                '300%': '300% 300%', // Larger size for smoother animation
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                moveHorizontal: {
                    '0%': { transform: 'translateX(-50%) translateY(-10%)' },
                    '50%': { transform: 'translateX(50%) translateY(10%)' },
                    '100%': { transform: 'translateX(-50%) translateY(-10%)' },
                },
                moveInCircle: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                moveVertical: {
                    '0%': { transform: 'translateY(-50%)' },
                    '100%': { transform: 'translateY(50%)' },
                },
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                gradientAnimation: {
                    '0%': { backgroundPosition: '0% 0%' },
                    '100%': { backgroundPosition: '100% 100%' },
                },
            },
            animation: {
                'first': 'moveVertical 30s ease-in-out infinite',
                'second': 'moveInCircle 20s linear infinite',
                'third': 'moveInCircle 40s linear infinite',
                'fourth': 'moveHorizontal 40s ease-in-out infinite',
                'fifth': 'moveInCircle 20s ease-in-out infinite',
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'gradientAnimation': 'gradientAnimation 20s ease infinite',
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        function ({ addUtilities }: { addUtilities: Function }) {
            addUtilities({
                '.animate-gradient': {
                    backgroundImage: 'linear-gradient(to right, #8e2f6b, #7c4d9a, #6f2e6f)',
                    backgroundSize: '300% 300%', // Larger size for smoother animation
                    animation: 'gradientAnimation 20s ease infinite', // Adjusted for smoother effect
                },
            });
        },
    ],
};

export default config;
