import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from 'src/i18n';
import app from '../../.quasar/app';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en-us',
  fallbackLocale: 'en-us',
  messages
});

export default () => {
  // Set i18n instance on app
  // @ts-ignore
  app.i18n = i18n;
};

export { i18n };
