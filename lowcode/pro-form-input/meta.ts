import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ProFormInputMeta: ComponentMetadata = {
  componentName: 'ProFormInput',
  title: '输入框',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'formily-sandbox',
    version: '0.1.0',
    exportName: 'ProFormInput',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        title: '跨栏列数',
        name: 'gridSpan',
        setter: 'NumberSetter',
        defaultValue: 2,
      },
    ],
    supports: {
      className: true,
      style: true,
    },
    component: {},
  },
};
const snippets: Snippet[] = [
  {
    title: '输入框',
    screenshot: '',
    schema: {
      componentName: 'ProFormInput',
      props: {
        gridSpan: 2,
      },
    },
  },
];

export default {
  ...ProFormInputMeta,
  snippets,
};
