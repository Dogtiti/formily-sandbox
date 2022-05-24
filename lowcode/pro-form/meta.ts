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
      {
        name: '!item',
        title: '表单项',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'primaryKey',
                      title: '面包屑项编号',
                      condition: () => false,
                      setter: 'StringSetter',
                    },
                    {
                      title: '跨栏列数',
                      important: true,
                      name: 'gridSpan',
                      setter: 'NumberSetter',
                      defaultValue: 1,
                    },
                  ],
                },
              },
              initialValue: () => {
                return {
                  primaryKey: String(Math.floor(Math.random() * 10000)),
                  gridSpan: 1,
                };
              },
            },
          },
        },
        getValue: (target) => {
          const children = target?.node?.children.exportSchema();
          const value = children?.map(item => ({
            gridSpan: item?.props?.gridSpan,
            primaryKey: item?.props?.primaryKey,
          }));
          return value;
        },
        setValue: (target, value) => {
          const node = target.node;
          
          console.log('value: ', value);
          const map = {};
          value.forEach(item => {
            map[item.primaryKey] = item;
          });
          node.mergeChildren(
            (child) => {
              const key = child.getPropValue('primaryKey');
              console.log('key: ', key, map[key]);
              if (!map[key]) {
                return true;
              }
              if (child.getPropValue('gridSpan') !== map[key].gridSpan) {
                child.setPropValue('gridSpan', map[key].gridSpan);
              }
              return false;
            },
            (children) => {
              const childrenSchema = node.children.exportSchema();
              const childMap = {};
              childrenSchema.forEach(item => {
                childMap[item.props.primaryKey] = item;
              });
              const newItems = value.filter(item => !childMap[item.primaryKey]);
              return newItems.map(item => ({
                componentName: 'ProFormInput',
                props: {
                  ...item, 
                }
              }));
            },
            (firstChild, secondChild) => {}
          );
        },
      }
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
