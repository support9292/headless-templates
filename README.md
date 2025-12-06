# A Wix CMS Next.js Education Template

![CI Status](https://github.com/support9292/headless-templates/workflows/CI/badge.svg)

> Join the [Wix Headless community on Discord](https://discord.com/invite/n6TBrSnYTp) to get official support, interact with fellow Wix Headless developers and get updates on new releases.

![Template showcase](docs/media/template-showcase.gif)

This template is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It uses [Wix Headless](https://dev.wix.com/api/sdk/about-wix-headless/overview) to leverage the Wix CMS business solution for managing the content on an education site.

## Table of Contents

- [Local Development](#local-development)
- [Styling with SCSS](#styling-with-scss)
- [Code Quality & Linting](#code-quality--linting)
- [Performance & Bundle Analysis](#performance--bundle-analysis)
- [Security & Secrets Management](#security--secrets-management)
- [CI/CD](#cicd)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Learn More](#learn-more)

## Local Development

Prerequisites:

1. [Create a Wix Headless project](https://dev.wix.com/docs/go-headless/getting-started/setup/general-setup/create-a-project)
2. [Add the Content Manager app to your project](https://dev.wix.com/docs/go-headless/getting-started/setup/general-setup/add-apps-to-a-project)
3. Authorize the template with [quick start deployment](https://manage.wix.com/headless-funnel-nextjs/select-platform?templateName=cms) or by [creating an OAuth app](https://dev.wix.com/docs/go-headless/getting-started/setup/authorization/create-an-o-auth-app-for-visitors-and-members)

> **Note:** You must add at least one **Authorization Redirect URI** to ensure authentication works properly. The URI must exactly match the address in your site or app where Wix should redirect members after they log in via a Wix-managed authentication page. For security reasons, Wix only redirects site members to URIs you've explicitly approved. For step-by-step instructions, see [Add Allowed Authorization Redirect URIs](https://dev.wix.com/docs/go-headless/get-started/setup/manage-urls/add-allowed-authorization-redirect-uris).

Set up environment variables to consume Wix Headless APIs:

1. In the template's root folder, create a file for the local environment variables:
   ```sh
   cp .env.template .env.local.
   ```
2. In the new **.env.local** file, paste the OAuth app client ID after `NEXT_PUBLIC_WIX_CLIENT_ID=`.

Run the development server:

1. Run either:

   ```sh
   yarn dev
   ```

   or

   ```sh
   npm i
   npm run dev
   ```

2. Open http://localhost:3000 in your browser to see the template home page.

Edit the template:

- Start editing the homepage by modifying **app/page.tsx**. The page auto-updates as you edit the file.
- Edit any other page using the pattern **app/page.tsx**. For more information, see [Defining Routes](https://beta.nextjs.org/docs/routing/defining-routes) in the Next.js documentation.

# Deployment

You can deploy this repository using any platform which supports Next.js Version 13 and [App Router](https://nextjs.org/docs/app).

The repository requires a single environment variable: `NEXT_PUBLIC_WIX_CLIENT_ID`, which should contain a client ID authorizing access to a Wix project's data.

# Learn More

To learn how to customize the template and add more functionality using Wix APIs, see the [Wix JavaScript SDK reference](https://dev.wix.com/api/sdk).

This template is written in [Next.js](https://nextjs.org/docs) 13 using the [Next.js App Router](https://nextjs.org/docs/app).

To learn more about Next.js, see:

- [Next.js documentation](https://nextjs.org/docs): Learn about Next.js features and APIs.
- [Learn Next.js](https://nextjs.org/learn): An interactive Next.js tutorial.

Additionally, this template uses the following libraries and features:

- [React Server Components](https://nextjs.org/docs/advanced-features/react-18/server-components)
- [TypeScript](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html)
- [TanStack Query v4](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/)
- [Flowbite](https://flowbite.com/)
- [Wix client SDK](https://dev.wix.com/api/sdk/introduction)

# Next.js and Wix Integration Guide

See the comprehensive [integration guide](./docs/integration-guide.md) for step-by-step instructions on how to configure Wix as your headless Booking solution using Next.js on Vercel.

## Styling with SCSS

This project uses SCSS (Sass) for enhanced styling capabilities alongside Tailwind CSS.

### Using SCSS

All stylesheets use the `.scss` extension and support:

- **Nesting**: Write cleaner, more maintainable styles
- **Variables**: CSS custom properties defined in `app/globals.scss`
- **Mixins**: Reusable style blocks (can be added as needed)
- **BEM Naming**: Follow Block-Element-Modifier convention for scalable CSS

Example CSS variables available:

```scss
:root {
  --color-purple-site: #8751bd;
  --color-blue-site: #2859b6;
  --spacing-md: 1rem;
  --font-size-base: 1rem;
}
```

### BEM Naming Convention

Use BEM (Block Element Modifier) for custom CSS classes:

```scss
// Block
.card {
}

// Element
.card__header {
}
.card__body {
}

// Modifier
.card--featured {
}
.card__header--large {
}
```

See examples in `app/globals.scss` and `app/components/Layout/footer.scss`.

### Maintaining Clean Styles

- **Tailwind CSS** already handles purging unused utility classes automatically
- Run `yarn lint:css` to check for style issues
- Keep custom styles minimal; prefer Tailwind utilities when possible
- Document any custom utility classes in `@layer components`

## Code Quality & Linting

### Running Linters

```bash
# Lint JavaScript/TypeScript
yarn lint

# Lint CSS/SCSS
yarn lint:css

# Run both
yarn lint && yarn lint:css
```

### Pre-commit Hooks

This project uses [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged) to automatically lint files before committing:

- TypeScript/JavaScript files: ESLint + Prettier
- CSS/SCSS files: Stylelint
- JSON/Markdown files: Prettier

Hooks are automatically installed when you run `yarn install`.

### Code Style

- **TypeScript**: Strict type checking enabled
- **Prettier**: Automatic code formatting
- **ESLint**: Extends Next.js recommended rules
- **Stylelint**: Follows standard CSS/SCSS conventions

### Dead Code Removal Strategies

To identify and remove unused code:

1. **Bundle Analysis**: Use `yarn analyze` to visualize bundle composition
2. **IDE Tools**: Use "Find Unused Exports" in VS Code or WebStorm
3. **Manual Review**: Search for imports and references
4. **Type Coverage**: Unused TypeScript exports show up with proper tooling
5. **Regular Audits**: Periodically review components and utilities

## Performance & Bundle Analysis

### Analyzing Your Bundle

Visualize what's in your production bundle:

```bash
ANALYZE=true yarn build
```

This opens an interactive treemap showing:

- Bundle composition by module
- Large dependencies
- Optimization opportunities

### Tree Shaking

Tree shaking is automatically enabled via:

- **SWC Minifier**: `swcMinify: true` in Next.js config
- **ES Modules**: All imports use ES6 module syntax
- **Side Effects**: Package.json declarations prevent over-bundling

### Lazy Loading

Use lazy loading to reduce initial bundle size. See examples in `app/examples/lazy-loading-example.tsx`:

```tsx
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Optional: disable SSR for client-only components
});
```

**Best practices:**

- Lazy load heavy components (charts, rich editors, maps)
- Lazy load below-the-fold content
- Use for modal dialogs and conditional UI
- Monitor bundle size with analyzer

### Image Optimization

Next.js Image component is configured for optimal performance:

- **WebP format**: Automatic modern format conversion
- **Responsive**: Multiple sizes generated automatically
- **Lazy loading**: Built-in intersection observer
- **CDN**: Wix Static domains whitelisted

**Image optimization tips:**

- Always use Next.js `<Image>` component
- Provide proper `width` and `height` attributes
- Use `priority` prop for above-the-fold images
- Consider WebP/AVIF formats for best compression

## Security & Secrets Management

### Environment Variables

**Never commit secrets to version control.** The repository is configured to exclude:

- `.env` (all environments)
- `.env.local`
- `.env*.local`

**Setup:**

```bash
# Copy template and add your secrets
cp .env.template .env.local

# Add your Wix Client ID
NEXT_PUBLIC_WIX_CLIENT_ID=your_client_id_here
```

### Secrets Management Policy

1. **Local Development**: Use `.env.local` (git-ignored)
2. **Production**: Set environment variables in your deployment platform (Vercel, Netlify, etc.)
3. **CI/CD**: Use GitHub Secrets for sensitive values in workflows
4. **Rotation**: Regularly rotate API keys and tokens
5. **Principle of Least Privilege**: Only expose variables that are needed

### Security Audits

Run security audits regularly:

```bash
# Check for known vulnerabilities
yarn audit

# Update dependencies
yarn upgrade-interactive
```

### Dependabot

**Recommended**: Enable [Dependabot](https://docs.github.com/en/code-security/dependabot) in your repository:

1. Go to Repository Settings → Security → Dependabot
2. Enable "Dependabot alerts"
3. Enable "Dependabot security updates"
4. Enable "Dependabot version updates"

This automatically:

- Alerts you to vulnerable dependencies
- Creates PRs to update insecure packages
- Keeps dependencies up to date

## CI/CD

### GitHub Actions Workflow

The repository includes a CI workflow (`.github/workflows/ci.yml`) that runs on every push and pull request:

**Pipeline stages:**

1. **Lint**: ESLint for JavaScript/TypeScript
2. **Style Check**: Stylelint for CSS/SCSS
3. **Security**: npm audit for vulnerabilities
4. **Build**: Compile production bundle
5. **Test**: Run Playwright E2E tests

**Status**: Check the badge at the top of this README for current CI status.

### Running Tests

```bash
# Run E2E tests locally
yarn test

# Or explicitly
yarn e2e

# Run tests in headed mode (see browser)
yarn playwright test --headed

# Run specific test file
yarn playwright test tests/e2e/home.spec.ts
```

### Continuous Integration Best Practices

- All tests must pass before merging
- Lint errors block the pipeline
- Security audits warn but don't block (can be configured)
- Test artifacts uploaded on failure for debugging

## Contributing

We welcome contributions! Please follow these guidelines:

### Development Workflow

1. **Fork the repository** and create a feature branch

   ```bash
   git checkout -b feature/my-new-feature
   ```

2. **Make your changes** following the code style

   - Write TypeScript with proper types
   - Follow BEM for custom CSS classes
   - Add tests for new features

3. **Run quality checks**

   ```bash
   yarn lint
   yarn lint:css
   yarn build
   yarn test
   ```

4. **Commit with meaningful messages**

   ```bash
   git commit -m "feat: add new carousel component"
   ```

5. **Push and create a Pull Request**

### Code Review Process

- PRs require at least one approval
- CI checks must pass
- Update documentation for new features
- Add entries to CHANGELOG.md

### Coding Standards

- **TypeScript**: Use strict mode, avoid `any`
- **Components**: Functional components with hooks
- **Styling**: Tailwind utilities first, custom SCSS when needed
- **Testing**: Test user-facing features, not implementation details
- **Comments**: Explain "why", not "what"

### Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Test additions or changes
- `chore:` Build process or tooling changes

## Deployment
