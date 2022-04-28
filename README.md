# Quasar App (quasar-clean-typescript)

A simple Vue.js starter project using [Quasar Framework v2](https://quasar.dev/) with:
- [Vue 3](https://vuejs.org/) with components using the [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html#what-is-composition-api) with the `<script setup>` blocks
- [TypeScript](https://www.typescriptlang.org/) everywhere but in a few config files
- [Vite](https://github.com/vitejs/vite) based [Quasar CLI](https://quasar.dev/quasar-cli-vite/quasar-config-js) project
- [Pinia](https://github.com/vuejs/pinia) state management
- [Axios](https://github.com/axios/axios) based API services using [Axios Service Base TS](https://github.com/Xkonti/axios-service-base-ts)
- Smarter routing using [Vue Smart Routes](https://github.com/Xkonti/vue-smart-routes)
- [ESLint](https://github.com/eslint/eslint) with [Standard preset](https://standardjs.com/rules.html)
- [Sass](https://sass-lang.com/) with SCSS syntax
- Internationalization with [Vue-i18n](https://kazupon.github.io/vue-i18n/)
- Automatic GitHub action that checks pushes and pull requests for linting, builds and tests

## Getting Started

This project uses [Yarn package manager](https://yarnpkg.com/) for dependency management.

### Install the dependencies:

```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
yarn run dev
```

### Lint the files

```bash
yarn lint
```

### Build the app for production

```bash
yarn build
```

## Older versions

Older versions of the template are available on other branches:
- `pre-v-1.9.6`: A version of the template that was using a version of Quasar Framework prior to the v1.9.6
- `pre-v-2.0`: A version of the template that was using Quasar Framework prior to the v2.0
