import { umami } from '~analytics/umami';

document.querySelector('.umami')?.addEventListener('click', () => {
  umami.track('click umami button');
});
