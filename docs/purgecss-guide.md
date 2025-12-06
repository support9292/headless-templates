# PurgeCSS Configuration

This project uses Tailwind CSS, which has built-in CSS purging functionality. The `content` configuration in `tailwind.config.js` automatically removes unused utility classes during production builds.

## Tailwind CSS Purging (Recommended)

Tailwind CSS automatically purges unused styles in production mode. No additional configuration needed!

**How it works:**

- Tailwind scans all files listed in `tailwind.config.js` → `content` array
- Unused utility classes are removed during `yarn build`
- Production CSS bundle is dramatically smaller

**Configured files:**

```javascript
content: [
  './node_modules/flowbite-react/**/*.js',
  './app/**/*.{js,ts,jsx,tsx}',
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
];
```

## Additional PurgeCSS (Optional)

If you need to purge custom CSS beyond Tailwind utilities, you can configure `@fullhuman/postcss-purgecss` in `postcss.config.js`.

### Example Configuration:

```javascript
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          '@fullhuman/postcss-purgecss': {
            content: [
              './app/**/*.{js,ts,jsx,tsx}',
              './pages/**/*.{js,ts,jsx,tsx}',
              './components/**/*.{js,ts,jsx,tsx}',
            ],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
            safelist: {
              standard: [/^flowbite/, /^carousel/],
              deep: [/^carousel-/],
              greedy: [/^swiper/],
            },
          },
        }
      : {}),
  },
};
```

### Safelist Important Classes

Always safelist dynamically generated classes and third-party library styles:

- Flowbite components: `/^flowbite/`
- Carousel animations: `/^carousel/`
- Any classes added via JavaScript

## Best Practices

1. **Trust Tailwind's built-in purging** - It's optimized and works well
2. **Keep custom CSS minimal** - Prefer Tailwind utilities
3. **Document custom classes** - Use `@layer components` in SCSS files
4. **Monitor bundle size** - Run `yarn analyze` to check CSS size
5. **Test production builds** - Always verify styles work after purging

## Monitoring CSS Size

```bash
# Build and check bundle sizes
yarn build

# Analyze bundle composition
ANALYZE=true yarn build
```

Look for the CSS file size in the build output. A healthy CSS bundle for this size app:

- Without purging: 200-400 KB
- With Tailwind purging: 10-30 KB
- Gzipped: 2-8 KB

## Troubleshooting

**Missing styles in production?**

1. Check if class names are in `tailwind.config.js` → `content`
2. Add dynamic classes to safelist
3. Verify class names aren't constructed dynamically (e.g., `text-${color}`)

**Still too large?**

1. Run bundle analyzer: `ANALYZE=true yarn build`
2. Check for duplicate CSS imports
3. Remove unused third-party CSS libraries
4. Consider code-splitting CSS by route
