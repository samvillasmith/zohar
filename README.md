# zohar

```
zohar
├─ README.md
└─ zohar
   ├─ .env
   ├─ .eslintrc.json
   ├─ .next
   │  ├─ app-build-manifest.json
   │  ├─ build-manifest.json
   │  ├─ cache
   │  │  ├─ swc
   │  │  │  └─ plugins
   │  │  │     └─ v7_macos_aarch64_0.104.41
   │  │  └─ webpack
   │  │     ├─ client-development
   │  │     │  ├─ 0.pack.gz
   │  │     │  ├─ 1.pack.gz
   │  │     │  ├─ 2.pack.gz
   │  │     │  ├─ 3.pack.gz
   │  │     │  ├─ 4.pack.gz_
   │  │     │  ├─ index.pack.gz
   │  │     │  └─ index.pack.gz.old
   │  │     ├─ client-development-fallback
   │  │     │  ├─ 0.pack.gz
   │  │     │  └─ index.pack.gz
   │  │     ├─ edge-server-development
   │  │     │  ├─ 0.pack.gz
   │  │     │  ├─ 1.pack.gz
   │  │     │  ├─ index.pack.gz
   │  │     │  └─ index.pack.gz.old
   │  │     └─ server-development
   │  │        ├─ 0.pack.gz
   │  │        ├─ 1.pack.gz
   │  │        ├─ 2.pack.gz
   │  │        ├─ 3.pack.gz
   │  │        ├─ index.pack.gz
   │  │        └─ index.pack.gz.old
   │  ├─ package.json
   │  ├─ react-loadable-manifest.json
   │  ├─ server
   │  │  ├─ app
   │  │  │  ├─ (auth)
   │  │  │  │  └─ (routes)
   │  │  │  │     ├─ sign-in
   │  │  │  │     │  └─ [[...sign-in]]
   │  │  │  │     │     ├─ page.js
   │  │  │  │     │     └─ page_client-reference-manifest.js
   │  │  │  │     └─ sign-up
   │  │  │  │        └─ [[...sign-up]]
   │  │  │  │           ├─ page.js
   │  │  │  │           └─ page_client-reference-manifest.js
   │  │  │  └─ (landing)
   │  │  │     ├─ page.js
   │  │  │     └─ page_client-reference-manifest.js
   │  │  ├─ app-paths-manifest.json
   │  │  ├─ edge-runtime-webpack.js
   │  │  ├─ middleware-build-manifest.js
   │  │  ├─ middleware-manifest.json
   │  │  ├─ middleware-react-loadable-manifest.js
   │  │  ├─ middleware.js
   │  │  ├─ next-font-manifest.js
   │  │  ├─ next-font-manifest.json
   │  │  ├─ pages-manifest.json
   │  │  ├─ server-reference-manifest.js
   │  │  ├─ server-reference-manifest.json
   │  │  ├─ static
   │  │  │  └─ webpack
   │  │  │     └─ 633457081244afec._.hot-update.json
   │  │  ├─ vendor-chunks
   │  │  │  ├─ @babel.js
   │  │  │  ├─ @clerk.js
   │  │  │  ├─ @peculiar.js
   │  │  │  ├─ @radix-ui.js
   │  │  │  ├─ @swc.js
   │  │  │  ├─ asn1js.js
   │  │  │  ├─ class-variance-authority.js
   │  │  │  ├─ clsx.js
   │  │  │  ├─ cookie.js
   │  │  │  ├─ deepmerge.js
   │  │  │  ├─ dot-case.js
   │  │  │  ├─ lower-case.js
   │  │  │  ├─ map-obj.js
   │  │  │  ├─ next.js
   │  │  │  ├─ no-case.js
   │  │  │  ├─ node-fetch-native.js
   │  │  │  ├─ path-to-regexp.js
   │  │  │  ├─ pvtsutils.js
   │  │  │  ├─ pvutils.js
   │  │  │  ├─ snake-case.js
   │  │  │  ├─ snakecase-keys.js
   │  │  │  ├─ swr.js
   │  │  │  ├─ tailwind-merge.js
   │  │  │  ├─ tslib.js
   │  │  │  ├─ use-sync-external-store.js
   │  │  │  └─ webcrypto-core.js
   │  │  └─ webpack-runtime.js
   │  ├─ static
   │  │  ├─ chunks
   │  │  │  ├─ app
   │  │  │  │  ├─ (auth)
   │  │  │  │  │  ├─ (routes)
   │  │  │  │  │  │  ├─ sign-in
   │  │  │  │  │  │  │  └─ [[...sign-in]]
   │  │  │  │  │  │  │     └─ page.js
   │  │  │  │  │  │  └─ sign-up
   │  │  │  │  │  │     └─ [[...sign-up]]
   │  │  │  │  │  │        └─ page.js
   │  │  │  │  │  └─ layout.js
   │  │  │  │  ├─ (landing)
   │  │  │  │  │  └─ page.js
   │  │  │  │  └─ layout.js
   │  │  │  ├─ app-pages-internals.js
   │  │  │  ├─ main-app.js
   │  │  │  ├─ polyfills.js
   │  │  │  └─ webpack.js
   │  │  ├─ css
   │  │  │  └─ app
   │  │  │     └─ layout.css
   │  │  ├─ development
   │  │  │  ├─ _buildManifest.js
   │  │  │  └─ _ssgManifest.js
   │  │  ├─ media
   │  │  │  ├─ 05a31a2ca4975f99-s.woff2
   │  │  │  ├─ 513657b02c5c193f-s.woff2
   │  │  │  ├─ 51ed15f9841b9f9d-s.woff2
   │  │  │  ├─ c9a5bc6a7c948fb0-s.p.woff2
   │  │  │  ├─ d6b16ce4a6175f26-s.woff2
   │  │  │  ├─ ec159349637c90ad-s.woff2
   │  │  │  └─ fd4db3eb5472fc27-s.woff2
   │  │  └─ webpack
   │  │     ├─ 10475b2b6e043bad.webpack.hot-update.json
   │  │     ├─ 52e13e427d2ff7da.webpack.hot-update.json
   │  │     ├─ 633457081244afec._.hot-update.json
   │  │     ├─ afc9e07220914517.webpack.hot-update.json
   │  │     ├─ app
   │  │     │  ├─ (landing)
   │  │     │  │  └─ page.afc9e07220914517.hot-update.js
   │  │     │  ├─ layout.10475b2b6e043bad.hot-update.js
   │  │     │  ├─ layout.52e13e427d2ff7da.hot-update.js
   │  │     │  ├─ layout.afc9e07220914517.hot-update.js
   │  │     │  └─ layout.be205a6d4b27be98.hot-update.js
   │  │     ├─ be205a6d4b27be98.webpack.hot-update.json
   │  │     ├─ d28a56f1a5237b22.webpack.hot-update.json
   │  │     ├─ e4072aa7fdb8ecc9.webpack.hot-update.json
   │  │     ├─ webpack.10475b2b6e043bad.hot-update.js
   │  │     ├─ webpack.52e13e427d2ff7da.hot-update.js
   │  │     ├─ webpack.afc9e07220914517.hot-update.js
   │  │     ├─ webpack.be205a6d4b27be98.hot-update.js
   │  │     ├─ webpack.d28a56f1a5237b22.hot-update.js
   │  │     └─ webpack.e4072aa7fdb8ecc9.hot-update.js
   │  ├─ trace
   │  └─ types
   │     ├─ app
   │     │  ├─ (auth)
   │     │  │  ├─ (routes)
   │     │  │  │  ├─ sign-in
   │     │  │  │  │  └─ [[...sign-in]]
   │     │  │  │  │     └─ page.ts
   │     │  │  │  └─ sign-up
   │     │  │  │     └─ [[...sign-up]]
   │     │  │  │        └─ page.ts
   │     │  │  └─ layout.ts
   │     │  ├─ (landing)
   │     │  │  └─ page.ts
   │     │  └─ layout.ts
   │     └─ package.json
   ├─ README.md
   ├─ app
   │  ├─ (auth)
   │  │  ├─ (routes)
   │  │  │  ├─ sign-in
   │  │  │  │  └─ [[...sign-in]]
   │  │  │  │     └─ page.tsx
   │  │  │  └─ sign-up
   │  │  │     └─ [[...sign-up]]
   │  │  │        └─ page.tsx
   │  │  └─ layout.tsx
   │  ├─ (dashboard)
   │  │  └─ (routes)
   │  │     └─ dashboard
   │  │        └─ page.tsx
   │  ├─ (landing)
   │  │  └─ page.tsx
   │  ├─ favicon.ico
   │  ├─ globals.css
   │  ├─ layout.tsx
   │  └─ test
   ├─ components
   │  └─ ui
   │     └─ button.tsx
   ├─ components.json
   ├─ lib
   │  └─ utils.ts
   ├─ middleware.ts
   ├─ next-env.d.ts
   ├─ next.config.mjs
   ├─ package-lock.json
   ├─ package.json
   ├─ postcss.config.js
   ├─ public
   │  ├─ next.svg
   │  └─ vercel.svg
   ├─ tailwind.config.ts
   └─ tsconfig.json

```