import { defineNuxtPlugin } from '#app';
import ParallaxDirective from '~/directives/parallax';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('parallax', ParallaxDirective);
});