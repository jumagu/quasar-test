import type { EssentialLinkProps } from '../components/EssentialLink.vue';

export const linksList: EssentialLinkProps[] = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'las la-graduation-cap',
    link: 'https://quasar.dev',
  },
  {
    title: 'Typography',
    caption: 'Font styling in quasar',
    icon: 'las la-align-left',
    link: 'typography',
  },
  {
    title: 'Flex',
    caption: 'UI layouts',
    icon: 'las la-layer-group',
    link: 'flex',
  },
  {
    title: 'Dialog',
    caption: 'Alerts, comfirm and prompts',
    icon: 'las la-window-minimize',
    link: 'dialog',
  },
  {
    title: 'Forms',
    caption: 'Inputs, checkbox, validations...',
    icon: 'lab la-wpforms',
    link: 'forms',
  },
];
