/**
 * Lazy Loading Example for React Components
 *
 * This file demonstrates best practices for lazy loading React components
 * to improve performance by code-splitting and loading components on-demand.
 *
 * Benefits:
 * - Reduces initial bundle size
 * - Improves Time to Interactive (TTI)
 * - Better performance on slower networks
 *
 * NOTE: This file is for documentation purposes only and is not imported
 * anywhere in the application. It serves as a reference for implementing
 * lazy loading patterns.
 */

// Example 1: Route-based lazy loading with Next.js dynamic imports
// This is the recommended approach for Next.js applications
//
// import dynamic from 'next/dynamic';
//
// const DynamicCarousel = dynamic(
//   () => import('@app/components/Carousel/Carousel').then(mod => ({ default: mod.CarouselClient })),
//   {
//     loading: () => <p>Loading carousel...</p>,
//     ssr: false, // Optional: disable server-side rendering if needed
//   }
// );
//
// export default function Page() {
//   return <DynamicCarousel />;
// }

// Example 2: Using React.lazy with named exports
// import { lazy, Suspense } from 'react';
//
// const LazyCarousel = lazy(() =>
//   import('@app/components/Carousel/Carousel').then((module) => ({
//     default: module.CarouselClient,
//   }))
// );
//
// export function LazyLoadedComponent() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex items-center justify-center p-4">
//           <div className="animate-pulse text-gray-500">Loading...</div>
//         </div>
//       }
//     >
//       <LazyCarousel />
//     </Suspense>
//   );
// }

// Example 3: Conditional lazy loading
// Load components based on user interaction or viewport
//
// import { lazy, Suspense, useState } from 'react';
//
// export function ConditionalLazyLoad() {
//   const [showComponent, setShowComponent] = useState(false);
//
//   const HeavyComponent = lazy(() =>
//     import('@app/components/Carousel/Carousel').then((m) => ({ default: m.CarouselClient }))
//   );
//
//   return (
//     <div>
//       <button onClick={() => setShowComponent(true)}>Load Component</button>
//       {showComponent && (
//         <Suspense fallback={<div>Loading heavy component...</div>}>
//           <HeavyComponent />
//         </Suspense>
//       )}
//     </div>
//   );
// }

// Example 4: Lazy loading with error boundaries
//
// import { lazy, Suspense } from 'react';
// import { ErrorBoundary } from 'react-error-boundary';
//
// const LazyComponent = lazy(() => import('./MyComponent'));
//
// export function SafeLazyComponent() {
//   return (
//     <ErrorBoundary fallback={<div>Failed to load component</div>}>
//       <Suspense fallback={<div>Loading...</div>}>
//         <LazyComponent />
//       </Suspense>
//     </ErrorBoundary>
//   );
// }

/**
 * Best Practices:
 *
 * 1. Use lazy loading for:
 *    - Heavy components (charts, maps, rich text editors)
 *    - Below-the-fold content
 *    - Modal dialogs and overlays
 *    - Route components
 *    - Components with large dependencies
 *
 * 2. Don't lazy load:
 *    - Critical above-the-fold components
 *    - Small components (overhead > benefit)
 *    - Components needed immediately on page load
 *
 * 3. Always provide meaningful loading states
 *    - Use skeleton screens for better UX
 *    - Match the approximate size of the loading component
 *    - Consider using loading animations
 *
 * 4. For Next.js, prefer dynamic() over React.lazy()
 *    - Better integration with SSR
 *    - More configuration options
 *    - Automatic code splitting
 *
 * 5. Monitor your bundle size
 *    - Use webpack-bundle-analyzer (yarn analyze)
 *    - Check First Load JS in build output
 *    - Aim for < 200KB for initial bundle
 *
 * 6. Consider viewport-based lazy loading
 *    - Use Intersection Observer API
 *    - Load components when they're about to enter viewport
 *    - Reduces initial load while maintaining smooth UX
 */

// Prevent unused file warning
export {};
