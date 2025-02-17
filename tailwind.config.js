/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1A2B5C',
        gold: '#D4AF37',
        slate: '#4A5568'
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            h1: {
              color: '#111827',
              fontWeight: '800',
              fontSize: '2.25em',
              marginTop: '0',
              marginBottom: '0.8888889em',
              lineHeight: '1.1111111',
            },
            h2: {
              color: '#111827',
              fontWeight: '700',
              fontSize: '1.5em',
              marginTop: '2em',
              marginBottom: '1em',
              lineHeight: '1.3333333',
            },
            h3: {
              color: '#111827',
              fontWeight: '600',
              fontSize: '1.25em',
              marginTop: '1.6em',
              marginBottom: '0.6em',
              lineHeight: '1.6',
            },
            'section.article-intro': {
              marginBottom: '2em',
              '.lead': {
                fontSize: '1.25em',
                color: '#4B5563',
                marginBottom: '1.5em',
              },
            },
            'section.key-takeaways': {
              backgroundColor: '#F3F4F6',
              padding: '1.5em',
              borderRadius: '0.5em',
              marginBottom: '2em',
              ul: {
                marginTop: '0.5em',
                marginBottom: '0.5em',
              },
            },
            table: {
              width: '100%',
              marginTop: '2em',
              marginBottom: '2em',
              fontSize: '0.875em',
              lineHeight: '1.7142857',
              thead: {
                borderBottomWidth: '2px',
                borderBottomColor: '#E5E7EB',
                th: {
                  color: '#111827',
                  fontWeight: '600',
                  padding: '0.75em',
                  backgroundColor: '#F9FAFB',
                },
              },
              tbody: {
                tr: {
                  borderBottomWidth: '1px',
                  borderBottomColor: '#E5E7EB',
                  td: {
                    padding: '0.75em',
                  },
                },
              },
            },
            a: {
              color: '#2563EB',
              textDecoration: 'none',
              '&:hover': {
                color: '#1D4ED8',
                textDecoration: 'underline',
              },
            },
            'ul, ol': {
              paddingLeft: '1.25em',
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            ul: {
              listStyleType: 'disc',
            },
            ol: {
              listStyleType: 'decimal',
            },
            'footer.article-footer': {
              marginTop: '3em',
              paddingTop: '1.5em',
              borderTopWidth: '1px',
              borderTopColor: '#E5E7EB',
              '.last-updated': {
                fontSize: '0.875em',
                color: '#6B7280',
                marginBottom: '0.5em',
              },
              '.disclaimer': {
                fontSize: '0.875em',
                color: '#6B7280',
                fontStyle: 'italic',
              },
            },
            img: {
              borderRadius: '0.375rem',
            },
            code: {
              color: '#111827',
              fontWeight: '600',
              fontSize: '0.875em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: '#111827',
              borderLeftWidth: '0.25rem',
              borderLeftColor: '#E5E7EB',
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
              marginTop: '1.6em',
              marginBottom: '1.6em',
              paddingLeft: '1em',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}