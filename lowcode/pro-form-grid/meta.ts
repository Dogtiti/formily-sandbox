import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ProFormGridMeta: ComponentMetadata = {
  componentName: 'ProFormGrid',
  title: '网格布局',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'formily-sandbox',
    version: '0.1.0',
    exportName: 'ProFormGrid',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        title: '最大列数',
        name: 'maxColumns',
        setter: 'NumberSetter',
        defaultValue: 4,
      },
      {
        title: '最小列数',
        name: 'minColumns',
        setter: 'NumberSetter',
        defaultValue: 4,
      },
      {
        title: '列间距',
        name: 'columnGap',
        setter: 'NumberSetter',
        defaultValue: 10,
      },
    ],
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
    title: '网格布局',
    screenshot: '',
    schema: {
      componentName: 'ProFormGrid',
      props: {
        maxColumns: 4,
        minColumns: 4,
        columnGap: 10,
      },
    },
  },
];

export default {
  ...ProFormGridMeta,
  snippets,
};
