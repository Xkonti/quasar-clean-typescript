# Quasar - Clean Typescript Template (quasar-clean-typescript)

Simple Vue.js starter project using [Quasar Framework](https://quasar.dev/), typescript extension and a couple of additional packages for class based components and class based Vuex store modules.

This template is a standard project created using [Quasar CLI](https://quasar.dev/start/quasar-cli) with settings:
 - Sass with indented syntax
 - Manually specify what to import (auto-import doesn't work with Typescript)
 - ESLint, Vuex, Axios, Vue-i18n plugins
 - Airbnb ESLint preset with generated prettier config

In addition the project has added:
 - Typescript support via [Quasar Typescript extension](https://github.com/quasarframework/app-extension-typescript) created by the Quasar team
 - Support for class based Vue components via:
    - [Vue Class Component package](https://github.com/vuejs/vue-class-component)
    - [Vue Property Decorator package](https://github.com/kaorun343/vue-property-decorator)
 - Support for class based Vuex store modules via [Vuex Module Decorators package](https://github.com/championswimmer/vuex-module-decorators)

The template has the same content as the default Quasar CLI project, but everything is formatted with generated
prettier config, all Vue components are class based. In addition the layout state is contained in separate Vuex
store module which serves as an example of class based Vuex store module usage.

## Customization

If you would like to recreate this project on your own or customize some things, you can follow the [tutorial explaining how this template was created](https://dev.to/xkonti/creating-quasar-framework-project-with-typescript-support-51ge).

## Installation

 1. Clone this repository.
 2. Rename project name, description, author etc. in `package.json` and `quasar.conf.js`.
 3. Run `yarn install` command to install dependencies.
 4. Run `dev` script from `package.json` to run the dev server.
