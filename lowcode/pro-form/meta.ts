import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ProFormMeta: ComponentMetadata = {
  componentName: 'ProForm',
  title: '高级表单',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'formily-sandbox',
    version: '0.1.0',
    exportName: 'ProForm',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [],
    supports: {
      className: true,
      style: true,
    },
    component: {
      isContainer: true,
    },
  },
};
const snippets: Snippet[] = [
  {
    title: '高级表单',
    screenshot: '',
    schema: {
      componentName: 'ProForm',
      props: {},
      children: {
        componentName: 'ProFormGrid',
        props: {
          maxColumns: 4,
          minColumns: 4,
          columnGap: 10,
        },
        children: {
          componentName: 'ProFormInput',
          props: {
            gridSpan: 1,
          },
        },
      },
    },
  },
];

export default {
  ...ProFormMeta,
  snippets,
};
